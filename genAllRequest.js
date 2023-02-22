let template=require("./template");
let genBody=require("./requestBodyGeanerate")
let genHeader=require("./geanerateHeader").generateHeader
function genPath(data){
    let path =data.request.url.path.join("/");
    let body=data.request.body.raw
return '\n'+genBody.createFinalBody(body)
}

function genAllPath(allRequestArray){
let output="";
allRequestArray.forEach(element => {
    let path ="/"+element.request.url.path.join("/");
    let method=element.request.method.toLocaleLowerCase()
    output+="\n"+template.pathTemplate({path,method})+genHeader(element.request.header)+genPath(element)+"\n"+
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