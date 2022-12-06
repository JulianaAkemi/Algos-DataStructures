var numIdenticalPairs = function (nums) {
  if (nums.length > 100) return;

  let frequencyCounter = {},
    goodPairs = 0;

  nums.forEach((num) => {
    num in frequencyCounter
      ? (frequencyCounter[num] = frequencyCounter[num] + 1)
      : (frequencyCounter[num] = 1);
  });

  for (const key in frequencyCounter) {
    frequencyCounter[key] =
      (frequencyCounter[key] * (frequencyCounter[key] - 1)) / 2;

    goodPairs = goodPairs + frequencyCounter[key];
  }

  return goodPairs;
};
