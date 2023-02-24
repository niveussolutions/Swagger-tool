function space(count){
    let spaces=""
    for(i=1;i<=count;i++){
        spaces+=" " 
    }
    return spaces
     }
function findDataType(data,spaces){
        let type
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

module.exports= {space,findDataType}
// \n${space(spaces)}items :\n${space(spaces+1)}type :${findDataType(data[0])}