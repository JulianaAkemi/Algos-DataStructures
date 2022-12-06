const countGoodSubstrings = (s) => {
  if (s.length < 3) return 0;

  let goodSubstrings = 0;

  for (let i = 0; i < s.length - 2; i++) {
    if (s[i] !== s[i + 1] && s[i] !== s[i + 2] && s[i + 1] !== s[i + 2]) {
      goodSubstrings = goodSubstrings + 1;
    }
  }

  return goodSubstrings;
};
