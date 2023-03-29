import * as fs from 'fs';
import {  getSwaggerData } from './pack/getFullCollection';
let path=process.argv
fs.readFile(path[2],(error,data:any)=>{    
     try{
   data=JSON.parse(data)

// ** handling extra Array
   let input:any
   input=data.item[0].item
   if(!input){
      input=data
   }
   else
   input=data.item[0]



// ***
    
  //writing the file 
  fs.writeFile('./output/output.yaml', getSwaggerData(data), () => {
    console.log("\n\n*******     done       *********\n");
    // console.log("If response is not in your postman collection an example response will be added automatically\n");
    console.log("**********************----------------****************-------------------************************\n\n");
});
     }catch(e){
        //Printing the error
      console.log("\n\n*****************************          ERROR             ******************************************\n"+e);
      console.log("Collection is not correct\n\n");
     }
  })