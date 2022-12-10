//given two unsorted integer arrays
//finde the the couple of one number from each array
// that have the smallest difference between them

// input ex:
// array1 = [-1, -5, -10, 20, 28, 3]
// array2 = [26, 134, 135, 15, 17]
// output: [28, 26]

// naive solution: 2 nested for loops O(n^2)

// efficient approach
//Time: O(n log n + m log m) because of sorting, if using an optimal sorting algorithm like quick or merge sort, n = arr1.length, m = arr2.length
//Space: O(1)
const smallestDifference = (arr1, arr2) => {
  arr1 = arr1.sort((a, b) => a - b);
  arr2 = arr2.sort((a, b) => a - b);

  let index1 = 0,
    index2 = 0,
    smallestDifference = Infinity,
    currentDifference = Infinity,
    smallestPair = [];

  while (index1 < arr1.length && index2 < arr2.length) {
    let firstNumber = arr1[index1],
      secondNumber = arr2[index2];

    if (firstNumber < secondNumber) {
      currentDifference = secondNumber - firstNumber;
      index1++;
    } else if (secondNumber < firstNumber) {
      currentDifference = firstNumber - secondNumber;
      index2++;
    } else {
      return [firstNumber, secondNumber];
    }

    if (smallestDifference > currentDifference) {
      smallestDifference = currentDifference;
      smallestPair = [firstNumber, secondNumber];
    }
  }

  return smallestPair;
};
