let fs = require('fs');

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
        console.log("\n\n*******     done       *********\n");
        console.log("If response is not in your postman collection an example response will be added automatically\n");
        console.log("**********************----------------****************-------------------************************\n\n");
    });
}
module.exports={generateCollection};