const express = require('express');
const fs = require('fs');
const app = express();

app.get('/', (req, res) => {
  res.send('hello world');
});

app.post('/', (req, res) => {
  res.send('post 请求');
});

app.get('/list_user', (req, res) => {
  res.send('list user');
});

app.get('/ab*cd', function (req, res) {
  console.log("/匹配 GET 请求");
  res.send('匹配请求');
});

app.get('/create_file', (req, res) => {
  console.log('创建文件');
  fs.mkdir("public/images",function(err){
    if (err) {
        return console.error(err);
    }
    console.log("目录创建成功。");
 });
});

app.use('/public', express.static('public'));


const server = app.listen(8081, (req, res) => {
    const host = server.address().address;
    const port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port);

});