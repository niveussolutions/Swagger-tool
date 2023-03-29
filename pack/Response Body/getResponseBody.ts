import { ResponseEntity } from "../interface/interface"

function generateResponse(responseData:ResponseEntity){
    
    let a=`\n        "${responseData.code}":
           description: ${responseData.status}
           content:
             ${getcContent(responseData)}:
               schema:
                 type: object
               example:
                ${responseData.body}`
return a
}
function getcContent(data:any){
    let output:any
    data.header.forEach((val)=>{
    
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