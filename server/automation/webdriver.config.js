const webdriverio = require('webdriverio');
const options = {
  desiredCapabilities: {
    browserName: 'firefox',
  },
};
export default webdriverio.remote(options);

export const url = 'https://google.com.au/';
export const message = 'Roger feeds alot in Dota 2';
export const buttonByName = '[name="btnK"]';
export const searchBar = '#lst-ib'; 
export const waitTime = 20000;