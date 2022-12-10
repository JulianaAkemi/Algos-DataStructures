// given a unsorted array of unique integers
// find all possible triple numbers combinations
// that sum up to 0

//input ex: [12, 3, 1, 2, -6, 5, -8, 6], 0
//output: [[-8, 2, 6], [-8, 3, 5], [-6, 1, 6]]

// Naive approach would obviously be 3 nested for loops, but that would
// be too inneficient, with a time complexity of O(n^3)

// Efficient approach with two pointers:
//Time: O(n^2)
//Space: O(n) worst case, maybe all numbers sum up to 0!
const threeNumberSum = (arr, targetSum) => {
  arr = arr.sort((a, b) => a - b);
  let triplets = [];

  for (let i = 0; i < arr.length; i++) {
    let left = i + 1,
      right = arr.length - 1;

    while (left - right < right) {
      let currentSum = arr[i] + arr[left] + arr[right];

      if (currentSum === targetSum) {
        triplets.push([arr[i], arr[left], arr[right]]);
        left++;
        right--;
      } else if (currentSum < targetSum) {
        left++;
      } else if (currentSum > targetSum) {
        right--;
      }
    }
  }

  return triplets;
};
