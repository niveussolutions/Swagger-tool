
## Getting Started

This Node.js tool generates Swagger documentation from a Postman collection.

### Prerequisites

Make sure you have Node.js and NPM installed. If not, you can follow these installation guides:

- For Ubuntu/Linux, [click here](https://www.geeksforgeeks.org/installation-of-node-js-on-linux/).

- For Windows, [click here](https://www.geeksforgeeks.org/installation-of-node-js-on-windows/).

### Installation

Follow these steps to install the tool on your local system:

1. Clone the repository:
   ```sh
   git clone https://github.com/niveussolutions/Swagger-tool.git
   ```

2. Change to the cloned repo directory:
   ```sh
   cd Swagger-tool
   ```

3. Install all dependencies:
   ```sh
   npm install
   ```

#### To run using User Interface

4. Run the following command:
   ```sh
   npm run swagger-ui
   ```

   - **Upload your Postman collection:**
   
     ![Upload Postman Collection](./uploads/Screenshot%20from%202023-05-16%2014-57-41.png)

   - **Copy your Swagger output:**
   
     ![Copy Swagger Output](./uploads/Screenshot%20from%202023-05-16%2015-34-41.png)

#### To run using CLI

4. Specify the location of your Postman collection, the destination path, and the name of your Swagger document. Run the project with:
   ```sh
   npm run swagger-converter "your_postman_collection_path" "your_output_file_path"
   ```

   Example:
   ```sh
   npm run swagger-converter "/home/niveus/Downloads/example.postman_collection.json" "/home/niveus/Downloads/example_output.yaml"
   ```

   ![Run CLI](./uploads/Screenshot%20from%202023-05-16%2015-03-59.png)

### **_NOTE:_**  
1. Ensure that your requests are beautified (you can use the beautify option in Postman), and all Postman requests should be in a single folder, not grouped within the main folder.

2. Before using the tool, update it once by running the following command within the Swagger-tool directory:
   ```sh
   npm run updateTool
   ```
