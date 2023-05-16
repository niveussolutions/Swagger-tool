
let express = require("express");
let {runProject}= require("../run")
const app =  express();
const open = require('open');
const multer  = require('multer')
const {deleteRecursively,getOutputHTML}= require('./utility/utiliy')
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
        res.send(getOutputHTML(data.writeData,port));
    }).catch((err)=>{
        res.send(`<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
        <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <!------ Include the above in your HEAD tag ---------->
        
        <div class="page-wrap d-flex flex-row align-items-center">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-12 text-center">
                        <span class="display-1 d-block">Error</span>
                        <div class="mb-4 lead">${err}</div>
                        <a href="http://localhost:${port}/getSwagger" class="btn btn-primary">Back to Main Page</a>
                    </div>
                </div>
            </div>
        </div>`)
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
    open(`http://localhost:${port}/getSwagger`);
});