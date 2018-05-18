const axios = require('axios');

function readData(response){
    return response.data;
}

function readFirstName(){
    return axios.get('https://cnodejs.org/api/v1/topics?' + 'page=1&tab=job&limit=3&mdrender=false')
    .then(readData)
    .then(result => {
        return result.data[0].author.loginname
    })
}

function readPersonInfo(name){
    return axios.get('https://cnodejs.org/api/v1/user/' + name)
    .then(readData)
    .then(result => {
        return result.data
    })
    .catch(console.log)
}

readFirstName().then(readPersonInfo).then(console.log).catch(console.log);//改变了调用readPersonInfo的方式，不再是嵌套调用了
