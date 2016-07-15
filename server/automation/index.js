import browser, * as config from './webdriver.config.js';

const automationHandler = (req, res) => {
  browser
    .init()
    .url(config.url)
    .selectByAttribute('#grindOption', 'value', '79')
    .selectByAttribute('#sizeOption', 'value', '5')
    .click('#AddToBag')
    .waitForExist('#bag-CTA[class="btn-holder checkout"]', 10000)
    .click('#Checkout')
    .click('a.btn[href="/checkout"]')
    .setValue('#BillingAddress_FirstName', 'Roger')
    .setValue('#BillingAddress_LastName', 'Sejas')
    .setValue('#BillingAddress_Address1', '2 Holbrook Street')
    .selectByAttribute('#BillingAddress_Country', 'value', '14')
    .selectByAttribute('#BillingAddress_StateId', 'value', '52')
    .setValue('#BillingAddress_Suburb', 'Bossley Park')
    .setValue('#BillingAddress_Postcode', '2176')
    .setValue('#BillingAddress_Phone', '0447773180')
    .setValue('#BillingAddress_Email', 'rogersejas@gmail.com')
    .click('#IsShippingSameAsBillingAddress')
    .click('#75')
    .click('#paypalPayment')
    .click('input.pp.checkout-btn')
    .getUrl()
    .then(paypalUrl => {
      res.redirect(paypalUrl);
    })
    .end();
};

export default automationHandler;
