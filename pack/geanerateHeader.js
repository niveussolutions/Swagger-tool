// let postManCollection=require("./signdesk.postman_collection.json")
// let header=postManCollection.item[0].item[0].request.header


function generateHeader(input){
  let header=input.header
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
if(header.length)
header.forEach((val)=>{
  val.name="header"
    if(!val.disabled)
    output+=`\n${template(val)}`
})
if(query&&query.length)
query.forEach((val)=>{
  val.name="query"
  output+=`\n${template(val)}`
})
return output? "\n"+`      parameters:`+output:output;
}
module.exports={generateHeader}
