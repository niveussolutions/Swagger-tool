import { ItemEntity } from '../../../interface/interface';
import {spaces,findDataTypes} from '../../../utility/utility';
let createDocBody=(input:string,space:number)=>{
    let data={};
    try{
try{

  data = JSON.parse(input);
}catch{
console.log("Error in JSON parse "+input+"⛔");

}
      let output = "";
      for (let a in data) {
          let name = a;
          let type = findDataTypes(data[name])
          if(type==="object"){
              type+=`\n${spaces(space+2)}properties:\n${spaces(space+4)}${createDocBody(JSON.stringify(data[name]),space+4).trim()}`
          }
          if(type==="array"){
              type+=`\n${spaces(space+2)}items :\n${spaces(space+3)}type : ${findDataTypes(data[name][0])!=="object"?findDataTypes(data[name][0]):objectInsideArray(JSON.stringify(data[name][0]),space+2)}`
          }
          output = `${spaces(space)}${output}\r\n${spaces(space)}${name}:\n${spaces(space+2)}type: ${type}`;
      }
      return output
    } catch(e){
console.log("Error in createDocBody ⛔");

    }
     return ""   
}

function objectInsideArray(object:string,space:number){
    
  return  `object\n${spaces(space+1)}properties:\n${spaces(space+3)}${createDocBody(object,space+3).trim()}`
}
function createRawJsonRequestBody(input:ItemEntity){
  console.log("JSON Raw Request Body of :"+input.name);
  
  
  let content="json/application";
    let body=`      requestBody:
        required: true
        content:
          ${content}:
            schema:
              type: object
              properties:\n                `
   let newInput=input.request?.body?.raw;
    body+=createDocBody(newInput?newInput:"",16).trim();
    console.log("Done ✅");
              return body
}

export {createRawJsonRequestBody}
