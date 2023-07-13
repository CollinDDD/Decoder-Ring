// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {

  function toEncode(input, shift) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let encoded = "";
  
    for (let i = 0; i < input.length; i++) {
      const inputChar = input[i].toLowerCase();
      const alphabetIndex = alphabet.indexOf(inputChar);
      if (alphabetIndex === -1) {
        encoded += inputChar;
      } else {
        const shiftedIndex = (alphabetIndex + shift + 26) % 26;
        const encodedChar = alphabet[shiftedIndex];
        encoded += encodedChar;
      }
    }
    return encoded;
  }
  
    
    function toDecode(input, shift) {
      const alphabet = "abcdefghijklmnopqrstuvwxyz";
      let decoded = "";
    
      for (let i = 0; i < input.length; i++) {
        const inputChar = input[i].toLowerCase();
        const alphabetIndex = alphabet.indexOf(inputChar);
        if (alphabetIndex === -1) {
          decoded += inputChar;
          continue;
        }
        const shiftedIndex = (alphabetIndex - shift + 26) % 26;
        const decodedChar = alphabet[shiftedIndex];
        decoded += decodedChar;
      }
      return decoded;
    }
    
  
    function caesar(input, shift, encode = true) {
      if (shift === 0 || shift > 25 || shift < -25) {
        return false;
      } else if (encode === true) {
        return toEncode(input, shift);
      } else if (encode === false) {
        return toDecode(input, shift);
      }
    }
    return {
      caesar,
    };
  })();
  
  
  
  
  module.exports = { caesar: caesarModule.caesar };
  