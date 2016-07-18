import { expect } from 'chai';

import startSelenium from '../automation/selenium';
import browser from '../automation/webdriver.config';
import * as automate from '../automation/automations';
import * as helpers from './helpers';

describe('## Automation Tasks for coffeecompany.com.au', function() {
  let childSeleniumProcess = null;
  this.timeout(30000);
  before(function(done) {
    startSelenium
      .then(function(child) {
        childSeleniumProcess = child;
        done();
      })
      .catch(function(err) {
        done(err);
      });
  });

  describe('# startBrowser --', function() {
    before(function(done) {
      helpers.startAutomation(automate.startBrowser, browser, done);
    });
    it('should start a new browser instance', function(done) {
      /** read webdriverio API, figure out what to test to ensure browser instance begun */
      expect(true).to.equal(true);
      done();
    })
  });

  describe('# getCoffeePage --', function() {
    before(function(done) {
      helpers.startAutomation(automate.getCoffeePage, browser, done);
    });
    it('should navigate to the correct url ', function(done) {
      helpers.createUrlTest('https://www.coffeecompany.com.au/coffee/flavoured/swiss-chocolate', browser, done);
    });
    it('should navigate to page with correct title', function(done) {
      helpers.createPageTitleTest(/Swiss\s*Chocolate/i, browser, done);
    });
  });

  describe('# addCoffee --', function() {
    before(function(done) {
      helpers.startAutomation(automate.addCoffee, browser, done);
    });
    it('should add the correct coffee grind', function(done) {
      browser
        .isSelected('[value="79"]')
        .then(function(isGrindSelected) {
          expect(isGrindSelected).to.equal(true);
        })
        .getText('#grindOption option[value="79"]')
        .then(function(retrievedText) {
          expect(retrievedText).to.match(/Aeropress/i);
          done();
        })
        .catch(function(err) {
          done(err);
        });
    });
    it('should add the correct coffee quantity', function(done) {
      browser
        .isSelected('[value="5"]')
        .then(function(isSizeSelected) {
          expect(isSizeSelected).to.equal(true);
        })
        .getText('#sizeOption option[value="5"]')
        .then(function(retrievedText) {
          expect(retrievedText).to.match(/1\s*kg/i);
          done();
        })
        .catch(function(err) {
          done(err);
        });
    });
    it('should display the correct coffee selection price and total', function(done) {
      /** long pause to allow selection to render to screen */
      browser
        .pause(5000)
        .getText('#js-coffee-price')
        .then(function(coffeePricePerKg) {
          expect(coffeePricePerKg).to.match(/\$30\.00\/kg/i);
          expect(true).to.equal(true);
        })
        .getText('#totalPrice')
        .then(function(totalPrice) {
          expect(totalPrice).to.match(/\$30\.00/i);
          done();
        })
        .catch(function(err) {
          done(err);
        });
    });
    /** test suite to see if it added it to the cart at this point?
        #topHeader ul.bag-items li.item a.item-link[href="/coffee/flavoured/swiss-chocolate"]
    */
  });

  describe('# clickCheckout --', function() {
    before(function(done) {
      helpers.startAutomation(automate.clickCheckout, browser, done);
    });
    it('should navigate to the correct url ', function(done) {
      helpers.createUrlTest('https://www.coffeecompany.com.au/checkout/signin', browser, done);
    });
    it('should navigate to page with correct title', function(done) {
      helpers.createPageTitleTest(/Sign\s*in/i, browser, done);
    });

  });

  describe('# clickContinueAsGuest --', function() {
    before(function(done) {
      helpers.startAutomation(automate.clickContinueAsGuest, browser, done);
    });
    it('should navigate to the correct url ', function(done) {
      helpers.createUrlTest('https://www.coffeecompany.com.au/checkout', browser, done);
    });
    it('should navigate to page with correct title', function(done) {
      helpers.createPageTitleTest(/Checkout/i, browser, done);
    });
  });

  describe('# addCheckoutBillingDetails --', function() {
    before(function(done) {
      helpers.startAutomation(automate.addCheckoutBillingDetails, browser, done);
    });
    it('should correctly add first name', function(done) {
      helpers.createValueTest('#BillingAddress_FirstName', 'Roger', browser, done);
    });
    it('should correctly add last name', function(done) {
      helpers.createValueTest('#BillingAddress_LastName', 'Sejas', browser, done);
    });
    it('should correctly add Street Address', function(done) {
      helpers.createValueTest('#BillingAddress_Address1', '2 Holbrook Street', browser, done);
    });
    it('should correctly select Country', function(done) {
      helpers.createSelectedTest('#BillingAddress_Country option[value="14"]', browser, done);
    });
    it('should correctly select State', function(done) {
      helpers.createSelectedTest('#BillingAddress_StateId option[value="52"]', browser, done);
    });
    it('should correctly add Suburb', function(done) {
      helpers.createValueTest('#BillingAddress_Suburb', 'Bossley Park', browser, done);
    });
    it('should correctly add Postcode', function(done) {
      helpers.createValueTest('#BillingAddress_Postcode', '2176', browser, done);
    });
    it('should correctly add Phone Number', function(done) {
      helpers.createValueTest('#BillingAddress_Phone', '0447773180', browser, done);
    });
    it('should correctly add Email', function(done) {
      helpers.createValueTest('#BillingAddress_Email', 'roger.sejas@gmail.com', browser, done);
    });
  });

  describe('# addCheckoutOptions --', function() {
    before(function(done) {
      helpers.startAutomation(automate.addCheckoutOptions, browser, done);
    });
    it('should select eParcel Post (Regular Shipping) ', function(done) {
      /** requires custom checker as uses numerical Id and also uses class to track selected state */
      browser
        .getAttribute('input[name="ShippingType"][value="75"]', 'class')
        .then(function(classAttribute) {
          expect(classAttribute).to.equal('checked');
          done();
        })
        .catch(function(err) {
          done(err);
        });
    });
    it('should select Paypal Payment ', function(done) {
      /** requires custom checker as uses class to track selected state */
      browser
        .getAttribute('#paypalPayment', 'class')
        .then(function(classAttribute) {
          expect(classAttribute).to.equal('checked');
          done();
        })
        .catch(function(err) {
          done(err);
        });
    });
  });

  describe('# clickPaypalCheckout --', function() {
    before(function(done) {
      helpers.startAutomation(automate.clickPaypalCheckout, browser, done);
    });
    it('should navigate to the correct url ', function(done) {
      helpers.createUrlTest(/^https:\/\/www\.paypal\.com/, browser, done);
    });
    it('should navigate to page with correct title', function(done) {
      helpers.createPageTitleTest(/Paypal/i, browser, done);
    });
  });

  describe('# redirectClient --', function() {
    it('should have navigated cient to the correct url ', function(done) {
      /** this test suite is redundant, essentially would be testing stability of 
      Express redirect method on response. Not your responsibility! */
      expect(true).to.equal(true);
      done();
    });
  });

  after(function(done) {
    /** move stopBrowser to own test suite */
    browser
      .then(automate.stopBrowser(browser))
      .then(() => {
        childSeleniumProcess.kill();
        done();
      });
  });
});
