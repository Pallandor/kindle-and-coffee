import selenium from 'selenium-standalone';

const installConfig = {};

const startSelenium = callback => {
  selenium.install(installConfig, (installError) => {
    if (installError) return callback(installError);
    selenium.start((startErr, childInstance) => {
      if (startErr) return callback;
      childInstance.stderr.on('data', function(data) {
        console.log(data.toString());
      });
      callback(null, childInstance);
    });
  });
};

export default startSelenium;
