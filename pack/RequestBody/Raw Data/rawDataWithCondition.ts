import { createRawJsonRequestBody } from "./JSON Body/Geanerate-Body";

function getRawData(element:any){
    let output=""
    try{
        if(element.request?.body?.options?.raw?.language==="json")
        JSON.parse(element.request?.body?.raw);
        output+="\n"+createRawJsonRequestBody(element)
      }   catch{
        // Printing The Error 
     console.log("Error in JSON parse of "+element.name+" Request JSON Body :⛔");
      }
      return output
}
export {getRawData}