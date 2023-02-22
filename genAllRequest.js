let template=require("./template");
let genBody=require("./requestBodyGeanerate")
let genHeader=require("./geanerateHeader").generateHeader
function createRequestBody(data){
    let path =data.request.url.path.join("/");
    let body=data.request.body.raw
return '\n'+genBody.createFinalRequestBody(body)
}

function genAllPath(allRequestArray){
let output="";
allRequestArray.forEach(element => {
    let path ="/"+element.request.url.path.join("/");
    let method=element.request.method.toLocaleLowerCase()
    let name=element.name
    output+="\n"+template.pathTemplate({path,method,name})+genHeader(element.request.header)
    if(method!=="get"&&method!=="delete")
    output+=createRequestBody(element)
    output+="\n"+
`      responses:
        '200':
          description: Success
          content:
            application/json:
              schema:
                type: object`
    // output+=genHeader(element.request.header)
});
return output
// console.log(output);

}

module.exports={genAllPath}