let postManCollection=require("./postmanCollection/CKYC Proxy.postman_collection.json")
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
let b=`              examples:`
let a=`                
        '${data.code}': 
          description: Unauthorized
          content:
            application/json:
              schema:
                type: object
                properties:
              examples:
                '${data.status}': 
                  value: ${data.body}`
console.log(a);