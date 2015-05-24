var sizeOf = require('../index.js');
var assert = require('assert');

describe('native extension', function() {
  it('should export function that returns an object', function() {
    assert.equal(typeof sizeOf.sizeOf(), 'object');
  });
});
