# GitHub Repository for MSc Business Analytics Program

Welcome to my GitHub repository showcasing projects from my MSc Business Analytics studies. This repository features the coding work from various programming-intensive courses completed during the program.

## 📁 Repository Structure

The repository is organized into folders, each corresponding to a specific course. Inside these folders, you'll find:

- **Projects:** Coding assignments and projects completed for the course.
- **Class Materials:** Relevant materials such as lecture notes or example code, where applicable.

To navigate the repository, simply browse to the relevant course folder to view the associated projects and materials. Each project includes its own README file with detailed instructions on setup and usage.


## ⚠ Disclaimer

This repository contains projects and assignments completed during my master's studies in Business Analytics at NOVA SBE. The purpose of this repository is to showcase my work, demonstrate my skills, and provide examples of my coding and analytical abilities.

### Academic Integrity

I am committed to upholding the highest standards of academic integrity. The materials in this repository are provided for educational purposes only. They are intended to serve as a portfolio of my work and as a learning resource. I do not condone or support academic dishonesty in any form.

### Guidelines for Use

- Personal Learning: Feel free to use the content here to learn and understand various concepts and techniques.
- Collaboration: If you find any of my projects useful for your own work, please provide proper attribution and refrain from submitting any of this work as your own.
- Academic Submissions: Do not copy or submit any of the projects or assignments in this repository for academic credit. Always ensure that any work you submit is your own and adheres to your institution's policies on academic integrity.
  
By accessing and using the contents of this repository, you agree to adhere to these guidelines and to uphold the principles of academic honesty and integrity.


## 📚 Courses and Projects

Below is a list of the courses, each represented in different folders within this repository:


### Advanced Data Analytics

- **Folder:** `Advanced Data Analytics`
  
- **Description:** The course focused on advanced data analysis techniques and their applications in machine learning. It began with programming for data analysis, progressed through distributed data analysis and SQL, and covered key concepts such as curve fitting and regression. Students delved into modeling dynamic systems, dimensionality reduction, classification, clustering, and distributed machine learning, equipping students with a broad array of techniques for handling various types of data. Finally, it introduced graph algorithms and cloud-based data analysis, highlighting modern approaches to managing and analyzing large datasets.
  
- **Projects:**
  - `1.OlympicGames_analysis`: This analysis of Olympic Games data served as an introduction to Python and Pandas. It explored athlete participation, medal counts, and trends over time. Key tasks included analyzing participation numbers in Summer and Winter Olympics, identifying the youngest and oldest Gold medalists, and determining the top athletes with the most Gold medals. The notebook also examined medal counts relative to country populations, trends in medal counts and athlete participation, and relations between different countries' performances. Additionally, some analyses are reimplemented using Spark SQL.
    
  - `2.Children_weight_prediction`: This project involved predicting the weight of children up to 24 months old based on their age using data from the National Health and Nutrition Examination Survey (2017-2018). The analysis started with creating a linear regression model to predict weight from age, including plotting the data to assess correlation and evaluating model performance. Additionally, the project explored polynomial regression models of degrees 1 through 10 to determine if a polynomial model offers a better fit compared to the linear model, and identified the coefficients of the best-performing polynomial model.
    
  - `3.Cancer_classification`: The project was split into two parts. The first involved analyzing the Breast Cancer dataset, which classifies tumors as malignant or benign based on features from digitized breast mass images. The dataset was reduced from thirty dimensions to two using PCA and t-SNE approaches, and the results were compared to assess how well the two tumor types are separated. Normalization of input features was performed before applying these techniques.
The second part included examining internet usage data from 1995 to 2012. A logistic growth model was fitted to this data to predict internet user growth. The model’s fit was visualized alongside the actual data, and the parameters of the logistic function were interpreted. Residuals were computed and plotted to evaluate the model’s adequacy, and the 95% confidence intervals for the model parameters were calculated under the assumption of consistent random error distribution.

  - `4.Bitcoin_analysis`: This project analyzed Bitcoin transactions to gain insights into cryptocurrency behavior. It included comparing Spark and Pandas for computing transaction statistics, such as identifying the largest transactions and tracking trends over time.
It involved creating indices to support queries about Bitcoin addresses, such as account balances and average transaction values. Classification models were built to label addresses based on transaction data, and clustering techniques like K-means were used to group addresses without predefined labels.
Additionally, the project leveraged GPU acceleration with cuDF and cuGraph to expedite network analysis and centrality metric calculations, enhancing the understanding of Bitcoin addresses' roles in transactions.

- **Skills acquired:** `Python programming`, `Data analysis`, `Pandas`, `Numpy`, `Matplotlib`, `Spark`, `regression`, `Dimensionality reduction (PCA, t-SNE)`, `classification techniques`, `clustering techniques`, `Data visualization`, `GPU acceleration (cuDF, cuML, cuGraph)`.


### Data Curation

- **Folder:** `Data Curation`
  
- **Description:** This course introduced concepts of data curation and management with applications. Students explored data characteristics and performed data curation through hands-on experiences, such as data extraction, data wrangling, data exploration, and database, and data science workflow in terms of reproducible Extract-Transform-Load (ETL) processes.

- **Projects:**
  
  - `1.Intro_dataCuration`: This project served as an introduction to fundamental Python concepts. It included decoding a geohashed location using the coordinates and the DJIA value, calculating Euler's number using factorials, estimating Pi with Monte Carlo simulations, and applying convolution filters to an image using `numpy` and `Pillow`.

  - `2.Covid_analysis`: This project involved analyzing and cleaning COVID-19 daily reports using `pandas`. The dataset contains various columns detailing daily COVID-19 statistics for different regions. The tasks included reading the dataset, cleaning and correcting data issues, filtering records for a specific year, and performing various analyses such as finding average and median values, identifying outliers, and calculating correlations. Additionally, it involved creating new columns based on existing data, computing custom metrics, and categorizing data into discrete bins for error analysis. 

  - `3.Movie_recommendation` (old exam): This project involved building a movie recommendation system using the MovieLens dataset. The tasks included cleaning the data, analyzing movie ratings, and implementing a collaborative filtering method for recommendations. The movies in the dataset are categorized into time intervals based on their release years, and a simple recommendation system was created to suggest movies based on user preferences.

  - `4.Titanic_analysis` (old exam): This project analysed the Titanic dataset containing detailed passenger information. The project involved data cleaning, analysis, and answering specific questions about the passengers, such as their demographics, survival rates, and fare differences. The tasks included correcting erroneous values in the data, calculating percentages and averages, and comparing survival rates across different passenger groups and ticket fare quintiles.

  - `5.Cars_analysis` (old exam): This project analysed listings of used cars on the OLX platform in Portugal. The dataset is divided into three parts, each with specific errors that need to be resolved before analysis. The tasks included data cleaning, merging the datasets, and answering questions about car prices, popular models, and sales statistics to understand the market dynamics on the OLX platform.

  - `6.Fragrance_analysis` (old exam): The project involved analyzing a dataset of perfume listings to address various questions about ratings, popularity, and note preferences. Key tasks included cleaning the data by correcting missing values and formatting issues, identifying the top-rated brands, categorizing perfumes based on their popularity, and examining how the length of perfume names correlates with their ratings. The project also involved analyzing the most popular notes for Chanel perfumes and designing recommendations for perfumes similar to Chanel No.5 based on note combinations and popularity.
 
- **Skills acquired:** `Python programming`, `Data analysis`, `Pandas`, `Numpy`, `Matplotlib`, `data cleaning`, `Data visualization`.


### Data Visualization

- **Folder:** `Data Visualization`
  
- **Description:** This course taught the art and science of converting data into graphical representations, making complex information easily understandable. It covered key principles of human perception in interpreting visual information, highlighting how visual variables like color, size, and shape can convey different aspects of data. The course delved into various techniques for visualizing multivariate data, including point-based, line-based, and region-based methods, ensuring students understand how to choose the right technique for different data types. Additionally, it dealt as an introduction course for Tableau, equipping students with practical skills in creating effective and insightful visualizations.

- **Projects:**
  
  - `Olympic Games Dashboard`: The project used interactive Tableau dashboards to analyze Olympic data, focusing on athlete physical attributes and country performance. It examined variations in attributes such as age, height, and weight across different sports categories and their relationship with medal wins. Additionally, it investigated the impact of hosting the Olympics on a country's medal count, showing how this effect has evolved over time.

- **Skills aquired:** `Tableau`, `Data visualization`, `Use of visual variables (color, size, shape)`, `Techniques for visualizing multivariate data`, `Storytelling with data visualizations`.


### Advanced Programming

- **Folder:** `Advanced Programming`
  
- **Description:** This course delved into advanced programming concepts. We explored code reusability, style guides, and linting, along with practical time series analysis using Pandas. Emphasis was placed on documentation and testing through unit, functional, and integration tests with pytest. The curriculum included version control with Git and  software deployment using Conda virtual environments, time-series analysis for decomposition and forecasting, and tackling big data challenges with Dask. Hands-on practice was facilitated through Jupyter Notebooks provided for each module.
Class-material: https://gitlab.com/adpro1/adpro2024
  
- **Projects:**
  
  - `Project Icaras`: This project focused on the comprehensive analysis of commercial air travel data, with an emphasis on sustainability. Utilizing a dataset from the International Air Transport Association, the project aimed to provide insights into flight patterns, airplane usage, and potential decarbonization strategies. Key functionalities included the calculation of distances between airports, plotting of flight routes, and the use of an LLM for aircraft and airport information.
    
  - `Audio-Transcription-Summarization`: In this project, we developed a Python tool for text extraction and summarization. We implemented functionality to extract text from audio files or YouTube links using WhisperAI and provided options for summarization using GPT-3.5-turbo. The tool supports different summarization styles and integrates these features into a cohesive solution.

- **Skills acquired:** `Python programming`, `Object-oriented programming`, `Data analysis`, `Pandas`, `Code reusability`, `Style guides`, `Linting`, `Pytest`, `Unit testing`, `Version control`, `Git`, `Virtual environments`, `Conda`, `Big data`, `Dask`, `Sphinx`.


### Network Analytics

- **Folder:** `Network Analytics`
  
- **Description:** This course covered foundational concepts in network science and provided methods and procedures for analyzing large-scale social networks. Topics included clustering, information diffusion, organizational design, viral marketing, and the dynamics of social media.
  
- **Projects:**
  
  - ´Movie_networks´: This project focused on evaluating the significance of movies released between 2010 and 2019 using data analysis and network analysis techniques. It involved preparing and manipulating movie and actor datasets, creating visualizations to uncover patterns, and constructing and analyzing bipartite graphs to explore connections between movies and actors. The project also included calculating various centrality measures to determine the most influential movies and actors, as well as comparing network properties with those of random graphs. 
 
  - ´Dating_platforms´: This project analyzed the behavior of users on an online dating platform by examining "likes" and invites between members. It involved building and evaluating directed and undirected graphs to represent invites and likes networks, respectively, and exploring concepts such as homophily, clustering coefficients, and network structures. The project also included testing hypotheses about network properties and comparing the dating platform's network to theoretical models of online networks.

- **Skills acquired**: `Network analysis`, `Centrality measures`, `Graph theory`, `R programming`, `igraph package`, `ggplot2 package`. 


### Web & Cloud Computing

- **Folder:** `Web & Cloud Computing`
  
- **Description:** This course covered the fundamentals of web applications and the key architectural, functional and technological principles for developing state-of-the-art web and cloud applications. This course had a particular focus on client-side applications in scenarios that leverage data science and big data integration.
  
- **Projects:**
  
  - ´League Lense´: In this project I developed a dynamic football website using JavaScript, HTML, and CSS, integrating data from the API-Football (RESTful). The site enabled users to select specific seasons and leagues to view detailed standings, top scorers, top assist providers, and matchday results. Additionally, users could explore individual games for more in-depth information, including the starting 11 players and their formations.

- **Skills acquired:** `JavaScript`, `DOM manipulation`, `dynamic content`, `fetch API`, `Promises`, `async/await`, `HTML structure`, `CSS integration`.


### Machine Learning -- TODO --

- **Folder:** `Machine Learning`
  
- **Description:**
  
- **Projects:**
  
  - ´Project´: Brief description
 
  - ´Project´: Brief description
 
  - ´Project´: Brief description
 
  - ´Project´: Brief description
 
  - ´Project´: Brief description
 
  - ´Project´: Brief description

- **Skills acquired:** 
