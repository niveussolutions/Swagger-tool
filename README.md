
<!-- GETTING STARTED -->
## Getting Started

This is a Node JS Tool which can be used to generate swagger documentation by providing postman collection.

## Prerequisites

it needs Nodejs and NPM
  ### Nodejs and NPM installation guide 

  1. For Ubuntu/Linux [Click](https://www.geeksforgeeks.org/installation-of-node-js-on-linux/)

  2. For Windows [Click](https://www.geeksforgeeks.org/installation-of-node-js-on-windows/)
   

## Installation

Follow the steps mentioned below to install the tool in your local system 

   ### use sudo for Ubuntu

1. Clone the repo
   ```sh
   git clone https://github.com/niveussolutions/Swagger-tool.git
   ```
2. Change the directory to the cloned repo.
   ```sh
   cd Swagger-tool
   ```

3. Install all the  Dependency with the below command 
   ```sh
   npm install
   ```
   # To run using User Interface
   
   4. Run the below Command 
      ```sh
      npm run swagger-ui
      ```
      ## Upload your postman collection

      ![plot](./uploads/Screenshot%20from%202023-05-16%2014-57-41.png) 

      ## Copy your swagger output

      ![plot](./uploads/Screenshot%20from%202023-05-16%2015-34-41.png) 
   # To run using cli
   4. In this step we mention the location of our postman collection along with the destination path and name of our swagger document.
      Run the project
      ```sh
      npm run swagger-converter "your_postman_collection_path" "your_output_file_path"
      ```
      Example :
      ```sh
      npm run swagger-converter "/home/niveus/Downloads/example.postman_collection.json" "/home/niveus/Downloads/example_output.yaml"
      ```
      ![plot](./uploads/Screenshot%20from%202023-05-16%2015-03-59.png) 

### **_NOTE:_**  
 1. The requests should be beautified(Can be done with beautify option present in postman) and all the postman requests should be in a single folder and not grouped within the main folder.
 2. Please update the brach once before using the tool with below command.
 ```sh
   git pull origin main
 ```
 3. Please update your node modules.
 ```sh
   npm i
   ```
            
            

<!-- ROADMAP -->
## Roadmap

- [x] Response
- [x] Header
- [x] Query params
- [x] Request Body
   - [X] raw
      - [x] JSON
      - [ ] XML
   - [X] form-data
   - [X] x-www-form-urlencoded



   
