const { exec } = require('child_process');

task('start', () => {
  exec('node index.js', (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(stdout);
  });
});