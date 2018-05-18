const fs = require('./fs_extra');


fs.readFile(function(err,content){
    if(err){
        console.log(err);
    }
    console.log(content);
})