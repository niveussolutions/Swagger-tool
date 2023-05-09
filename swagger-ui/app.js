
let express = require("express");
let {runProject}= require("../run")
const app =  express();
const multer  = require('multer')
const deleteRecursively= require('./utility/utiliy')
const cors = require('cors');
app.use(cors());
deleteRecursively("./uploads",/\.json$/);
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-'+file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })
const port = 3000;

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'))

// Handling '/' Request
app.get('/form', (req, res) => {
    setTimeout(()=>{
        process.exit();
    },30000)
    res.sendFile(__dirname+'/index.html')
});

app.post('/form',upload.single('avatar'), (req, res) => {
    // fun()
    console.log("./uploads/"+req.file.path);
    runProject(req.file.path,"req.body.Swagger").then((data)=>{
        res.send(`<textarea type="text"  name="txtarea" style="font-family: Arial;font-size: 12pt;width:90%;height:95vw;padding: auto">${data.writeData}</textarea>`)
    }).catch((err)=>{
        res.send(err)
    });
    setTimeout(()=>{
        process.exit();
    },30000)
    
});
 
// Server setup
app.listen(port, () => {
    console.log(`TypeScript with Express
         http://localhost:${port}/form`);
});