// [5, 1, 22, 25, 6, -1, 8, 10]
// [1, 6, -1, 10]

// Time: O(n)
// Space: O(1)

const isValidSubsequence = (arr, sequence) => {
  let arrIndex = 0,
    sequenceIndex = 0;

  while (arrIndex < arr.length && sequenceIndex < sequence.length) {
    arr[arrIndex] === sequence[sequenceIndex] ? sequenceIndex++ : arrIndex++;
  }

  return sequenceIndex === sequence.length;
};
