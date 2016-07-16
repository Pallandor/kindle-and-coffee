import selenium from 'selenium-standalone';

const installConfig = {};

const startSelenium = callback => {
  console.log("inside start selenium!!");
  selenium.install(installConfig, (installError) => {
    console.log('inside selenium install!');
    if (installError) return callback(installError);
    selenium.start((startErr, childInstance) => {
      console.log('++ inside ACTUAL selenium.start!');
      if (startErr) return callback;
      childInstance.stderr.on('data', function(data) {
        console.log(data.toString());
      });
      callback(null, childInstance);
    });
  });
};

export default startSelenium;
