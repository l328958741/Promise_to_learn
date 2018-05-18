function addOne (x) { 
    return x + 1;
 }

 function addTwo (x){
     return x + 2;
 }

 function add(f, g){
     return function (x){
         return f(g(x));
     }
 }

 //把函数作为参数使用，返回一个最终的函数处理最后一个参数
 let c = add(addOne, addTwo)(5);

 console.log(c);