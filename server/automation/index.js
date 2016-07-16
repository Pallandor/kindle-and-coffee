import browser from './webdriver.config.js';
import * as automate from './automations.js';

const automationHandler = (req, res) =>
  browser
  .then(automate.startBrowser(browser))
  .then(automate.getCoffeePage(browser))
  .then(automate.addCoffee(browser))
  .then(automate.clickCheckout(browser))
  .then(automate.clickContinueAsGuest(browser))
  .then(automate.addCheckoutBillingDetails(browser))
  .then(automate.addCheckoutOptions(browser))
  .then(automate.clickPaypalCheckout(browser))
  .then(automate.redirectClient(browser, res))
  .then(automate.stopBrowser(browser));

export default automationHandler;
