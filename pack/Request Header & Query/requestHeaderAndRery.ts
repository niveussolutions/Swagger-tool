import { Request } from "../interface/interface"
// This function will return structure for both header and Query
function generateHeaderAndQuery(input:Request):string{
    let header=input?.header
    let query=input.url.query
    function template({key,name,value}){
    let template=   
`             - in: ${name}
               name: ${key}
               required: true
               schema:
                 type: string
               example:
                 ${value}`
      return template
  }
  let output=""
  
  // Logic for the Header parameters 
  if(header?.length){
    header.forEach((value)=>{
      let val:any={...value,name:"header"}
      if(value?.key.toLocaleLowerCase()!=="content-type"&&value?.key.toLocaleLowerCase()!=="authorization")
        if(!val?.disabled)
        output+=`\n${template(val)}`
    })
  }

  //Logic for the Query parameters
  if(query&&query.length){
    query.forEach((value)=>{
      let val={...value,name:"query"}
      output+=`\n${template(val)}`
    })
    
    
  }
  
  return output? "\n"+`      parameters:`+output:output;
  }
 export {generateHeaderAndQuery}