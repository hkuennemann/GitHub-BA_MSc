# GitHub Repository for MSc Business Analytics program
This repository contains the projects that I completed during my MSc Business Analytics program. It includes the coding work for the coding-intensive courses I took during my master's program.


## Courses and Projects

Below is a list of the courses, each represented in different folders within this repository:


### Advanced Data Analytics

- **Folder:** `Advanced Data Analytics`
  
- **Description:** The course focused on advanced data analysis techniques and their applications in machine learning. It began with programming for data analysis, progressed through distributed data analysis and SQL, and covered key concepts such as curve fitting and regression. Students delved into modeling dynamic systems, dimensionality reduction, classification, clustering, and distributed machine learning, equipping students with a broad array of techniques for handling various types of data. Finally, it introduced graph algorithms and cloud-based data analysis, highlighting modern approaches to managing and analyzing large datasets.
  
- **Projects:**
  - `1.OlympicGames_analysis`: This analysis of Olympic Games data served as an introduction to Python and Pandas. It explores athlete participation, medal counts, and trends over time. Key tasks include analyzing participation numbers in Summer and Winter Olympics, identifying the youngest and oldest Gold medalists, and determining the top athletes with the most Gold medals. The notebook also examines medal counts relative to country populations, trends in medal counts and athlete participation, and relations between different countries' performances. Additionally, some analyses are reimplemented using Spark SQL.
    
  - `2.Children_weight_prediction`: This project involves predicting the weight of children up to 24 months old based on their age using data from the National Health and Nutrition Examination Survey (2017-2018). The dataset includes age in months and weight in kilograms. The analysis starts with creating a linear regression model to predict weight from age, including plotting the data to assess correlation and evaluating model performance. Additionally, the project explores polynomial regression models of degrees 1 through 10 to determine if a polynomial model offers a better fit compared to the linear model, and identifies the coefficients of the best-performing polynomial model.
    
  - `3.Cancer_classification`: The project is split into two parts. The first involves analyzing the Breast Cancer dataset, which classifies tumors as malignant or benign based on features from digitized breast mass images. The dataset is reduced from thirty dimensions to two using PCA and t-SNE approaches, and the results are compared to assess how well the two tumor types are separated. Normalization of input features is performed before applying these techniques.
The second part includes examining internet usage data from 1995 to 2012. A logistic growth model is fitted to this data to predict internet user growth. The model’s fit is visualized alongside the actual data, and the parameters of the logistic function are interpreted. Residuals are computed and plotted to evaluate the model’s adequacy, and the 95% confidence intervals for the model parameters are calculated under the assumption of consistent random error distribution.

  - `4.Bitcoin_analysis`: This project analyzes Bitcoin transactions to gain insights into cryptocurrency behavior. It includes comparing Spark and Pandas for computing transaction statistics, such as identifying the largest transactions and tracking trends over time.
It involves creating indices to support queries about Bitcoin addresses, such as account balances and average transaction values. Classification models are built to label addresses based on transaction data, and clustering techniques like K-means are used to group addresses without predefined labels.
Additionally, the project leverages GPU acceleration with cuDF and cuGraph to expedite network analysis and centrality metric calculations, enhancing the understanding of Bitcoin addresses' roles in transactions.


### Data Curation

- **Folder:** `Data Curation`
  
- **Description:** This course introduced concepts of data curation and management with applications. Students explored data characteristics and performed data curation through hands-on experiences, such as data extraction, data wrangling, data exploration, and database, and data science workflow in terms of reproducible Extract-Transform-Load (ETL) processes.

- **Projects:**
  
  - `1.Intro_dataCuration`: This project served as an introduction to fundamental Python concepts. It includes decoding a geohashed location using the coordinates and the DJIA value, calculating Euler's number using factorials, estimating Pi with Monte Carlo simulations, and applying convolution filters to an image using `numpy` and `Pillow`.

  - `2.Covid_analysis`: This project involves analyzing and cleaning COVID-19 daily reports using `pandas`. The dataset contains various columns detailing daily COVID-19 statistics for different regions. The tasks include reading the dataset, cleaning and correcting data issues, filtering records for a specific year, and performing various analyses such as finding average and median values, identifying outliers, and calculating correlations. Additionally, it involves creating new columns based on existing data, computing custom metrics, and categorizing data into discrete bins for error analysis. The project leverages `pandas` functionalities to manipulate, clean, and analyze the data efficiently.

  - `3.Movie_recommendation` (old exam): This project involves building a movie recommendation system using the MovieLens dataset. The tasks include cleaning the data, analyzing movie ratings, and implementing a collaborative filtering method for recommendations. The movies in the dataset are categorized into time intervals based on their release years, and a simple recommendation system is created to suggest movies based on user preferences.

  - `4.Titanic_analysis` (old exam): This project analyses the Titanic dataset containing detailed passenger information. The project involves data cleaning, analysis, and answering specific questions about the passengers, such as their demographics, survival rates, and fare differences. The tasks include correcting erroneous values in the data, calculating percentages and averages, and comparing survival rates across different passenger groups and ticket fare quintiles.

  - `5.Cars_analysis` (old exam): This project analyses listings of used cars on the OLX platform in Portugal. The dataset is divided into three parts, each with specific errors that need to be resolved before analysis. The tasks include data cleaning, merging the datasets, and answering questions about car prices, popular models, and sales statistics to understand the market dynamics on the OLX platform.

  - `6.Fragrance_analysis` (old exam): The project involves analyzing a dataset of perfume listings to address various questions about ratings, popularity, and note preferences. Key tasks include cleaning the data by correcting missing values and formatting issues, identifying the top-rated brands, categorizing perfumes based on their popularity, and examining how the length of perfume names correlates with their ratings. The project also involves analyzing the most popular notes for Chanel perfumes and designing recommendations for perfumes similar to Chanel No.5 based on note combinations and popularity.


### Data Visualization

- **Folder:** `Data Visualization`
  
- **Description:** This course taught the art and science of converting data into graphical representations, making complex information easily understandable. It covered key principles of human perception in interpreting visual information, highlighting how visual variables like color, size, and shape can convey different aspects of data. The course delved into various techniques for visualizing multivariate data, including point-based, line-based, and region-based methods, ensuring students understand how to choose the right technique for different data types. Additionally, it dealt as an introduction course for Tableau, equipping students with practical skills in creating effective and insightful visualizations.

- **Projects:**
  
  - `Olympic Games Dashboard`: The project uses interactive Tableau dashboards to analyze Olympic data, focusing on athlete physical attributes and country performance. It examines variations in attributes such as age, height, and weight across different sports categories and their relationship with medal wins. Additionally, it investigates the impact of hosting the Olympics on a country's medal count, showing how this effect has evolved over time.


### Advanced Programming

- **Folder:** `Advanced Programming`
  
- **Description:**
  
- **Projects:**
  
  - ´Project´: Brief description


### Network Analytics

- **Folder:** `Network Analytics`
  
- **Description:**
  
- **Projects:**
  
  - ´Project´: Brief description


### Web & Cloud Computing

- **Folder:** `Web & Cloud Computing`
  
- **Description:**
  
- **Projects:**
  
  - ´Project´: Brief description


### Machine Learning

- **Folder:** `Machine Learning`
  
- **Description:**
  
- **Projects:**
  
  - ´Project´: Brief description
