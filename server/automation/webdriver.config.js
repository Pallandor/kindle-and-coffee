const webdriverio = require('webdriverio');
const options = {
  desiredCapabilities: {
    browserName: 'firefox',
  },
  services: ['selenium-standalone'],
};
export default webdriverio.remote(options);

// unrelated, refactor out to separate model (also will integrate better w/testing)
export const url = 'https://www.coffeecompany.com.au/coffee/flavoured/swiss-chocolate';
export const waitTime = 20000;