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

module.exports=deleteRecursively;