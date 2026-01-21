const http = require("http");

const url1 = process.argv[2]
const url2 = process.argv[3]
const url3 = process.argv[4]

let count = 0;

let urls = [url1, url2, url3];
let result = []

urls.forEach((url, index) => {
    let body = '';

    http.get(url, function (res) {

        res.setEncoding("utf8");

        res.on("data", function (data) {
            body += data;
        })
        res.on("end", function () {
            result[index] = body;
            count++

            if(count ===3){
                result.forEach((data)=>{
                    console.log(data)
                })
            }
        });


    })


})
