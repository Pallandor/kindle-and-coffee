const webdriverio = require('webdriverio');
const options = {
  desiredCapabilities: {
    browserName: 'firefox',
  },
};
export default webdriverio.remote(options);

export const url = 'https://www.coffeecompany.com.au/coffee/flavoured/swiss-chocolate';
export const waitTime = 20000;
