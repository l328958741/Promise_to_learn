class Container{
    constructor(val){
        this.val = val;
    }

    map(f){
        return new Container(f(this.val));
    }
}

let obj = new Container('js');

let obj2 = obj.map(function(val){
    return 'Hello ' + val;
})
console.log(obj2.val);

obj2.map(function(val){
    return val + ' nice to meet you!'
}).map(console.log);