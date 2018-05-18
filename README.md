# Promise_to_learn
learn how to use promise
# 在写apiOfCnode.js中遇到的问题

```javascript
const request = require('request');

function readTopic(){
    request('https://cnodejs.org/api/v1/topics?' + 'page=1&tab=job&limit=3&mdrender=false', function(error, response, body){
        if(error){
            console.log(error);
        }

        let result = JSON.parse(response.body).data;
        // console.log(result[0].author.loginname);
        
        return result[0].author.loginname;
    })
}

let name = readTopic();
console.log(name);    //结果是undefined，为什么？
                      //request()是异步函数，它总是在readTopic()执行完后才执行，又readTopic()中没有return,没有赋值给name
```
