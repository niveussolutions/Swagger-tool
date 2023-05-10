import * as fs from 'fs';
var getpath = require("path");
import {  getSwaggerData } from './pack/getFullCollection';
import { verifyOutputPath } from './pack/utility/utility';

function runProject(inputPath,outputPath){
   return new Promise(function (resolve, reject) {
fs.readFile(inputPath,(error,data:any)=>{    
     try{
//Checking that path is exist or not 
if(fs.existsSync(inputPath)){
   
data=JSON.parse(data)

// ** handling extra Array
   let input:any
   input=data.item[0].item
   if(!input){
      input=data
   }
   else{
      input=data.item[0]
      input.info=data.info
   }

   
   
   let yamlFilePath=getpath.resolve("../")+"/swagger-tool-output.yaml";
//checking path for output yaml file 
if(verifyOutputPath(outputPath)){

   yamlFilePath=outputPath;
}


// ***

    var writeData=getSwaggerData(input)
  //writing the file 

  fs.writeFile(yamlFilePath, writeData, (data) => {
    console.log("\n\n*******     done       *********\n");
    console.log(`Output Path ${yamlFilePath}\n\n`);
    
    resolve({yamlFilePath,writeData});
    // console.log("If response is not in your postman collection an example response will be added automatically\n");
    console.log("**************************************************************\n\n");
});
}
else
console.log("⛔⛔⛔   ERROR   ⛔ ⛔⛔ \nCollection path is incorrect\n\n");

     }catch(e){
        //Printing the error
      console.log("\n\n      ⛔⛔⛔   ERROR   ⛔ ⛔⛔         \n"+e);
      console.log("Collection is not correct\n\n");
      reject("Collection is not correct\n\n");
     }
  })

})
}

function fun(){
   console.log("Simple logging");
   
}
// runProject(inputPath,outputPath);
export {runProject,fun}