# -*- coding: utf-8 -*-
"""
Created on Sat Dec  9 17:48:21 2023

@author: Tomás Gonçalves
"""

'''
def create_SeasonDF(Season, window_size=3):
    
    if Season == "Summer":
        olympic_host_years = hosts_summer
    elif Season == "Winter":
        olympic_host_years = hosts_winter

    # Determine the overall range of years
    all_years = sorted({int(year) for years in olympic_host_years.values() for year in years})
    start_year, end_year = min(all_years), max(all_years)

    # Initialize an empty DataFrame for storing moving average values
    ma_results = pd.DataFrame({"Year": range(start_year, end_year + 1)})
       
    # Iterate through each country
    for country, host_years in olympic_host_years.items():
        
        if country == "YUG":
            break
        
        # Make a copy of the DataFrame for the country to avoid modifying the original
        country_medals = df_storage[Season][country].copy()

        # Convert 'Year' to integer directly
        country_medals["Year"] = country_medals["Year"].astype(int)

        # Exclude the years where the country hosted the Olympics
        training_data = country_medals[~country_medals['Year'].isin(host_years)]

        # Calculate centered moving average
        country_medals["Medal_Share_MA"] = training_data["Medal_Share"].rolling(window=window_size, center=True).mean()

        # Merge with the main DataFrame
        ma_results = pd.merge(ma_results, country_medals[["Year", "Medal_Share_MA"]], on="Year", how="left").rename(columns={"Medal_Share_MA": country})
    
    return ma_results
'''

'''
from sklearn.linear_model import LinearRegression

def create_SeasonDF(Season):

    if Season == "Summer":
        olympic_host_years = hosts_summer
    elif Season == "Winter":
        olympic_host_years = hosts_winter

    # Determine the overall range of years
    all_years = sorted({int(year) for years in olympic_host_years.values() for year in years})
    start_year, end_year = min(all_years), max(all_years)

    # Initialize an empty DataFrame for storing regression values
    regression_results = pd.DataFrame({"Year": range(start_year, end_year + 1)})

    # Iterate through each country
    for country, host_years in olympic_host_years.items():

        if country == "YUG":
            break

        # Make a copy of the DataFrame for the country to avoid modifying the original
        country_medals = df_storage[Season][country].copy()

        # Convert 'Year' to integer directly
        country_medals["Year"] = country_medals["Year"].astype(int)

        # Exclude the years where the country hosted the Olympics
        training_data = country_medals[~country_medals['Year'].isin(host_years)]

        # Perform linear regression
        X_train = training_data[["Year"]]
        y_train = training_data["Medal_Share"]
        model = LinearRegression().fit(X_train, y_train)

        # Predict for all years
        X_all = pd.DataFrame({"Year": range(start_year, end_year + 1)})
        regression_results[country] = model.predict(X_all)

    return regression_results
'''
