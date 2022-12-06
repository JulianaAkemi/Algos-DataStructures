var reverseWords = function (s) {
  let words = s.split(" ");

  let newS = [];
  words.map((word) => {
    newS.push(word.split("").reverse().join(""));
  });

  return newS.join(" ");
};
