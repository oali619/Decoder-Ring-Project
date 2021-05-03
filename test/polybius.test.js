const expect = require("chai").expect;
const { polybius } = require("../src/polybius.js");

describe("encoding", () => {
  it("should should encode a message by translating each letter to a pair of numbers", () => {
    const expected = "4432423352125413";
    const actual = polybius("thinkful", true);
    expect(actual).to.eql(expected);
  });

  it("should translate both 'i' and 'j' to 42", () => {
    const expected = "424222221351";
    const actual = polybius("jiggle", true);
    expect(actual).to.eql(expected);
  });
  it("should leave spaces as is", () => {
    const actual = polybius("Hello world");
    expect(actual).to.include(" ");
  });
});

describe("decoding", () => {
  it("should should decode a message by translating each pair of numbers to a letter", () => {
    const expected = "th(i/j)nkful";
    const actual = polybius("4432423352125413", false);
    expect(actual).to.eql(expected);
  });

  it("should translate 42 to both 'i' and 'j'", () => {
    const expected = "(i/j)(i/j)ggle";
    const actual = polybius("424222221351", false);
    expect(actual).to.eql(expected);
  });
  it("should leave spaces as is", () => {
    const actual = polybius("3251131343 2543241341");
    expect(actual).to.include(" ");
  });
  it("should return false of length of all numbers is odd", () => {
    const actual = polybius("3251131343 254324134", false);
    expect(actual).to.be.false;
  });
});
