import { expect } from 'chai';

import browser from '../automation/webdriver.config';
import * as automate from '../automation/automations';
import startSelenium from '../automation/selenium';
import * as helpers from './helpers';

// function createValueTest(selector, expectedValue, browserInst, done, chaiExpect) {
//   return browser
//     .getValue(selector)
//     .then(function(actualValue) {
//       expect(actualValue).to.equal(expectedValue) // exact match, bring in values/correlations via obj!
//       done();
//     })
//     .catch(function(err) {
//       done(err);
//     });
// };


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
        .pause(1000) // pause due to rendering selection to display taking a little while
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
      browser
        .getValue('#BillingAddress_FirstName')
        .then(function(firstName) {
          expect(firstName).to.equal('Roger') // exact match, bring in values/correlations via obj!
          done();
        })
        .catch(function(err) {
          done(err);
        });
    });
    it('should correctly add last name', function(done) {
      browser
        .getValue('#BillingAddress_LastName')
        .then(function(lastName) {
          expect(lastName).to.equal('Sejas') // exact match, bring in values/correlations via obj!
          done();
        })
        .catch(function(err) {
          done(err);
        });
    });
    it('should correctly add last name v2.0', function(done) {
      helpers.createValueTest('#BillingAddress_LastName', 'Sejas', browser, done);
    });

  });

  describe('# addCheckoutOptions --', function() {
    it('should .... ', function(done) {
      expect(true).to.equal(true);
      done();
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
