const caesarModule = (function () {
  const alphabet = [
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

  function caesar(input, shift, encode = true) {
    // sanity check
    if (!shift || shift === 0 || shift > 25 || shift < -25) {
      return false;
    }
    // convert input to an array
    const message = Array.from(input);

    // map through array to return new string w .join()
    return message
      .map((letter) => {
        if (alphabet.includes(letter.toLowerCase())) {
          const position = alphabet.indexOf(letter.toLowerCase());

          // shift right or left based on encode or decode
          encode
            ? (newPosition = position + shift)
            : (newPosition = position - shift);

          // wrap the new position around the array index
          if (newPosition >= 26) {
            newPosition -= 26;
          } else if (newPosition < 0) {
            newPosition += 26;
          }

          return alphabet[newPosition];
        } else {
          return letter;
        }
      })
      .join("");
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
