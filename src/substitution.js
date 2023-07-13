// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26 || !isUnique(alphabet)) {
      return false;
    }
    const inputLower = input.toLowerCase();
    let result = "";
    for (let i = 0; i < input.length; i++) {
      const inputChar = inputLower[i];
      let outputChar = inputChar;
      if (inputChar === " ") {
        result += " ";
        continue;
      }
      const alphabetIndex = encode ? inputChar.charCodeAt() - 97 : alphabet.indexOf(inputChar);
      outputChar = encode ? alphabet[alphabetIndex] : String.fromCharCode(97 + alphabetIndex);
      result += outputChar;
    }
    return result;
  }

  function isUnique(alphabet) {
    const charSet = new Set(alphabet);
    return charSet.size === alphabet.length;
  }

  return {
    substitution,
  };
})();



module.exports = { substitution: substitutionModule.substitution };
