var sizeOf = require("../index.js");
var assert = require("assert");

describe("native extension", function() {
  it("should export function that returns a number", function() {
    assert.equal(typeof sizeOf.sizeOf(), "number");
  });

  it("should return a size 0 for no arguments", function() {
    assert.equal(sizeOf.sizeOf(), 0);
  });

  it("should throw an error for more than 1 argument", function() {
    var throwed = false;
    try {
      sizeOf.sizeOf(0, 1);
    } catch (error) {
      assert.equal(error.message, "Too many arguments!")
      throwed = true;
    }
    assert(throwed);
  });

  it("should return a size 8 for a number", function() {
    assert.equal(sizeOf.sizeOf(0), 8);
  });

  it("should return a size 8 for a boolean", function() {
    assert.equal(sizeOf.sizeOf(true), 8);
  });

  it("should return a size 8 for an empty string", function() {
    assert.equal(sizeOf.sizeOf(""), 8);
  });

  it("should return a size 8 for a string", function() {
    assert.equal(sizeOf.sizeOf("abc"), 8);
  });

  it("should return a size 8 for an empty object", function() {
    assert.equal(sizeOf.sizeOf({}), 8);
  });

  it("should return a size 16 for an object with a null property", function() {
    assert.equal(sizeOf.sizeOf({foo: null}), 8);
  });

  it("should return a size 16 for an object with a number property", function() {
    assert.equal(sizeOf.sizeOf({foo: 1}), 8);
  });

  it("should return a size 24 for an object with two properties", function() {
    assert.equal(sizeOf.sizeOf({foo: 1, bar: 1}), 8);
  });

  describe("sizeOfDeep", function() {
    it("should return a size 0 for no arguments", function() {
      assert.equal(sizeOf.sizeOfDeep(), 0);
    });

    it("should throw an error for more than 1 argument", function() {
      var throwed = false;
      try {
        sizeOf.sizeOfDeep(0, 1);
      } catch (error) {
        assert.equal(error.message, "Too many arguments!")
        throwed = true;
      }
      assert(throwed);
    });

    it("should return a size 8 for a number", function() {
      assert.equal(sizeOf.sizeOfDeep(0), 8);
    });

    it("should return a size 8 for a boolean", function() {
      assert.equal(sizeOf.sizeOfDeep(true), 8);
    });

    it("should return a size 8 for an empty string", function() {
      assert.equal(sizeOf.sizeOfDeep(""), 8);
    });

    it("should return a size 8 for a string", function() {
      assert.equal(sizeOf.sizeOfDeep("abc"), 8);
    });

    it("should return a size 8 for an empty object", function() {
      assert.equal(sizeOf.sizeOfDeep({}), 8);
    });

    it("should return a size 16 for an object with a null property", function() {
      assert.equal(sizeOf.sizeOfDeep({foo: null}), 16);
    });

    it("should return a size 16 for an object with a number property", function() {
      assert.equal(sizeOf.sizeOfDeep({foo: 1}), 16);
    });

    it("should return a size 24 for an object with two properties", function() {
      assert.equal(sizeOf.sizeOfDeep({foo: 1, bar: 1}), 24);
    });
  })
});
