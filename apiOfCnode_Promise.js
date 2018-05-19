const request = require('request');

function readFirstName(){
    return new Promise(function(resolve, reject){
        request('https://cnodejs.org/api/v1/topics?' + 'page=1&tab=job&limit=3&mdrender=false', function(error, response, body){
            if(error){
               reject(error);
            }
    
            let result = JSON.parse(response.body).data;
            // console.log(result[0].author.loginname);
            
            resolve(result[0].author.loginname);
        })
    })
}

function readPersonInfo(name){
    return new Promise(function(resolve, reject){
        request('https://cnodejs.org/api/v1/user/' + name, function(error, response, body){
        if(error){
            reject(error);
        }

        let info = JSON.parse(response.body).data
        console.log('蜜汁顺序：~~~~'+info);//这里打印出来为什么是“object”, 而不是具体的数据呢？因为前面加了字符串，并用“+”操作符连接了

        // resolve(info);
    })
    })
}

function readPersonInfo2(name){
    request('https://cnodejs.org/api/v1/user/' + name, function(error, response, body){
        if(error){
            console.log(error);
        }

        let info = JSON.parse(response.body).data
        console.log(info);
    }
)}

readFirstName().then(readPersonInfo).catch(console.log);
