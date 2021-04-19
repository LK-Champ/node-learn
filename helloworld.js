// console.log(`object: `, 'hello world !');
var fs = require('fs');
console.log('读取开始');
// var data = fs.readFileSync('./index.txt');
// console.log(data);
fs.readFile('./index.txt', (err, data) => {
  console.log(data.toString());
});
console.log('读取结束');