import { runProject } from "./run";
let path=process.argv
let inputPath=path[2];
let outputPath=path[3];
runProject(inputPath,outputPath);