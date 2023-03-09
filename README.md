> **_NOTE:_**  This is a Node js Tool please check that you have installed Node JS
<!-- GETTING STARTED -->
## Getting Started

This is a node js ( Javascript tool ) to geanerate swagger yaml file by postman collection

### Prerequisites

it needs only node js
* Node JS Install For Linux (Ubuntu)
  * To get this version, you can use the apt package manager. Refresh your local package index first:
  ```sh
  sudo apt update
  ```
  * Then install Node.js:
  ```sh
  sudo apt update
  ```
  * Check that the install was successful by querying node for its version number:
   ```sh
    node -v
   ```
 # Output
  ```sh
  
v10.19.0

  ```
### Installation

_Below is an example of how to install the tool in your 

1. Clone the repo
   ```sh
   git clone https://github.com/niveussolutions/Swagger-tool.git
   ```
2. Open the terminal inside downloaded Swagger-tool project file
   Run the project
   ```sh
   node app.js "home/download/your_postman_collection.json"
   ```
3. If your collection/Collection path is correct it will generate the swagger doc structure inside the output.yaml file 
**_NOTE:_**  output.yaml file is inside your project folder and confirm the structure using swagger once 

<!-- USAGE EXAMPLES -->
## Usage

<!-- Use this space  to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_
 -->




<!-- ROADMAP -->
## Roadmap

- [x] Response
- [x] Header
- [x] Query params
- [x] Request Body
   - [X] raw
      - [x] JSON
      - [ ] XML
   - [ ] form-data
   - [ ] x-www-form-urlencoded


    
   
