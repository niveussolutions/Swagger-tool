> **_NOTE:_**  This is a Node js Tool please check that you have installed Node JS and NPM
<!-- GETTING STARTED -->
## Getting Started

This is a Node js ( TypeScript tool ) to generate swagger yaml file by postman collection

## Prerequisites

it needs Nodejs and NPM
  ### Nodejs and NPM installation guide 

  1. For Ubuntu/Linux [Click](https://www.geeksforgeeks.org/installation-of-node-js-on-linux/)

  2. For Windows [Click](https://www.geeksforgeeks.org/installation-of-node-js-on-windows/)
   

## Installation

_Below is an steps to install the tool in your 

   ### use sudo for Ubuntu

1. Clone the repo
   ```sh
   git clone https://github.com/niveussolutions/Swagger-tool.git
   ```
2. Open the terminal inside downloaded Swagger-tool project file
   Run the project
   ```sh
   ts-node-esm run.ts "your_postman_collection_path"
   ```
3. Install all the packages like TypeScript  
   Install Dependency with npm 
   ```sh
   npm install
   ```
4. If your collection/Collection path is correct it will generate the swagger doc structure inside the out/output.yaml file 
**_NOTE:_**  output.yaml file is inside your project folder and confirm the structure using swagger once 

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


    
   