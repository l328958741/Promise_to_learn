const axios = require('axios');

function readData(response){
    return response.data;
}

function readFirstName(){
    axios.get('https://cnodejs.org/api/v1/topics?' + 'page=1&tab=job&limit=3&mdrender=false')
    .then(readData)
    .then(result => {
        return result.data[0].author.loginname
    })
    .then(readPersonInfo)
    .catch(console.log)
}

function readPersonInfo(name){
    console.log('woshi: '+ name);
    axios.get('https://cnodejs.org/api/v1/user/' + name)
    .then(readData)
    .then(result => {
        console.log(result.data);
    })
    .catch(console.log)
}

readFirstName();
