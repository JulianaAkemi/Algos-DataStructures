var firstUniqChar = function (s) {
  if (s.length === 0) return -1;

  let counter = {};

  for (const char of s) {
    char in counter ? (counter[char] = counter[char] + 1) : (counter[char] = 1);
  }

  for (const char in counter) {
    if (counter[char] === 1) return s.indexOf(char);
  }

  return -1;
};

var canConstruct = function (ransomNote, magazine) {
  if (ransomNote.length === 0 || magazine.length === 0) return false;
  if (ransomNote.length > magazine.length) return false;
  let counter = {};

  for (const char of magazine) {
    char in counter ? (counter[char] = counter[char] + 1) : (counter[char] = 1);
  }

  for (let char of ransomNote) {
    if (!(char in counter) || counter[char] <= 0) {
      return false;
    } else {
      counter[char]--;
    }
  }

  return true;
};

var minimumRecolors = function (blocks, k) {
  let res = 0;
  let count = 0;
  let l = 0;

  //init k
  for (let r = 0; r < k; r++) {
    if (blocks[r] !== "B") {
      count++;
    }
  }

  res = count;
  let r = k - 1;

  while (r < blocks.length) {
    r++;
    //increase count if new right is white
    if (blocks[r] !== "B") {
      count++;
    }
    //decrease count if old left is white
    if (blocks[l] !== "B") {
      count--;
    }
    l++;
    res = Math.min(res, count);
  }

  return res;
};
