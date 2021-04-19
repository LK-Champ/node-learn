const express = require('express');

const app = express();

app.get('/get', (req, res) => {
  const data = {
    'name:': req.query.name,
    'age:': req.query.age
  }
  res.send(JSON.stringify(data));
});

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`)
});

const server = app.listen(3000, () => {
  const host = server.address().address;
  const port = server.address().port;
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
});