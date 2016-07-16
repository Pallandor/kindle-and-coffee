import { expect } from 'chai';

describe('## Automation Tasks', function() {
  describe('-- Before Hook --', function() {
    // before(function(done) {
    //   // beforehook
    // });
    describe('# Inner Test', function() {
      it('should start empty', function(done) {
        expect(true).to.equal(true);
        done();
      });

      it('should run tests in succession', function(done) {
        expect(true).to.equal(true);
        done();
      });
    });

  });

});
