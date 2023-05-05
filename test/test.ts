import  * as parser from 'xml2js';
import { spaces ,findDataTypes} from '../pack/utility/utility';
import { log } from 'console';



const str = `<?xml version="1.0" encoding="UTF-8"?>
<LoginParams xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
<key>
<Passwords1>string</Passwords1>
<Passwords2>string</Passwords2>
</key>
<Data2>string</Data2>
</LoginParams>`;

parser.parseString(str.replace("\n",""),{explicitArray: false},(err,result)=>{
  // console.log(JSON.stringify(result));
  console.log(getXMLcomp(result,0));
  
  
})

function getXMLcomp(input:any,s:number){
  let output=""
  if(input)
  if(findXMLDataType(input)==="object"){
    
    for(let i in input){
      let type=findXMLDataType(input[i]);
      if(type==="object"){
        output=spaces(4+s)+i+`:\n${spaces(6+s)}type: object\n${spaces(6+s)}properties:${addNameSpace(input[i],s)}`;
      for(let a in input[i] ){
        // console.log(input[i][a]);
        if(a!=="$"){
          output+=`\n${getXMLcomp({[a]:input[i][a]},4+s)}`
        }

      }
        
      }else{
        output=spaces(4+s)+i+`:\n${spaces(6+s)}type: string`
      }
    
    }
    //for end
  }else{
    output=spaces(4+s)+input+`:\n${spaces(6+s)}type: string`
  }
  return output
}

function addNameSpace(input:any,s:number){
  let output=""
  if(input.constructor===Object){
    if(input["$"]){
      for(let i in input["$"]){
        output+=`\n${spaces(8+s)}"${i}":\n${spaces(10+s)}type: string\n${spaces(10+s)}enum:\n${spaces(12+s)}- "${input["$"][i]}"\n${spaces(10+s)}xml:\n${spaces(12+s)}attribute: true`
      }
    }
  }
  return output
}

function findXMLDataType(input:any){
if(input.constructor===Object){
  if(!input["_"])
  return "object"
}
return "string"
}
let data=
`
    LoginParams:
      type: object
      properties:   
        "xmlns:i":
          type: string
          enum:
            - "http://www.w3.org/2001/XMLSchema-instance"
          xml:
            attribute: true
        "xmlns":
          type: string
          enum:
            - "http://schemas.datacontract.org/2004/07/SAMSElite.Models"
          xml:
            attribute: true          
        Key:
          type: string
        Password:
          type: string
        UserName:
          type: string`

