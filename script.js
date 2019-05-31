const { exec } = require('child_process');

exec('cat file.log | wc -l', (err, stdout, stderr) => {
  if (err) {
    // node couldn't execute the command
    return;
  }

  // the *entire* stdout and stderr (buffered)
  let app = new Vue({
    el: '#stream-out',
    data: {
      message: stdout
    }
  })
  
  
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
});
