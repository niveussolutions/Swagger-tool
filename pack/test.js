let postManCollection=require("../postmanCollection/CKYC Proxy.postman_collection.json")
// if(!postManCollection.item[0].item){
console.log(postManCollection.item[0].response[0].body);
    postManCollection.item[0].response[0].body
    
// }
// postManCollection.item[0].item[0].response
let fs = require('fs');
let data= postManCollection.item[0].response[0]
fs.writeFile('output.txt', postManCollection.item[0].response[0].body, () => {
    console.log("done");
});
let b=`      `
let a=`        "${data.code}":
          description: ${data.status}
          content:
            ${getcContent(data)}:
              schema:
                type: object
              example:
                ${data.body}`
console.log(a);

function getcContent(data){
  let output
  data.header.forEach((val)=>{
  
    if(val.key==="content-type"){
      output= val.value
    }
  })
  return output
}



//http://g-mbivdoas04.heewadds.com:86/HIBTVS/ServiceHIBTVS.svc?singleWsdl
//
"http://g-mbivdws01.heewadds.com:86/HIBTVS/ServiceHIBTVS.svc?singleWsdl".replace(["heel"],"h")
