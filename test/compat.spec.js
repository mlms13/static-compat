var should = require('chai').should(),
    compat = require('..');

describe('compat', function () {
  describe('#check', function () {
    it('should return a non-empty error array for Array.prototype.filter', function () {
      compat.check('[].filter()').errors.length.should.not.be.empty;
    });
  });
});
