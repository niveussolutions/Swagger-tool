import { Body, FormdataEntity } from "../../interface/interface"

function generateFormData(input:Body){
  let output=""
    if(input?.formdata?.length){
      input?.formdata?.forEach((data)=>{
        if(!data.disabled)
        output+="\n"+template(data);
                     })
        if(output.length>2)
        output="\n"+`      requestBody:
        content:
          multipart/form-data:
            schema:
              type: object
              properties:`+output
              
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