const char = [
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

exports.generateRandomCode = () => {
  // 6 digit code
  const code = [null, null, null, null, null, null];
  // randomly select 3 letters from 26 letter
  for (let i = 0; i < 3; i++) {
    // randomly select 3 position to insert letters
    let v = Math.ceil(Math.random() * 25);
    let j = Math.floor(Math.random() * 6);
    code[j] = char[v];
  }

  for (let i = 0; i < code.length; i++) {
    if (code[i] === null) {
      let v = Math.floor(Math.random() * 10);
      code[i] = v;
    }
  }

  return code.join("");
  // randomly select 3 more number and insert in the remaining position
};
