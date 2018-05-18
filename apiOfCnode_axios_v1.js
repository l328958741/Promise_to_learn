const axios = require('axios');

function readFirstName(){
    axios.get('https://cnodejs.org/api/v1/topics?' + 'page=1&tab=job&limit=3&mdrender=false')
    .then(response => {
        return response.data;// 这里的data只是axios的data，不是结果中的data
    })
    .then(result => {
        return result.data[0].author.loginname;
    })
    .then(name => readPersonInfo(name))
    .catch(err => console.log(err))
}

function readPersonInfo(name){
    console.log('woshi: '+ name);
    axios.get('https://cnodejs.org/api/v1/user/' + name)
    .then(response => {
        return response.data;
    })
    .then(result => {
        console.log(result.data);
    })
    .catch(err => console.log(err))
}

readFirstName();
