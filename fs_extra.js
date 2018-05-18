const fs = require('fs');

function readFile(callback){
    fs.readFile('./package.json', 'utf-8', callback)
}

module.exports = {readFile};