let fs = require('fs');
let postManCollection=require("../postmanCollection/CKYC Proxy.postman_collection.json");



function generateCollection(postManCollection){
    
    let data=postManCollection.item[0].item
    if(!postManCollection.item[0].item)
        data=postManCollection.item
    
    let template=require("./template")
    let genPath=require("./genAllRequest").genAllPath
    // let header=postManCollection.item[0].item[0].request.header
    let title=postManCollection.info.name;
    let url=data[0].request.url.raw;
    url=url.split("/")
    url=url[0]+"//"+url[2]
    fs.writeFile('output.yaml', template.template({title,url})+genPath(data), () => {
        console.log("done");
    });
}
module.exports={generateCollection};