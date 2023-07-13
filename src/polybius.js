// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const polybiusSquare = [
    ['a', 'b', 'c', 'd', 'e'],
    ['f', 'g', 'h', 'i/j', 'k'],
    ['l', 'm', 'n', 'o', 'p'],
    ['q', 'r', 's', 't', 'u'],
    ['v', 'w', 'x', 'y', 'z']
  ];

  function toEncode(input) {
    if (input === ' ') {
      return ' ';
    } else if (input === 'i' || input === 'j') {
      return '42';
    } else {
      for (let row = 0; row < polybiusSquare.length; row++) {
        for (let col = 0; col < polybiusSquare[row].length; col++) {
          if (polybiusSquare[row][col].includes(input)) {
            return `${col + 1}${row + 1}`;
          }
        }
      }
    }
  }

  function toDecode(char, nextChar) {
    if (char === ' ') {
      return ' ';
    } else {
      const row = parseInt(nextChar) - 1;
      const col = parseInt(char) - 1;
      return polybiusSquare[row][col];
    }
  }
  function polybius(input, encode = true) {
    if (encode) {
      return input
        .toLowerCase()
        .split('')
        .map(char => toEncode(char))
        .join('');
    } else {
      if (input.replace(/ /g, '').length % 2 !== 0) {
        return false;
      }
      let decoded = '';
      let i = 0;
      while (i < input.length) {
        if (input[i] === ' ') {
          decoded += ' ';
          i++;
        } else {
          const char = input[i];
          const nextChar = input[i + 1];
          const decodedChar = toDecode(char, nextChar);
          if (!decodedChar) {
            return false;
          }
          decoded += decodedChar;
          i += 2;
        }
      }
      return decoded;
    }
  }

  return {
    polybius,
  };
})();



module.exports = { polybius: polybiusModule.polybius };
