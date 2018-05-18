function addOne(x){
    return function (y) { 
        return x + y;
     }
}

let a = addOne(1);

console.log(a(10));
console.log(a(2));

let b = addOne(1)(4);
console.log(b);