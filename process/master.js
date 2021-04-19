const fs = require('fs');
const child_process = require('child_process');

for (let i = 0; i < 3; i++) {
  // const workerProcess = child_process.exec(`node support.js ${i}`, (err, stdout, stderr) => {
  //   if (err) {
  //     console.log('error: ', err.stack);
  //     console.log('error code: ', err.code);
  //     console.log('error signal: ', err.signal);
  //   }
  //   console.log('stdout: ' + stdout);
  //   console.log('stderr: ' + stderr);
  // });
  // workerProcess.on('exit', function (code) {
  //   console.log('子进程已退出，退出码 '+code);
  // });

  // const workerProcess = child_process.spawn('node', ['support.js', i]);
  // workerProcess.stdout.on('data', (data) => {
  //   console.log('stdout: ', data);
  // });
  // workerProcess.stderr.on('data', (data) => {
  //   console.log('stderr: ', data);
  // });
  // workerProcess.on('close', (code) => {
  //   console.log('子进程已退出，退出码 '+code);
  // });

  const workerProcess = child_process.fork("support.js", [i]);    
 
  workerProcess.on('close', function (code) {
      console.log('子进程已退出，退出码 ' + code);
   });
}