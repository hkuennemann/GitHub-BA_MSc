## ---------------------------------------------------------------------------------------
library(data.table)     # Run once per session
library(igraph)         # Run once per session
library(ggplot2)        # Run once per session

# Set working directory
setwd("/Users/mpatman/Dropbox/Teaching/Nova/Network Analytics/2023-24/Examples") 


## ---------------------------------------------------------------------------------------
# Load data from file 20200120-imdb_movie_actor.csv
dt.movie.actor <- fread("20200120-imdb_movie_actor.csv") 

# See what dt.movie.actor looks like
dt.movie.actor 


## ---------------------------------------------------------------------------------------
# Count in how many movies each actor has participated and how many 
# principal actor each movie has
dt.movie.actor[, n_movies := .N, by=actor]
dt.movie.actor[, n_actors := .N, by=list(movie, year)]

dt.movie.actor 


## ---------------------------------------------------------------------------------------
# Remove entries in which actors have no name 
dt.movie.actor <- dt.movie.actor[!(actor == "")]
dt.movie.actor 


## ---------------------------------------------------------------------------------------
dt.movie.actor[actor == "Scarlett Johansson (b.1984)", list(actor, movie)] 


## ---------------------------------------------------------------------------------------
dt.movie.actor[grep("DiCaprio", actor), list(actor, movie)] 


## ---------------------------------------------------------------------------------------
# Create a bipartite graph with movies and actors 
all.actors <- dt.movie.actor[, list(name=unique(actor), type=TRUE)]
all.movies <- dt.movie.actor[, list(name=unique(movie), type=FALSE)]

all.vertices <- rbind(all.actors, all.movies)
g <- graph.data.frame(dt.movie.actor[, list(movie, actor)], directed=FALSE, vertices=all.vertices)
summary(g) 


## ---------------------------------------------------------------------------------------
g.actors <- bipartite.projection(g)$proj2 # Can take several minutes
summary(g.actors) 


## ---------------------------------------------------------------------------------------
    top.movies.2019 <- dt.movie.actor[year == 2019, .N, 
                                      by=list(movie, votes)][order(-votes)][1:50, movie]
    top.movies.2019 


## ---------------------------------------------------------------------------------------
    actors.in.top.movies.2019 <- dt.movie.actor[movie %in% top.movies.2019, unique(actor)]
    actors.in.top.movies.2019 


## ---------------------------------------------------------------------------------------
    g.actors <- induced.subgraph(g.actors, vids = V(g.actors)$name %in% actors.in.top.movies.2019)
    summary(g.actors) 


## ---------------------------------------------------------------------------------------
    plot(g.actors, vertex.size=5, vertex.label=NA) 


## ---------------------------------------------------------------------------------------
V(g.actors)$degree <- degree(g.actors)
V(g.actors)$closeness <- closeness(g.actors)
V(g.actors)$betweenness <- betweenness(g.actors)
V(g.actors)$evcent <- evcent(g.actors)$vector 


## ---------------------------------------------------------------------------------------
V(g.actors)$degree 


## ---------------------------------------------------------------------------------------
V(g.actors)$evcent 


## ---------------------------------------------------------------------------------------
V(g.actors)$label <- "" 
V(g.actors)$size <- 5
orange.palette <- colorRampPalette(c("gold", "dark red"))
V(g.actors)$color <- orange.palette(max(V(g.actors)$degree)+1)[V(g.actors)$degree+1]
plot(g.actors) 


## ---------------------------------------------------------------------------------------
dt.g.actors <- data.table(get.data.frame(g.actors, "vertices"))
head(dt.g.actors[order(-betweenness)], 20) 


## ---------------------------------------------------------------------------------------
tail(dt.g.actors[order(-betweenness)], 20) 


## ---------------------------------------------------------------------------------------
    # Get the neighbors of Matt Damon (b.1970)
    neighbors(g.actors, "Matt Damon (b.1970)") 


## ---------------------------------------------------------------------------------------
    # Get the neighbors of Cate Blanchett (b.1969)
    neighbors(g.actors, "Cate Blanchett (b.1969)") 


## ---------------------------------------------------------------------------------------
    # Movies that Matt Damon and Cate Blanchett have in common
    V(g)[intersect(neighbors(g, "Matt Damon (b.1970)"),
                   neighbors(g, "Cate Blanchett (b.1969)"))] 


## ---------------------------------------------------------------------------------------
    # Create a function to find the movies in common between two actors
    movies.in.common <- function(actor.1, actor.2) {
      intersect(dt.movie.actor[actor == actor.1, movie],
                dt.movie.actor[actor == actor.2, movie])
    } 


## ---------------------------------------------------------------------------------------
    movies.in.common("Matt Damon (b.1970)", "Cate Blanchett (b.1969)") 


## ---------------------------------------------------------------------------------------
qplot(degree(g.actors), geom="histogram", binwidth=1) 


## ---------------------------------------------------------------------------------------
qplot(E(g.actors)$weight, geom="histogram") 

