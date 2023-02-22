let postManCollection=require("./signdesk.postman_collection.json")
let header=postManCollection.item[0].item[0].request.header


function generateHeader(header){
  function template({key,type,value}){
    let template=
    
`             - in: header
               name: ${key}
               required: true
               schema:
                 type: string
               example:
                 ${value}`
    return template
}
let output=""
header.forEach((val)=>{
    if(!val.disabled)
    output+=`\n${template(val)}`
})
return "\n"+`      parameters:`+output;
}
module.exports={generateHeader}
