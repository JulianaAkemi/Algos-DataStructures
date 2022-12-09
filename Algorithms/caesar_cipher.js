const caesarCipher = (s, key) => {
  const alphabetArr = "abcdefghijklmnopqrstuvwxyz".split("");
  let result = "";

  for (let i = 0; i < s.length; i++) {
    const char = s[i],
      index = alphabetArr.indexOf(char),
      encodedIndex = (index + key) % 26;

    if (index === -1) {
      result += char;
      continue;
    }

    result += alphabetArr[encodedIndex];
  }

  return result;
};

//Time: O(n)
//Space: O(n)
