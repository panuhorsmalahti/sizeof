var sizeOf = require('../index.js');
var assert = require('assert');

describe('native extension', function() {
  it('should export function that returns a number', function() {
    assert.equal(typeof sizeOf.sizeOf(), 'number');
  });

  it('should return a size 0 for no arguments', function() {
    assert.equal(sizeOf.sizeOf(), 0);
  });

  it('should throw an error for more than 1 argument', function() {
    var throwed = false;
    try {
      sizeOf.sizeOf(0, 1);
    } catch (error) {
      assert.equal(error.message, "Too many arguments!")
      throwed = true;
    }
    assert(throwed);
  });

  it('should return a size > 0 for a number', function() {
    assert(sizeOf.sizeOf(0) > 0);
  });
});
