let fs=require("fs")
let generateCollection=require("./pack/index").generateCollection
let path=process.argv
// console.log(path[3]);
fs.readFile(path[2],(error,data)=>{
  //  console.log(data);
   try{

     generateCollection(JSON.parse(data))
   }catch(e){
    console.log("Collection is not correct");
   }
})