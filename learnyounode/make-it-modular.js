const mymodule=require("./mymodule")

const dir = process.argv[2];
const ext = process.argv[3];

mymodule(dir,ext,function(err,data){
    if(err){
        return console.log("Error:",err)
    }

    data.forEach(function(item){
        console.log(item)
    })
})