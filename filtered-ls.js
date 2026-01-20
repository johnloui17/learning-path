const fs = require("fs");
const path = require("path");
const filePath = process.argv[2];
const fileType ="."+process.argv[3];


fs.readdir(filePath,function(err,list){
    if (err) {                                                                                                                                                             
        return console.log(err);                                                                                                                                           
    }     

    list.forEach(function(file) {                                                                                                                                          
        if (path.extname(file) === fileType) {                                                                                                                                  
            console.log(file);                                                                                                                                             
        }                                                                                                                                                                  
    }); 


} )

