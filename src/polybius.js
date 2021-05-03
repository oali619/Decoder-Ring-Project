const polybiusModule = (function () {
  const keyValue = {
    11: "a",
    21: "b",
    31: "c",
    41: "d",
    51: "e",
    12: "f",
    22: "g",
    32: "h",
    42: "(i/j)",
    52: "k",
    13: "l",
    23: "m",
    33: "n",
    43: "o",
    53: "p",
    14: "q",
    24: "r",
    34: "s",
    44: "t",
    54: "u",
    15: "v",
    25: "w",
    35: "x",
    45: "y",
    55: "z",
  };

  function polybius(input, encode = true) {
    // convert input to an array
    const statement = Array.from(input);

    // function for encode
    if (encode) {
      return statement
        .map((ch) => {
          if (ch === "i" || ch === "j") return "42";
          for (const [key, value] of Object.entries(keyValue)) {
            if (ch === value) {
              return key;
            }
          }
          return ch;
        })
        .join("");
    }

    // function for decode

    // convert input number to a string
    const num = input.toString();
    // sanity check
    if (num.split(" ").join("").length % 2 !== 0) {
      return false;
    }

    const result = num
      .split(" ")
      .map((word) => {
        let string = "";
        for (let i = 0; i < word.length; i += 2) {
          const key = word.charAt(i) + word.charAt(i + 1);
          string += keyValue[key];
        }
        return string;
      })
      .join(" ");
    return result;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
