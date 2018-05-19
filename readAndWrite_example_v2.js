const fs = require('fs');
const R = require('ramda');
const util = require('util');

let dirPath = './';
let outputPath = 'liu1.txt';

let readDir = util.promisify(fs.readdir);

function writeDir(path){
    return function(content){
        return util.promisify(fs.writeFile)(path,content);
    }
}


readDir(dirPath).then(R.filter(R.test(/.json/))).then(writeDir(outputPath)).catch(console.log);


// /*------------------原始写法------------------------*/
// readDir(dirPath).then(files => {
//     let names = files.map(item => {
//          if(item.endsWith('.json')){
//              return item
//          }
//     })
//     // console.log(names);

//     return names;
// }).then(data => {
//     function checkArry(value){
//         return value != undefined;
//     }

//     let result = data.filter(checkArry);
//     console.log(result);
// }).then(writeDir(outputPath)).catch(console.log)


