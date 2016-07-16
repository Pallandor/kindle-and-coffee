import { expect } from 'chai';

import browser from '../automation/webdriver.config';
import * as automate from '../automation/automations';
import startSelenium from '../automation/selenium';

describe('## Automation Tasks for coffeecompany.com.au', function() {
  let childSeleniumProcess = null;
  this.timeout(25000);
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

  describe('# getHomepage --', function() {
    it('should navigate to the correct url', function(done) {
      browser
        .then(automate.getHomepage(browser))
        .getUrl()
        .then(function(retrievedUrl) {
          console.log(`inside the part where retrievedUrl is: ${retrievedUrl}`);
          expect(retrievedUrl).to.equal('https://www.coffeecompany.com.au/coffee/flavoured/swiss-chocolate');
          done();
        });
    });

    it('should run tests in succession', function(done) {
      expect(true).to.equal(true);
      done();
    });
  });

  after(function(done) {
    childSeleniumProcess.kill();
    done();
  });
});
