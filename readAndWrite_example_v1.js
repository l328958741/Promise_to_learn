var fs = require('fs');
var dirPathString = './';
var outputPathString = './lixiang.txt';
var names = [];

function callback(err, files) {
  if (err) {
    console.log('读取文件失败');
    return;
  }

  for (var i = 0; i < files.length; i++) {
    if (files[i].endsWith('.json')) {
      names.push(files[i]);
    }
  }
}

function callback2(err) {
  if (err) {
    console.log('写入文件失败');
  } else {
    console.log('写入文件成功');
  }
}

fs.readdir(dirPathString, callback);
fs.writeFile(outputPathString, names, callback2);