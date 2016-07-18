import { expect } from 'chai';

export function startAutomation(automationTask, browserInst, doneInst) {
  browserInst
    .then(automationTask(browserInst))
    .then(function() {
      doneInst();
    })
    .catch(function(err) {
      doneInst(err);
    });
};

/** 
    Test generators are not chainable, expects testing at atomic level
    and invokes done as a result 
  */

export function createUrlTest(expectedUrl, browserInst, doneInst) {
  return browserInst
    .getUrl()
    .then(function(retrievedUrl) {
      if (typeof expectedUrl === 'string') {
        expect(retrievedUrl).to.equal(expectedUrl);
      } else if (expectedUrl instanceof RegExp) {
        expect(retrievedUrl).to.match(expectedUrl);
      }
      doneInst();
    })
    .catch(function(err) {
      doneInst(err);
    });
};

export function createPageTitleTest(expectedTitle, browserInst, doneInst) {
  return browserInst
    .getTitle()
    .then(function(retrievedTitle) {
      if (typeof expectedTitle === 'string') {
        expect(retrievedTitle).to.equal(expectedTitle);
      } else if (expectedTitle instanceof RegExp) {
        expect(retrievedTitle).to.match(expectedTitle);
      }
      doneInst();
    })
    .catch(function(err) {
      doneInst(err);
    });
};

export function createValueTest(selector, expectedValue, browserInst, doneInst) {
  return browserInst
    .getValue(selector)
    .then(function(actualValue) {
      expect(actualValue).to.equal(expectedValue);
      doneInst();
    })
    .catch(function(err) {
      doneInst(err);
    });
};

export function createSelectedTest(selectorWithValue, browserInst, doneInst) {
  return browserInst
    .isSelected(selectorWithValue)
    .then(function(isSelected) {
      expect(isSelected).to.equal(true);
      doneInst();
    })
    .catch(function(err) {
      doneInst(err);
    });
};
