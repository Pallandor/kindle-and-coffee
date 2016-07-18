const webdriverio = require('webdriverio');

let desiredCapabilities = {};

if (process.env.NODE_ENV === 'production') {
  desiredCapabilities = {
    browserName: 'phantomjs',
    'phantomjs.binary.path': require('phantomjs').path,
  };
} else {
  desiredCapabilities = {
    browserName: 'firefox',
  };
}

const options = {
  desiredCapabilities,
};

export default webdriverio.remote(options);

/** Refactor: move to separate module (also will integrate better w/testing) */
export const url = 'https://www.coffeecompany.com.au/coffee/flavoured/swiss-chocolate';
export const waitTime = 20000;
