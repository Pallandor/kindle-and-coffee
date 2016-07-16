import selenium from 'selenium-standalone';
import Promise from 'bluebird';

const installConfig = {};

const startSelenium = new Promise((resolve, reject) => {
  selenium.install(installConfig, installError => {
    if (installError) return reject(installError);
    selenium.start((startErr, childInstance) => {
      if (startErr) return reject(startErr);
      if (process.env.NODE_ENV === 'development') {
        childInstance.stderr.on('data', function(data) {
          console.log(data.toString());
        });
      }
      resolve(childInstance);
    });
  });
});

export default startSelenium;
