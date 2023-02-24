function generateResponse(responseData){
    
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
function getcContent(data){
    let output
    data.header.forEach((val)=>{
    
      if(val.key==="content-type"){
        output= val.value
      }
    })
    return output
  }
function generateResponses(responseDataArray){
  let output=""
  responseDataArray.forEach((val)=>{
    output+=generateResponse(val);
  })
  return output
}
module.exports={generateResponses}