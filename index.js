var SizeOfNative = require('bindings')('SizeOf');
module.exports = SizeOfNative;

var sizeOf = module.exports.sizeOf;

/**
 * Sum of a and b.
 * @param {number} a
 * @param {number} b
 * @returns {numer} sum of a and b
 */
function sum(a, b) {
  return a + b;
}

/**
 * Calculate the size of the object including all references recursively.
 * @param {any} value
 * @returns {number} The size of the value and the sizes of it's references.
 */
function sizeOfDeep(value) {
  if (value && typeof value === "object" && arguments.length === 1) {
    var size = sizeOf(value);
    return size + Object.keys(value)
                        .map(function (key) {
                          return sizeOfDeep(value[key]);
                        })
                        .reduce(sum);
  } else {
    var args = Array.prototype.slice.call(arguments);
    return module.exports.sizeOf.apply(this, args);
  }
}

module.exports.sizeOfDeep = sizeOfDeep;
