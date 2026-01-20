const fs = require("fs");

let buf = fs.readFileSync(process.argv[2])
buf = String(buf);
const string1 = buf.split('\n')
console.log(string1.length-1);
