var majorityElement = function (nums) {
  let counter = {};

  nums.forEach((num) =>
    num in counter ? (counter[num] = counter[num] + 1) : (counter[num] = 1)
  );

  for (const key in counter) {
    if (counter[key] > nums.length / 2) {
      return key;
    }
  }
};
