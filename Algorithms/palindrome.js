const copyString = (s) => {
  const reversed = s.split("").reverse().join("");

  return s === reversed;
};

const recursive = (s, i = 0) => {
  let j = s.length - 1 - i;

  return i >= j ? true : s[i] === s[j] && recursive(s, i + 1);
};

const iterative = (s) => {
  let i = 0,
    j = s.length - 1;

  while (i < j) {
    if (s[i] !== s[j]) return false;

    i++;
    j--;
  }

  return true;
};
