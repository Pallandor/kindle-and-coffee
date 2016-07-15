import browser from './webdriver.config.js';
import * as automate from './automations.js';

const automationHandler = (req, res) =>
  browser
  .then(automate.getHomepage(browser))
  .then(automate.addCoffeeAndCheckout(browser))
  .then(automate.addCheckoutBillingDetails(browser))
  .then(automate.addCheckoutOptions(browser))
  .then(automate.clickPaypalCheckout(browser))
  .then(automate.redirectClient(browser, res))
  .end();

export default automationHandler;
