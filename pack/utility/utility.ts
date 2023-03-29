function spaces(count:number):string{
    let spaces:string=""
    for(let i:number=1;i<=count;i++){
        spaces+=" " 
    }
    return spaces
     }
function findDataTypes(data){
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
export {spaces,findDataTypes};

// \n${space(spaces)}items :\n${space(spaces+1)}type :${findDataType(data[0])}