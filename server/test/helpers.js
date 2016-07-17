import { expect } from 'chai';

// Test helpers in ES5 to prevent lexical 'this' bindings interfering with Mocha passing around context
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