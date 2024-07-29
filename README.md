# GitHub Repository for MSc Business Analytics Program

Welcome to my GitHub repository showcasing projects from my MSc Business Analytics studies. This repository features the coding work from various programming-intensive courses completed during the program.


## 📁 Repository Structure

The repository is organized into folders, each corresponding to a specific course. Inside these folders, you'll find coding assignments and projects completed for the course. To navigate the repository, simply browse to the relevant course folder to view the associated projects and materials.


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

### 🌟 Highlighted Projects

- **Advanced Data Analysis**
  - 💰 `Bitcoin analysis`: [Jump here](https://github.com/hkuennemann/MSc_BA_Projects/tree/main/Advanced%20Data%20Analysis/4.Bitcoin_analysis)
    
- **Advanced Programming**
  - 🛩️ `Project Icaras`: [Jump here](https://github.com/hkuennemann/MSc_BA_Projects/tree/main/Advanced%20Programming/Project%20Icaras)
    
- **Machine Learning**
  - 🍷 `VinifyTech`: [Jump here](https://github.com/hkuennemann/MSc_BA_Projects/tree/main/Machine%20Learning/3.VinifyTech)
  - 🩸 `BloodCell AI`: [Jump here](https://github.com/hkuennemann/MSc_BA_Projects/tree/main/Machine%20Learning/6.BloodCellAI)


### 📊 Advanced Data Analytics

- **Folder:** `Advanced Data Analytics`
  
- **Description:** The course focused on advanced data analysis techniques and their applications in machine learning. It began with programming for data analysis, progressed through distributed data analysis and SQL, and covered key concepts such as curve fitting and regression. Students delved into modeling dynamic systems, dimensionality reduction, classification, clustering, and distributed machine learning, equipping students with a broad array of techniques for handling various types of data. Finally, it introduced graph algorithms and cloud-based data analysis, highlighting modern approaches to managing and analyzing large datasets.
  
- **Projects:**
  - 🏅 `Olympic Games analysis`: Analyzed Olympic Games data using Python and Pandas to explore athlete participation, medal counts, and trends. Tasks included examining age and medal counts of top athletes, comparing medal counts to country populations, and reimplementing analyses with Spark SQL.
    
  - 👶 `Children weight prediction`: Developed a model to predict children's weight based on age using the National Health and Nutrition Examination Survey data. Included linear and polynomial regression models (degrees 1-10) to find the best fit for the weight-age relationship.
    
  - 🔬 `Cancer classification`: The project was divided into two parts. First, I analyzed the Breast Cancer dataset, classifying tumors as malignant or benign based on digitized breast mass features. I reduced the dataset from thirty dimensions to two using PCA and t-SNE, and compared the results to assess tumor type separation. I also normalized the input features before applying these techniques.
In the second part, I examined internet usage data from 1995 to 2012, fitting a logistic growth model to predict user growth. I visualized the model’s fit with the actual data, interpreted the logistic function parameters, and evaluated the model’s adequacy by computing and plotting residuals, as well as calculating 95% confidence intervals for the parameters.

  - 💰 `Bitcoin analysis (🌟)`: I analyzed Bitcoin transactions to understand cryptocurrency behavior. This included comparing Spark and Pandas for computing transaction statistics, such as identifying the largest transactions and tracking trends over time. I created indices to query Bitcoin addresses for details like account balances and average transaction values. I also built classification models to label addresses based on transaction data and used K-means clustering to group addresses without predefined labels. Additionally, I utilized GPU acceleration with cuDF and cuGraph to speed up network analysis and centrality metric calculations, deepening the understanding of Bitcoin addresses' roles in transactions.

- **Skills acquired:** `Python programming`, `Data analysis`, `Pandas`, `Numpy`, `Matplotlib`, `Spark`, `regression`, `Dimensionality reduction (PCA, t-SNE)`, `classification techniques`, `clustering techniques`, `Data visualization`, `GPU acceleration (cuDF, cuML, cuGraph)`.


### 🗂️ Data Curation

- **Folder:** `Data Curation`
  
- **Description:** This course introduced concepts of data curation and management with applications. Students explored data characteristics and performed data curation through hands-on experiences, such as data extraction, data wrangling, data exploration, and database, and data science workflow in terms of reproducible Extract-Transform-Load (ETL) processes.

- **Projects:**
  
  - 🔢 `Intro data curation`: This project served as an introduction to fundamental Python concepts. I decoded geohashed locations using coordinates and DJIA values, calculated Euler's number with factorials, estimated Pi using Monte Carlo simulations, and applied convolution filters to an image with `numpy` and `Pillow`.

  - 🦠 `Covid analysis`: I analyzed and cleaned COVID-19 daily reports using `pandas`. I worked with a dataset containing daily COVID-19 statistics for various regions, performing tasks such as reading and cleaning the data, filtering records for a specific year, and analyzing average and median values. I identified outliers, calculated correlations, created new columns, computed custom metrics, and categorized data into discrete bins for error analysis.

  - 🎬 `Movie recommendation`: I built a (very simple) movie recommendation system using the MovieLens dataset. I cleaned the data, analyzed movie ratings, and categorized movies based on their release years and developed a simple system to suggest movies based on user preferences.

  - 🚢 `Titanic analysis`: Here, I analyzed the Titanic dataset, which included detailed passenger information. I focused on data cleaning and answering questions about passenger demographics, survival rates, and fare differences. My tasks involved correcting erroneous values, calculating percentages and averages, and comparing survival rates across different passenger groups and fare quintiles.

  - 🚗 `Cars analysis`: I analyzed used car listings on the OLX platform in Portugal. The dataset was split into three parts, each with specific errors I resolved before analysis. I cleaned and merged the datasets, and addressed questions about car prices, popular models, and sales statistics to understand the market dynamics on OLX.

  - 🌸 `Fragrance analysis`: I examined a dataset of perfume listings to explore ratings, popularity, and note preferences. I cleaned the data by addressing missing values and formatting issues, identified top-rated brands, and categorized perfumes by popularity. I examined how the length of perfume names correlated with ratings, analyzed popular notes for Chanel perfumes, and designed recommendations for perfumes similar to Chanel No.5 based on note combinations and popularity.
 
- **Skills acquired:** `Python programming`, `Data analysis`, `Pandas`, `Numpy`, `Matplotlib`, `data cleaning`, `Data visualization`.


### 📈 Data Visualization

- **Folder:** `Data Visualization`
  
- **Description:** This course taught the art and science of converting data into graphical representations, making complex information easily understandable. It covered key principles of human perception in interpreting visual information, highlighting how visual variables like color, size, and shape can convey different aspects of data. The course delved into various techniques for visualizing multivariate data, including point-based, line-based, and region-based methods, ensuring students understand how to choose the right technique for different data types. Additionally, it dealt as an introduction course for Tableau, equipping students with practical skills in creating effective and insightful visualizations.

- **Projects:**
  
  - 🏅 `Olympic Games Dashboard`: The project used interactive Tableau dashboards to analyze Olympic data, focusing on athlete physical attributes and country performance. It examined variations in attributes such as age, height, and weight across different sports categories and their relationship with medal wins. Additionally, it investigated the impact of hosting the Olympics on a country's medal count, showing how this effect has evolved over time.

- **Skills aquired:** `Tableau`, `Data visualization`, `Use of visual variables (color, size, shape)`, `Techniques for visualizing multivariate data`, `Storytelling with data visualizations`.


### 🖥️ Advanced Programming

- **Folder:** `Advanced Programming`
  
- **Description:** This course delved into advanced programming concepts. We explored code reusability, style guides, and linting, along with practical time series analysis using Pandas. Emphasis was placed on documentation and testing through unit, functional, and integration tests with pytest. The curriculum included version control with Git and  software deployment using Conda virtual environments, time-series analysis for decomposition and forecasting, and tackling big data challenges with Dask. Hands-on practice was facilitated through Jupyter Notebooks provided for each module.
  
- **Projects:**
  
  - 🛩️ `Project Icaras (🌟)`: This project focused on the comprehensive analysis of commercial air travel data, with an emphasis on sustainability. Utilizing a dataset from the International Air Transport Association, the project aimed to provide insights into flight patterns, airplane usage, and potential decarbonization strategies. Key functionalities included the calculation of distances between airports, plotting of flight routes, and the use of an LLM for aircraft and airport information.
    
  - 🎙️ `Audio-Transcription-Summarization`: In this project, we developed a Python tool for text extraction and summarization. We implemented functionality to extract text from audio files or YouTube links using WhisperAI and provided options for summarization using GPT-3.5-turbo. The tool supports different summarization styles and integrates these features into a cohesive solution.

- **Skills acquired:** `Python programming`, `Object-oriented programming`, `Data analysis`, `Pandas`, `Code reusability`, `Style guides`, `Linting`, `Pytest`, `Unit testing`, `Version control`, `Git`, `Virtual environments`, `Conda`, `Big data`, `Dask`, `Sphinx`.


### 🌐 Network Analytics

- **Folder:** `Network Analytics`
  
- **Description:** This course covered foundational concepts in network science and provided methods and procedures for analyzing large-scale social networks. Topics included clustering, information diffusion, organizational design, viral marketing, and the dynamics of social media.
  
- **Projects:**
  
  - 🎬 `Movie networks`: This project focused on evaluating the significance of movies released between 2010 and 2019 using data analysis and network analysis techniques. It involved preparing and manipulating movie and actor datasets, creating visualizations to uncover patterns, and constructing and analyzing bipartite graphs to explore connections between movies and actors. The project also included calculating various centrality measures to determine the most influential movies and actors, as well as comparing network properties with those of random graphs. 
 
  - ❤️ `Dating platforms`: This project analyzed the behavior of users on an online dating platform by examining "likes" and invites between members. It involved building and evaluating directed and undirected graphs to represent invites and likes networks, respectively, and exploring concepts such as homophily, clustering coefficients, and network structures. The project also included testing hypotheses about network properties and comparing the dating platform's network to theoretical models of online networks.

- **Skills acquired**: `Network analysis`, `Centrality measures`, `Graph theory`, `R programming`, `igraph package`, `ggplot2 package`. 


### ☁️ Web & Cloud Computing

- **Folder:** `Web & Cloud Computing`
  
- **Description:** This course covered the fundamentals of web applications and the key architectural, functional and technological principles for developing state-of-the-art web and cloud applications. This course had a particular focus on client-side applications in scenarios that leverage data science and big data integration.
  
- **Projects:**
  
  - ⚽ `League Lense`: In this project I developed a dynamic football website using JavaScript, HTML, and CSS, integrating data from the API-Football (RESTful). The site enabled users to select specific seasons and leagues to view detailed standings, top scorers, top assist providers, and matchday results. Additionally, users could explore individual games for more in-depth information, including the starting 11 players and their formations.

- **Skills acquired:** `JavaScript`, `DOM manipulation`, `dynamic content`, `fetch API`, `Promises`, `async/await`, `HTML structure`, `CSS integration`.


### 🤖 Machine Learning

- **Folder:** `Machine Learning`
  
- **Description:** This course equipped me with the skills to approach business problems analytically and interact competently on topics of machine learning and advanced analytics. Through hands-on experience, I performed machine learning tasks, building end-to-end ML workflows. Embracing a learning-by-doing culture, I applied ML algorithms to real-world business cases, enhancing my ability to build, improve, and communicate ML pipelines effectively.
  
- **Projects:**
  
  - 🏢 `ABC Insurance`: I analyzed customer data for ABC Insurance (fictional) to address customer churn and declining lifetime value. This involved exploratory data analysis to assess data quality, building predictive models to estimate customer value based on characteristics, and creating models to predict churn. Based on my analysis, I provided recommendations to improve customer retention and marketing strategies.
 
  - 🛒 `FarTrend`: For FarTrend, a fictional e-commerce company, I analyzed customer data to enhance personalized marketing and predict future purchases. I conducted exploratory data analysis, performed customer segmentation using KMeans and Agglomerative Clustering, and developed an item-based collaborative filtering recommendation system. The motivation of this project was to boost customer engagement through tailored marketing campaigns and product recommendations.
 
  - 🍷 `VinifyTech (🌟)`: This project focused on leveraging machine learning algorithms to analyze and predict wine quality based on chemical composition data. By utilizing models like Decision Trees, Random Forests, SGD Classifiers, and Support Vector Classifiers, the project explores the intricate relationships between various wine attributes and their quality ratings. I focused on data cleaning, exploratory data analysis, feature engineering, and hyperparameter optimization to improve the accuracy of wine quality predictions.

  - 📸 `Deep-learing classification`: I developed and optimized deep learning models to classify business photos from the Yelp dataset. This included training a deep neural network, addressing overfitting issues, defining and evaluating a convolutional neural network (CNN), and applying transfer learning with pre-trained models to enhance performance. The task aimed to compare model accuracies and losses to identify the best approach for photo classification.
 
  - 💬 `Deep-learning sentiment analysis`: Here, I worked on classifying Tweets into emotions using deep learning techniques, including RNN and LSTM models. I compared their performance with pretrained word embeddings, BERT models, and state-of-the-art LLMs from Cohere. The focus was on evaluating model complexity and embedding impact on classification accuracy, optimizing performance through fine-tuning, and finding the most effective model and embedding combination for emotion classification.
 
  - 🩸 `BloodCell AI (🌟)`: In this final project, I focused on identifying and classifying blood cell subtypes such as Eosinophils, Lymphocytes, Monocytes, and Neutrophils. Using Convolutional Neural Networks (CNNs) as a baseline, I implemented advanced models, fine-tuned hyperparameters, and explored Transfer Learning with pre-trained models and Vision Transformers (ViTs). The aim was to achieve robust and accurate diagnostics for blood cell classification through rigorous data handling and model optimization.

- **Skills acquired:** `Exploratory Data Analysis (EDA)`, `Data Cleaning`, `Data Quality Assessment`, `Feature Engineering`, `Predictive Modeling`, `Model Evaluation`, `Hyperparameter Tuning`, `Clustering`, `Customer Segmentation`, `Recommendation Systems`, `Collaborative Filtering`, `Decision Trees`, `Random Forest`, `Support Vector Machines (SVM)`, `Stochastic Gradient Descent (SGD)`, `Deep Learning`, `Convolutional Neural Networks (CNN)`, `Transfer Learning`, `Vision Transformers`, `Recurrent Neural Networks (RNN)`, `Long Short-Term Memory (LSTM)`, `BERT`, `TensorFlow`,`Keras`.
