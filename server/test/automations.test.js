import { expect } from 'chai';

import browser from '../automation/webdriver.config';
import * as automate from '../automation/automations';
import startSelenium from '../automation/selenium';
import * as helpers from './helpers';

describe('## Automation Tasks for coffeecompany.com.au', function() {
  let childSeleniumProcess = null;
  this.timeout(30000);
  before(function(done) {
    console.log('++++ inside MOCHA tests, what is node_env: ', process.env.NODE_ENV);
    console.log('+++++++'); 
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
      browser
        .then(automate.startBrowser(browser))
        .then(function() {
          done();
        })
        .catch(function(err) {
          done(err);
        });
    });
    it('should start a new browser instance', function(done) {
      // read webdriverio API, figure out what to test to ensure browser instance begun
      expect(true).to.equal(true);
      done();
    })
  });

  describe('# getCoffeePage --', function() {
    before(function(done) {
      browser
        .then(automate.getCoffeePage(browser))
        .then(function() {
          done();
        })
        .catch(function(err) {
          done(err);
        });
    });

    it('should navigate to page with correct url', function(done) {
      browser
        .getUrl()
        .then(function(retrievedUrl) {
          expect(retrievedUrl).to.equal('https://www.coffeecompany.com.au/coffee/flavoured/swiss-chocolate');
          done();
        })
        .catch(function(err) {
          done(err);
        });
    });

    it('should navigate to page with correct title', function(done) {
      browser
        .getTitle()
        .then(function(retrievedTitle) {
          expect(retrievedTitle).to.match(/Swiss\s*Chocolate/i);
          done();
        })
        .catch(function(err) {
          done(err);
        });
    });
  });

  describe('# addCoffee --', function() {
    before(function(done) {
      browser
        .then(automate.addCoffee(browser))
        .then(function() {
          done();
        })
        .catch(function(err) {
          done(err);
        });
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
      browser
        .pause(5000) // long pause to allow selection to render to screen
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
    // test suite to see if it added it to the cart at this point?
    // #topHeader ul.bag-items li.item a.item-link[href="/coffee/flavoured/swiss-chocolate"]
  });

  describe('# clickCheckout --', function() {
    before(function(done) {
      browser
        .then(automate.clickCheckout(browser))
        .then(function() {
          done();
        })
        .catch(function(err) {
          done(err);
        });
    });
    it('should navigate to the correct url ', function(done) {
      browser
        .getUrl()
        .then(function(retrievedUrl) {
          expect(retrievedUrl).to.equal('https://www.coffeecompany.com.au/checkout/signin');
          done();
        })
        .catch(function(err) {
          done(err);
        });
    });
    it('should navigate to page with correct title ', function(done) {
      browser
        .getTitle()
        .then(function(retrievedTitle) {
          expect(retrievedTitle).to.match(/Sign\s*in/i);
          done();
        })
        .catch(function(err) {
          done(err);
        });
    });
  });

  describe('# clickContinueAsGuest --', function() {
    before(function(done) {
      browser
        .then(automate.clickContinueAsGuest(browser))
        .then(function() {
          done();
        })
        .catch(function(err) {
          done(err);
        });
    });
    it('should navigate to page with correct url ', function(done) {
      browser
        .getUrl()
        .then(function(retrievedUrl) {
          expect(retrievedUrl).to.equal('https://www.coffeecompany.com.au/checkout');
          done();
        })
        .catch(function(err) {
          done(err);
        });
    });
    it('should navigate to page with correct title ', function(done) {
      browser
        .getTitle()
        .then(function(retrievedTitle) {
          expect(retrievedTitle).to.match(/Checkout/i);
          done();
        })
        .catch(function(err) {
          done(err);
        });
    });
  });

  describe('# addCheckoutBillingDetails --', function() {
    before(function(done) {
      browser
        .then(automate.addCheckoutBillingDetails(browser))
        .then(function() {
          done();
        })
        .catch(function(err) {
          done(err);
        });
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

  // failing, looking at DOM, appears html doesnt render selected attribute on selection,
  // only 'checked' class modification, this may be reason for failure? 
  // but .checked on DOM element in console works. Review later. 
  describe('# addCheckoutOptions --', function() {
    it('should select eParcel Post (Regular Shipping) ', function(done) {
      helpers.createSelectedTest('input[name="ShippingType"][value="75"]', browser, done);
    });
    it('should select Paypal Payment ', function(done) {
      helpers.createSelectedTest('#paypalPayment[value="PayPal"]', browser, done);
    });
  });

  describe('# clickPaypalCheckout --', function() {
    it('should .... ', function(done) {
      expect(true).to.equal(true);
      done();
    });
  });

  describe('# redirectClient --', function() {
    it('should .... ', function(done) {
      expect(true).to.equal(true);
      done();
    });
  });

  after(function(done) {
    // move stopBrowser to own test suite
    browser
      .then(automate.stopBrowser(browser))
      .then(() => {
        childSeleniumProcess.kill();
        done();
      });
  });
});
