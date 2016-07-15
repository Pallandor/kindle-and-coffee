import * as config from './webdriver.config.js';

export const getHomepage = browserInstance => () => browserInstance.init().url(config.url);

export const addCoffeeAndCheckout = browserInstance => () =>
  browserInstance
  .selectByAttribute('#grindOption', 'value', '79')
  .selectByAttribute('#sizeOption', 'value', '5')
  .click('#AddToBag')
  .waitForExist('#bag-CTA[class="btn-holder checkout"]', config.waitTime)
  .click('#Checkout')
  .click('a.btn[href="/checkout"]');

export const addCheckoutBillingDetails = browserInstance => () =>
  browserInstance
  .setValue('#BillingAddress_FirstName', 'Roger')
  .setValue('#BillingAddress_LastName', 'Sejas')
  .setValue('#BillingAddress_Address1', '2 Holbrook Street')
  .selectByAttribute('#BillingAddress_Country', 'value', '14')
  .selectByAttribute('#BillingAddress_StateId', 'value', '52')
  .setValue('#BillingAddress_Suburb', 'Bossley Park')
  .setValue('#BillingAddress_Postcode', '2176')
  .setValue('#BillingAddress_Phone', '0447773180')
  .setValue('#BillingAddress_Email', 'roger.sejas@gmail.com');

export const addCheckoutOptions = browserInstance => () => {
  browserInstance
    .click('#75')
    .click('#paypalPayment');
};

export const clickPaypalCheckout = browserInstance => () =>
  browserInstance
  .waitForExist('#paymentType div.pp', config.waitTime)
  .then(() => browserInstance.click('input.pp.checkout-btn'));

export const redirectClient = (browserInstance, res) => () =>
  browserInstance
  .waitUntil(() =>
    browserInstance
    .getUrl()
    .then(actualUrl => /paypal/.test(actualUrl)), config.waitTime)
  .then(() =>
    browserInstance.getUrl()
    .then(paypalUrl => res.redirect(paypalUrl)));