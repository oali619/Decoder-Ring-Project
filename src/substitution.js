const substitutionModule = (function () {
  const alpha = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  function substitution(input, alphabet, encode = true) {
    // sanity check
    if (!alphabet || alphabet.length !== 26) return false;

    // check for duplicates
    const sub = Array.from(alphabet);
    const duplicates = new Set(sub);
    if (sub.length !== duplicates.size) return false;

    // define variables
    input = input.toLowerCase();
    let result = "";

    // loop thru input to encode or decode each character
    for (let i = 0; i < input.length; i++) {
      const char = input.charAt(i);
      const encodePosition = alpha.indexOf(char);
      const decodePosition = alphabet.indexOf(char);

      // encode
      if (encode) {
        alpha.includes(char)
          ? (result += alphabet.charAt(encodePosition))
          : (result += char);
      }

      // decode
      if (!encode) {
        alphabet.includes(char)
          ? (result += alpha[decodePosition])
          : (result += char);
      }
    }
    return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
