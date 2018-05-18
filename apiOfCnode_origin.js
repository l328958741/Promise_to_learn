const request = require('request');

function readTopic(){
    request('https://cnodejs.org/api/v1/topics?' + 'page=1&tab=job&limit=3&mdrender=false', function(error, response, body){
        if(error){
            console.log(error);
        }

        let result = JSON.parse(response.body).data;
        // console.log(result[0].author.loginname);
        
        readPersonInfo(result[0].author.loginname);
    })
}

function readPersonInfo(name){
    console.log('woshi: '+ name);
    request('https://cnodejs.org/api/v1/user/' + name, function(error, response, body){
        if(error){
            console.log(error);
        }

        let info = JSON.parse(response.body).data
        console.log(info);
    })
}

readTopic();
