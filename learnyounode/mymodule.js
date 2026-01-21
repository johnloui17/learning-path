const fs=require("fs")
const path=require("path")
module.exports=function(dir,ext,callback){
    fs.readdir(dir,function(err,list) {

        if(err){
            return callback(err);
        }
        const filtered = list.filter(function(file){
            return path.extname(file) === "."+ ext;
        });
        return callback(null,filtered);
    })

}