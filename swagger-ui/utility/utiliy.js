const fs = require("fs");
const path = require("path");

function deleteRecursively(dir, pattern) {
    let files = fs.readdirSync(dir).map(file => path.join(dir, file));
    for(let file of files) {
        const stat = fs.statSync(file);
        if (stat.isDirectory()) {
            deleteRecursively(file, pattern);
        } else {
            if (pattern.test(file)) {
                // Uncomment the next line once you're happy with the files being logged!
                try { 
                    fs.unlinkSync(file);
                } catch (err) {
                    console.error(`An error occurred deleting file ${file}: ${err.message}`);
                } 
            }
        }
    }
}

function getOutputHTML(input,port){
return`
<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
	<meta charset="utf-8">
	<title>Text Editor</title>
	<!--Bootstrap Cdn -->
	<link rel="stylesheet"
		href=
"https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
		integrity=
"sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
		crossorigin="anonymous">
	<!-- fontawesome cdn For Icons -->
	<link rel="stylesheet"
		href=
"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
		integrity=
"sha512-PgQMlq+nqFLV4ylk1gwUOgm6CtIIXkKwaIHp/PAIWHzig/lKZSEGKEysh0TCVbHJXCLN7WetD8TFecIky75ZfQ=="
		crossorigin="anonymous" />
	<link rel="stylesheet"
		href=
"https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
		integrity=
"sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
		crossorigin="anonymous" />

	<!--Internal CSS start-->
	<style>
		h1 {
			padding-top: 40px;
			padding-bottom: 40px;
			text-align: center;
			color: #957dad;
			font-family: 'Montserrat', sans-serif;
		}
		
		section {
			padding: 5%;
			padding-top: 0;
			height: 100vh;
		}
		
		.side {
			margin-left: 0;
		}
		
		button {
			margin: 10px;
			border-color: #957dad !important;
			color: #888888 !important;
			margin-bottom: 25px;
		}
		
		button:hover {
			background-color: #fec8d8 !important;
		}
		
		textarea {
			padding: 3%;
			border-color: #957dad;
			border-width: thick;
		}
		
		.flex-box {
			display: flex;
			justify-content: center;
		}
	</style>
	<!--Internal CSS End-->
	<script>
		function copy() {
		let textarea = document.getElementById("textarea1");
		textarea.disabled=false;
		textarea.select();
		document.execCommand("copy");
		textarea.disabled=true;
	  }
	</script>
</head>
<!--Body start-->

<h1 >Your Swagger Document</h1>
<h2 style="margin-left: 26%;">please check this documentation using swagger editor</h2>
<br>
<a href="http://localhost:${port}/getSwagger" class="btn btn-primary" style="margin-left: 26%;">Back to Main Page</a> &nbsp; <a  class="btn btn-outline-danger" onclick="copy()">Copy</a>
		<br>
		<br>
		<div class="row">
			<div class="col-md-3 col-sm-3">
			</div>
			<div class="col-md-6 col-sm-9">
				<div class="flex-box">
					<textarea id="textarea1"
							class="input shadow"
							name="name"
							rows="40"
							cols="800"
							placeholder="Your text here " disabled >${input}</textarea>
				</div>
			</div>
			<div class="col-md-3">
			</div>
		</div>
	</section>
	<br>
	<br>
	<h6 style="text-align:center;"> Contributor: K.V.Rao 2023.</h6>

	<!--External JavaScript file-->
	<script src="home.js"></script>
</body>

</html>

`
}
module.exports={deleteRecursively,getOutputHTML};