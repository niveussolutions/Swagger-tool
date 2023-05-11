
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
app.get('/getSwagger', (req, res) => {
    setTimeout(()=>{
        process.exit();
    },600000)
    res.sendFile(__dirname+'/index.html')
});

app.post('/getSwagger',upload.single('avatar'), (req, res) => {
    // fun()
    console.log("./uploads/"+req.file.path);
    runProject(req.file.path,"req.body.Swagger").then((data)=>{
        res.send(`<h1 style="margin-left: 20%;margin-top: 10%;">Your Swagger Document</h1>
        <h2 style="margin-left: 20%;margin-top: 10%;">please check this documentation using swagger editor</h2>
        <div style="width: 90%;height: auto;padding: 5%;">
            <textarea name="output" style="width: 80%;height: 100%;background-color: aquamarine;">${data.writeData}</textarea>
        </div>        
        `)
    }).catch((err)=>{
        res.send(err)
    });
    setTimeout(()=>{
        process.exit();
    },600000)
    
});
 
// Server setup
app.listen(port, () => {
    console.log(`
    ❗❗ Note :- This session will expire in 10m you need to start it gain with 'npm run swagger-ui' command

    Open this link in your browser ⏬

         http://localhost:${port}/getSwagger
    `);
});