import { expect } from 'chai';

import browser from '../automation/webdriver.config';
import * as automate from '../automation/automations';
import startSelenium from '../automation/selenium';

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
    it('should start a new browser instance', function(done) {
      // browser
      //   .then(automate.startBrowser(browser))
      // read webdriverio API, figure out what to test.
      expect(true).to.equal(true);
      done();
    })
  });

  describe('# getCoffeePage --', function() {
    it('should navigate to page with correct url', function(done) {
      browser
        .then(automate.startBrowser(browser))
        .then(automate.getCoffeePage(browser))
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
    it('should add the correct coffee grind', function(done) {
      browser
        .then(automate.addCoffee(browser))
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
        .getText('#js-coffee-price')
        .then(function(coffeePricePerKg) {
          expect(coffeePricePerKg).to.match(/\$30\.00\/kg/i);
          expect(true).to.equal(true);
          done();
        })
        .getText('#totalPrice')
        .then(function(totalPrice){
          expect(totalPrice).to.match(/\$15\.00/i);
          done();
        })
        .catch(function(err){
          done(err);
        });
    });
    // test suite to see if it added it to the cart at this point?
    // #topHeader ul.bag-items li.item a.item-link[href="/coffee/flavoured/swiss-chocolate"]
  });

  describe('# clickCheckout --', function() {
    it('should .... ', function(done) {
      expect(true).to.equal(true);
      done();
    });
    it('should .... ', function(done) {
      expect(true).to.equal(true);
      done();
    });
  });

  describe('# clickContinueAsGuest --', function() {
    it('should .... ', function(done) {
      expect(true).to.equal(true);
      done();
    });
  });

  describe('# addCheckoutBillingDetails --', function() {
    it('should .... ', function(done) {
      expect(true).to.equal(true);
      done();
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
    childSeleniumProcess.kill();
    done();
  });
});
