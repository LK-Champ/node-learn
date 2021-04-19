const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.post('/post',urlencodedParser , (req, res) => {
  const data = {
    name: req.body.name,
    age: req.body.age
  };
  res.end(JSON.stringify(data));
});

const server = app.listen(4000, () => {
  const {host, port} = server.address();
  console.log("应用实例，访问地址为 http://%s:%s", host, port);
});