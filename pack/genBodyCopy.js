let fs = require('fs');
let {space,findDataType}=require('./utility')


let createDocBody=(input,spaces)=>{
    let data;
    
        data = JSON.parse(input);
        let output = "";
        for (let a in data) {
            let name = a;
            let type = findDataType(data[name],spaces)
            if(type==="object"){
                type+=`\n${space(spaces+2)}properties:${createDocBody(JSON.stringify(data[name]),spaces+4)}`
            }
            if(type==="array"){
                type+=`\n${space(spaces+2)}items :\n${space(spaces+3)}type : ${findDataType(data[name][0])!=="object"?findDataType(data[name][0]):objectInsideArray(JSON.stringify(data[name][0]),spaces+2)}`
            }
            output = `${space(spaces)}${output}\r\n${space(spaces)}${name}:\n${space(spaces+2)}type: ${type}`;
        }
        
    return output
}

let data
fs.readFile('/home/user/Node JS/input.txt', 'utf8', (err, input) => {
    let body=`      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:\n                `+createDocBody(input,16).trim()
              console.log(body);
    fs.writeFile('output.txt', createDocBody(input,0), () => {
    console.log("done");
});
});

function objectInsideArray(object,spaces){
    let output
  return  output=`object\n${space(spaces+1)}properties:${createDocBody(object,spaces+3)}`
}




