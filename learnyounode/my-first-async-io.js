const fs = require("fs");
let filePath=process.argv[2];
function countLines(){
    fs.readFile(filePath,'utf8',function doneCounting(err,data){
        const lines = data.split('\n').length - 1;                                                                                                                         
        console.log(lines);

    })
}
countLines()