import { Body,  HeaderEntityOrUrlencodedEntityOrVariableEntity } from "../../interface/interface"

function generateUrlEncoded(input:Body){
  let output=""
  
    if(input?.urlencoded?.length){
        input?.urlencoded?.forEach((data)=>{
            if(!data.disabled)
            output+="\n"+template(data);
                         })
        if(output.length>2)
        output="\n"+`      requestBody:
        content:
          application/x-www-form-urlencoded::
            schema:
              type: object
              properties:`+output
              
    }
   console.log("Adding FormData is Done ✅");
    
return output
}

function template(input:HeaderEntityOrUrlencodedEntityOrVariableEntity){
    let output=""
    output= `                ${input.key}:
                  type: string`
    if(input.type==="file"){
        output+="\n                  format: binary " 
    }
    return output
}
export {generateUrlEncoded}