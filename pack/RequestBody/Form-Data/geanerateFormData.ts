import { Body, FormdataEntity } from "../../interface/interface"

function generateFormData(input:Body){
  let output="\n"
    if(input?.formdata?.length){
        output+=`      requestBody:
        content:
          multipart/form-data:
            schema:
              type: object
              properties:`
              input?.formdata?.forEach((data)=>{
 output+="\n"+template(data);
              })
    }
   console.log("Adding FormData is Done ✅");
    
return output
}

function template(input:FormdataEntity){
    let output=""
    output= `                ${input.key}:
                  type: string`
    if(input.type==="file"){
        output+="\n                  format: binary " 
    }
    return output
}
export {generateFormData}