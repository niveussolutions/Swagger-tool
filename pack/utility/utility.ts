import { extname,dirname } from "path";
import * as fs from 'fs';

function spaces(count:number):string{
    let spaces:string=""
    for(let i:number=1;i<=count;i++){
        spaces+=" " 
    }
    return spaces
     }
function findDataTypes(data:any,isxml?:any){
        let type: string
        if (data === null) {
            type = "string";
        }else if(Array.isArray(data)){
            type = `array`
        }
        else {
            type = typeof data;
        }
        return type
    }
 function verifyOutputPath(path:any){
        if(path){
    let extension = extname(path);
       
        if(extension){
            if(extension!==".yaml"){
                console.log("Output file path Extension is Wrong ⛔⛔");
                return false
            }
        if(fs.existsSync(dirname(path))) 
            return true  
        
        }}
        console.log("Output file path is Wrong ⛔⛔");
        return false
        }
export {spaces,findDataTypes,verifyOutputPath};

// \n${space(spaces)}items :\n${space(spaces+1)}type :${findDataType(data[0])}