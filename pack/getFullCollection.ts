import { generateHeaderAndQuery } from "./Request Header & Query/requestHeaderAndRery";
import { generateResponses } from "./Response Body/getResponseBody";
import { exampleResponse, swaggerPathTemplate, swaggerTopTemplate } from "./swagger template/swaggerTopTemplate";
import { getRawData } from "./RequestBody/Raw Data/rawDataWithCondition";
import { generateFormData } from "./RequestBody/Form-Data/geanerateFormData";
import { PostmanCollection } from "./interface/interface";
import { generateUrlEncoded } from "./RequestBody/Form-urlencoded/geanerateUrlEncoded";
import { log } from "console";
import { URL } from "url";

function genAllPath(allRequestArray:any){
    let output="";
    output
    allRequestArray.forEach((element:any) => {
      let path=""
      if(element?.request?.url?.path)
         path ="/"+element?.request?.url?.path.join("/"); // Formatting the path
      else{
        let url=new URL(element?.request?.url)
        path=url.pathname;
      }
        let method=element.request.method.toLocaleLowerCase() // Formatting the Method
        let name=element.name
        

        // ***** Adding Swagger path template *****
        output+="\n"+swaggerPathTemplate({path,method,name});


        // Adding Parameter ** Header ** Query **
        output+=generateHeaderAndQuery(element.request);
        console.log(`Adding Header and Query for ${name} is Done ✅`);


         // Adding RequestBody and Examples**** Raw Data ***
         if(method!=="get"&&method!=="delete")
        if(element.request?.body?.raw&&element.request.body.mode==="raw"){ 
          output+=getRawData(element);
          output+=`\n            example: ${element.request.body.raw}`
        }else if(element.request?.body?.formdata){
          output+= generateFormData(element.request?.body);
        }
        else if(element.request?.body?.urlencoded){
          output+= generateUrlEncoded(element.request?.body);
        }

        // Adding the Response
        output+=`\n      responses:`
        if(element.response.length){                                                              // Adding Response if ith
          output+=generateResponses(element.response)
        }else{
          output+=exampleResponse()
        }
        // output+=genHeader(element.request.header)
    });
    return output
    // console.log(output);
    
    }
function getSwaggerData(input:PostmanCollection){
  
  let title=input.info.name;
  let url:any
  if(input.item){
    if(typeof input.item[0].request?.url=== "object"){
      url=input.item[0].request?.url.raw
      let data=new URL(input.item[0].request.url.raw)
       url=data.origin
    }
   else{
    let data=new URL(input.item[0].request.url)
       url=data.origin
   }
   
  }
  let output=""
  output=swaggerTopTemplate({title,url});
  output+=genAllPath(input.item);
  return output;
}
export {getSwaggerData}