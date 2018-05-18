const R = require('ramda');

function add(x, y){
    return x + y;
}

let addFun = R.curry(add);

console.log(addFun(2)(3));