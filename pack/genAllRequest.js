let template=require("./template");
let genBody=require("./rawRequestBodyGeanerate")
let genHeader=require("./geanerateHeader").generateHeader

function createRequestBody(data){
    let path =data.request.url.path.join("/");
    
return '\n'+genBody.createFinalRequestBody(data)
}

function genAllPath(allRequestArray){
let output="";
allRequestArray.forEach(element => {
    let path ="/"+element.request.url.path.join("/");
    let method=element.request.method.toLocaleLowerCase()
    let name=element.name
    output+="\n"+template.pathTemplate({path,method,name})
    // Adding Parameter ** Header ** Query **
    output+=genHeader(element.request);
    if(method!=="get"&&method!=="delete"&&element.request.body&&element.request.body.raw&&element.request.body.mode==="raw"){      // Adding RequestBody 
       output+=createRequestBody(element)
      output+=`\n            example: ${element.request.body.raw}`
    }
    output+=`\n      responses:`
    if(element.response.length>0){                                                              // Adding Response if ith
      output+=require("./genResponse").generateResponses(element.response)
    }else{
      output+=`\n        "200":
          description: it is an example response
          content:
            JSON/application:
              schema:
                type: object
              example:
                {}`
    }
    // output+=genHeader(element.request.header)
});
return output
// console.log(output);

}

module.exports={genAllPath}