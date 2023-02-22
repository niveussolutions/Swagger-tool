let postManCollection=require("./signdesk.postman_collection.json")
let template=require("./template")
let genPath=require("./genAllRequest").genAllPath
let header=postManCollection.item[0].item[0].request.header
let title=postManCollection.item[0].name
let body=postManCollection.item[0].item[0].request.body.raw
let url=postManCollection.item[0].item[0].request.url.raw
url=url.split("/")
url=url[0]+"//"+url[2]
let path='/'+postManCollection.item[0].item[0].request.url.path.join("/")
console.log(template.template({title,url})+genPath(postManCollection.item[0].item))
let fs = require('fs');
fs.writeFile('output.yaml', template.template({title,url})+genPath(postManCollection.item[0].item), () => {
    console.log("done");
});