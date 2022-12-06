// [3, 5, -4, 8, 11, 1, -1, 6], 10
// [11, -1]

// Two pointers, SORTED
// Time: O(n) OR O(n log n) if it needs to be sorted
// Space: O(1)
const twoSum = (numbers, target) => {
  let start = 0,
    end = numbers.length - 1;

  while (numbers[start] + numbers[end] !== target) {
    if (numbers[start] + numbers[end] > target) {
      end--;
    } else {
      start++;
    }
  }

  return [start + 1, end + 1];
};

// With hash table, UNSORTED
// Time: O(n)
// Space: O(n)
const twoSumHashTable = (arr, target) => {
  const numbers = {};

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    const potentialMatch = target - num;

    if (numbers[potentialMatch]) {
      return [potentialMatch, num];
    } else {
      numbers[num] = true;
    }

    return [];
  }
};
