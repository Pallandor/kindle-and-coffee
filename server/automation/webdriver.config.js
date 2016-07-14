const webdriverio = require('webdriverio');
const options = {
  desiredCapabilities: {
    browserName: 'firefox',
  },
};
export default webdriverio.remote(options);

export const url = 'https://www.coffeecompany.com.au/coffee/flavoured/swiss-chocolate';
export const searchBar = '#lst-ib'; 
export const message = 'Roger feeds alot in Dota 2';
export const buttonByName = '[name="btnK"]';
export const waitTime = 20000;