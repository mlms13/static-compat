var should = require('chai').should(),
    compat = require('..');

describe('compat', function () {
  describe('#check', function () {
    it('should return a non-empty error array for Array.prototype.filter', function () {
      compat.check('[].filter()').errors.length.should.not.be.empty;
    });
    it('should not return errors for `filter` methods on non-Array objects', function () {
      compat.check('var a = {}; a.filter = function (){};').errors.length.should.be.empty;
    });
  });
});
