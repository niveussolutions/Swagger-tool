import * as fs from 'fs';
var getpath = require("path");
import {  getSwaggerData } from './pack/getFullCollection';
import { verifyOutputPath } from './pack/utility/utility';
let path=process.argv
fs.readFile(path[2],(error,data:any)=>{    
     try{
//Checking that path is exist or not 
if(fs.existsSync(path[2])){
   
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

   
   
   let yamlFilePath=getpath.resolve("../")+"/swagger-tool-output.js";
//checking path for output yaml file 
if(verifyOutputPath(path[3])){

   yamlFilePath=path[3]
}


// ***

    
  //writing the file 
  fs.writeFile(yamlFilePath, getSwaggerData(input), () => {
    console.log("\n\n✅✅✅✅     done       ✅✅✅✅\n");
    console.log(`🌟🌟🌟 Output File Path Path ${yamlFilePath}  🌟🌟🌟\n\n`);
    
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
     }
  })