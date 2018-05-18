const fs = require('fs');
const R = require('ramda');
const util = require('util');

let dirPath = './';
let outputPath = 'liu1.txt';

let readDir = util.promisify(fs.readdir);

function writeDir(path){
    return function(content){
        return util.promisify(fs.writeFile(path,content));
    }
}

readDir(dirPath).then(R.filter(R.test(/.json/))).then(console.log);


