import { ResponseEntity } from "../interface/interface"

function generateResponse(responseData:ResponseEntity){
    
    let output=`\n        "${responseData.code}":
           description: ${responseData.status}
           content:
             ${getContent(responseData)}:
               schema:
                 type: object
               example:
                ${responseData.body}`
return output
}
function getContent(data:any){
    let output:any
    data.header.forEach((val:any)=>{
    
      if(val.key==="content-type"){
        output= val.value
      }
    })
    return output
  }
function generateResponses(responseDataArray:any){

  let output=""
  responseDataArray.forEach((val:ResponseEntity)=>{
    console.log("Response :"+val.name);
    
    output+=generateResponse(val);
  })
  console.log("Done ✅");
  
  return output
}
export {generateResponses}