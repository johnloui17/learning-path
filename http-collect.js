const http = require("http");

http.get(process.argv[2],function(res){
        let data='';
        res.setEncoding("utf8");

        res.on("data",function(chunk){

        data += chunk;
        })
        res.on("end",function(){

        console.log(data.length)
        console.log(data)
        })

})