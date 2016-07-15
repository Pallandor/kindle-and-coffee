import browser, * as config from './webdriver.config.js';

// NOTE: waitForExist appears to continue running after click chain call. Hm.

const automationHandler = (req, res) => {
  browser
    .init()
    .url(config.url)
    .selectByAttribute('#grindOption', 'value', '79')
    .selectByAttribute('#sizeOption', 'value', '5')
    .click('#AddToBag')
    .waitForExist('#bag-CTA[class="btn-holder checkout"]', 10000)
    .click('#Checkout')
    // .waitForExist('a.btn[href="/checkout"]')   // may not be required, try without.
    .click('a.btn[href="/checkout"]')
    .pause(config.waitTime)
    .end();
};

// wait for btn-holder checkout


export default automationHandler;