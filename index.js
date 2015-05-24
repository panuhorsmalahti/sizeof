var SizeOf = require('bindings')('SizeOf');
module.exports = SizeOf;

// from lodash
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

module.exports.sizeOfDeep = function(value) {
  if (!isObject(value)) {
    var args = Array.prototype.slice.call(arguments);
    return module.exports.sizeOf.apply(this, args);
  } else {
    // TODO
    return 0;
  }
}
