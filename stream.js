const fs = require('fs');
let data = '';

const readerStrem = fs.createReadStream('./index.txt');

readerStrem.setEncoding('UTF8');

readerStrem.on('data', (chunk) => {
  console.log('开始读取数据');
  data += chunk;
});

readerStrem.on('end', () => {
  console.log(data);
  console.log('数据读取结束');
});

readerStrem.on('error', () => {
  console.log('数据读取错误');
});

console.log('程序执行完毕');


const writeStream = fs.createWriteStream('./index.txt');

writeStream.write(data, 'UTF8');

writeStream.end(); // 标记结束

writeStream.on('finish', () => {
  console.log('写入结束');
});

const fileData = fs.readFileSync('./index.txt', (err, data) => {
  console.log(data.toString());
});

readerStrem.pipe(writeStream);