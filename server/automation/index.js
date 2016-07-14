// import browser from './webdriver.config.js';

const webdriverio = require('webdriverio');
const options = {
  desiredCapabilities: {
    browserName: 'firefox',
  },
};

const automationMiddleware = (req, res) => {
  webdriverio.remote(options)
    .init()
    .url('https://google.com.au/')
    .setValue('#lst-ib', 'Roger is Awesome')
    .click('[name="btnK"]')
    .getTitle()
    .then(title => res.send(`The title received was ${title}`))
    .end();
};

export default automationMiddleware;