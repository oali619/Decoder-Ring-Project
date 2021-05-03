// Write your tests here!
const expect = require("chai").expect;
const { caesar } = require("../src/caesar.js");

describe("invalid shift value", () => {
  it("should return false if invalid shift value 0", () => {
    const actual = caesar("Encode this message", 0);
    expect(actual).to.be.false;
  });
  it("should return false if invalid shift value less than -25", () => {
    const actual = caesar("Encode this message", -26);
    expect(actual).to.be.false;
  });
  it("should return false if invalid shift value greater than 25", () => {
    const actual = caesar("Encode this message", 26);
    expect(actual).to.be.false;
  });
  it("should return false if shift does not exist", () => {
    const actual = caesar("Encode this message", null);
    expect(actual).to.be.false;
  });
});

describe("encoding", () => {
  it("should properly encode message", () => {
    const expected = "ij, nz obnf jt pctb!";
    const actual = caesar("Hi, my name is Obsa!", 1, true);
    expect(actual).to.equal(expected);
  });
  it("should maintain spaces and symbols if in original input", () => {
    const actual = caesar("Hi, my name is Obsa!", 1, true);
    expect(actual).to.include(" ");
  });
  it("should treat capital letters the same as lowercase", () => {
    const expected = "ij, nz obnf jt pctb!";
    const actual = caesar("Hi, my name is Obsa!", 1, true);
    expect(actual).to.eql(expected);
  });
  it("should handle letters shifted off the end of the alphabet", () => {
    const expected = "afcsb";
    const actual = caesar("Zebra", 1, true);
    expect(actual).to.eql(expected);
  });
});

describe("decoding", () => {
  it("should properly decode message", () => {
    const expected = "hi, my name is obsa!";
    const actual = caesar("Ij, nz obnf jt Pctb!", 1, false);
    expect(actual).to.equal(expected);
  });
  it("should maintain spaces and symbols if in original input", () => {
    const actual = caesar("ij, nz obnf jt pctb!", 1, false);
    expect(actual).to.include(" ");
  });
  it("should treat capital letters the same as lowercase", () => {
    const expected = "hi, my name is obsa!";
    const actual = caesar("ij, nz obnf jt pctb!", 1, false);
    expect(actual).to.eql(expected);
  });
  it("should handle letters shifted off the end of the alphabet", () => {
    const expected = "zebra";
    const actual = caesar("afcsb", 1, false);
    expect(actual).to.eql(expected);
  });
});
