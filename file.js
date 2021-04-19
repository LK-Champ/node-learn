const fs = require('fs');

fs.open('./index.txt', 'r+', (err, data) => {});

fs.unlink('./index.txt', () => {
  console.log('删除成功');
});