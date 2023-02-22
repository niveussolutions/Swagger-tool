let postManCollection=require("./signdesk.postman_collection.json")
let template=require("./template")
let title=postManCollection.item[0].name
let url=postManCollection.item[0].item[0].request.url.raw
url=url.split("/")
url=url[0]+"//"+url[2]
let path=postManCollection.item[0].item[0].request.url.path.join("/")
console.log(path);
console.log(template.template({title,url})+"\n"+template.pathTemplate({path:"hbh/jnj/njnj/uiji/uhnunjb",mehod:"POST"}))