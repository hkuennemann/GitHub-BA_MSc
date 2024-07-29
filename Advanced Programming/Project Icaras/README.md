# Project Icaras

## Description

The python-based tool is designed for comprehensive analysis of commercial air travel data, with a focus on sustainability. Developed for the International Air Transport Association's dataset, it provides insights into flight patterns, airplane usage, and potential decarbonization strategies. 

Please check the project outline at the bottom for a more detailed description.

## Project Documentation

For more detailed information about Project Icarus, including architecture, function descriptions, class details, and usage examples, please visit our project documentation:

You can find the index.html file for that here: /docs/_build/html/index.html

Our documentation is designed to help users and developers understand the inner workings of Project Icarus, making it easier to utilize or contribute to the project. It includes:

## Usage

### Environment Setup & Showcase Notebook

To get started with our project, follow these steps to set up your environment and run the showcase notebook, which demonstrates the project's capabilities.

**Step 1: Clone the Repository**
First, clone the repository to your local machine using Git. Open your terminal (or command prompt) and run the following command:

    git clone https://gitlab.com/adpro3080008/group_09

**Step 2: Navigate to the Project Directory**
Change into the project directory using the cd command:

    cd group_09

**Step 3: Install Dependencies**

Our project uses a Conda environment to manage dependencies. 

Create and install the project's dependencies by running:

    conda env create -f environment.yml

This command reads the environment.yml file and sets up an environment with all the necessary Python packages.

**Step 4: Activate the Environment**

Once the environment is created, activate it with:

    conda activate adpro_group09

**Step 5: Run the Showcase Notebook**

In order to run in the entire notebook, including LLM based methods (aircraft_info and airport_info) via ChatOpenAI, here's how to setup a system variable:

Windows
https://support.microsoft.com/pt-pt/topic/how-to-manage-environment-variables-in-windows-xp-5bf6725b-655e-151c-0b55-9a8c9c7f747d

MAC
https://phoenixnap.com/kb/set-environment-variable-mac

Use a system variable name called OPENAI_API_KEY with the value of your key.


### Unit Test for distance Function in distances.py

This suite tests the distance function located in source/Functions/distances.py through three scenarios using pytest:

- Input Validation Test: Verifies that a TypeError is raised if any input is not a number, ensuring robust error handling.
- Intercontinental Distance Test: Calculates the distance between Duesseldorf Airport and San Diego Airport, expecting a specific value in kilometers (precision to the nearest kilometer). This test assesses the function's accuracy over long distances.
- Identical Points Test: Confirms that the function returns a distance of 0 when both input points are identical, testing the function's handling of edge cases.

**Preparation:**

Ensure pytest and any other required libraries are installed.
Navigate to the project root directory.

**Execution:**
Run the tests by executing pytest source/Test/test_distances.py in your terminal. Review the output to verify that all tests pass.

## License

Project Icarus is licensed under the GNU AFFERO GENERAL PUBLIC LICENSE Version 3, dated 19 November 2007. This license allows you to:

- Use: You are free to use Project Icarus for personal, academic, or commercial purposes.
- Modify: You can alter and extend the source code for your needs.
- Distribute: You are allowed to share the software in its original or modified form.

However, there are conditions you must follow:

- Disclose Source: If you modify and distribute the software, you must also disclose your source code under the same license.
- Network Use Is Distribution: If you run a modified version of the software on a server and allow others to use it, you are required to provide the source code under this license.
- Same License: Modified versions must be licensed under the GNU AFFERO GENERAL PUBLIC LICENSE Version 3 or later.

For a detailed explanation of the license and your rights under it, please refer to the LICENSE file included with this project or visit the GNU AFFERO GENERAL PUBLIC LICENSE Version 3 official page: https://www.gnu.org/licenses/agpl-3.0.en.html

## Project status
Completed

______

## Project Description

### Overview

Our company was tasked with analyzing commercial airflight data as part of a sustainability study. The goal is to contribute to the green transition by providing insights and tools to help reduce the environmental impact of air travel. This project involved creating a Python toolset to analyze and visualize the data, with the final output being a comprehensive Showcase Notebook that presents our findings and analyses.

### Part 1: Initial Development

#### Phase 1.1: Repository Setup

- Created a GitHub repository named "Group_XX" (where XX is our group number) with a README.md, a proper license, and a .gitignore file.
- README.md includes our names, student numbers, and emails for contact.

#### Phase 1.2: Class Development

- Developed a PEP8 compliant class for the project.
- Implemented the init method to download and load datasets into Pandas dataframes, removing superfluous columns.
- Created a function to calculate real distances between airports in kilometers and developed unit tests for this function.

#### Phase 1.3: Method Development

- Developed methods for:
  1. Plotting airport locations on a map by country.
  2. Plotting the distribution of flight distances.
  3. Plotting flights from a specific airport, with an option to filter for internal flights.
  4. Plotting the most used airplane models by number of routes, with options to filter by country or countries.
  5. Plotting flights from a specific country, with an option to filter for internal flights.

### Part 2: Additional Features and Analysis

#### Phase 1: Adding Info with an LLM

- Defined methods for:
  - Listing aircraft models.
  - Providing detailed specifications about an aircraft model using an LLM.
  - Providing detailed information about airports.

#### Phase 2: Decarbonization Analysis

- Refined the fifth method to include a cutoff distance for short-haul flights, visually differentiating between long-haul and short-haul flights.
- Analyzed short-haul flights for a selected country with over 20 internal routes.
- Calculated the total distance of short-haul flights and explored the potential reduction in emissions by replacing short-haul flights with rail services.
- Annotated plots with these findings and referenced emission ratios from credible sources.

### Phase 3: Finalization

- Created a YAML file for package dependencies and a conda environment file to ensure OS-independent code execution.
- Used Sphinx to generate a __docs__ directory for code documentation.
- Updated README.md with instructions for setting up and using the project.

### Conclusion

The final delivery includes a Showcase Notebook that runs from start to finish, demonstrating our methods and findings. This project provided valuable insights into the sustainability of air travel and potential measures to reduce its environmental impact. The developed tools and analyses will aid in future studies and presentations on this topic.
