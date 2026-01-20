const http = require("http");

const url = process.argv[2];

http.get(url,function(res){
    res.setEncoding("utf8");

    res.on("data",function(chunk){
        console.log(chunk);
    })
    res.on("error",function(err){
        console.log(err);
    })

}).on('error',console.error);