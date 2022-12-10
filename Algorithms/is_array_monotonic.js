//given a sorted array of integers write a function that
//checks if it is monotonic (non-increasing or non-decreasing, which means it can have repeating integers, TWO POTENTIONAL CONDITIONS)

//input: [-1, -5, -10, -1100, -1100, -1101, -1102, -9001]
//output: true

//complicated code, not ideal
//Time:: O(n)
//Space:: O(1)
const breaksDirection = (direction, previousNumber, currentNumber) => {
  let difference = currentNumber - previousNumber;

  if (direction > 0) return difference < 0;

  return difference > 0;
};

const isMonotonic = (arr) => {
  if (arr.length <= 2) return true;

  let direction = arr[1] - arr[0];

  for (let i = 2; i < arr.length; i++) {
    if (direction === 0) {
      direction = arr[i] - arr[i - 1];
      continue;
    }

    if (breaksDirection(direction, arr[i - 1], arr[i])) return false;
  }

  return true;
};

//Time:: O(n)
//Space:: O(1)
const isMonotonic2 = (arr) => {
  let isNonDecreasing = true,
    isNonIncreasing = true;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) isNonDecreasing = false;
    if (arr[i] > arr[i - 1]) isNonIncreasing = false;
  }

  return isNonDecreasing || isNonIncreasing;
};
