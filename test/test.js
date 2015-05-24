var sizeOf = require('../index.js');
var assert = require('assert');

describe('native extension', function() {
  it('should export function that returns a number', function() {
    assert.equal(typeof sizeOf.sizeOf(), 'number');
  });

  it('should return a size', function() {
    assert.equal(sizeOf.sizeOf(), 0);
  });
});
