// [1, 2, 3, 5, 6, 8, 9] => [1, 4, 9, 25, 36, 64, 81]

// ATTENTION FOR NEGATIVE NUMBERS!
//[-2, -1, 1, 3] != [4, 1, 1, 9]
// SHOULD BE [1, 1, 4, 9]

//POSITIVE NUMBERS ARRAY
// Time : O(n)
// Space: O(n)
const sortedSquaredArray = (arr) => {
  return arr.map((number) => number * number);
};

//Brute force array with negative numbers
// Time : O(n log n)
// Space: O(n)
const bruteSortedSquaredArray = (arr) => {
  const squaredArray = arr.map((number) => number * number);

  return squaredArray.sort((a, b) => a - b);
};

// Time : O(n)
// Space: O(n)
const efficientSortedSquaredArray = (arr) => {
  const length = arr.length - 1,
    squaredArray = Array(length);

  let smallerNumIdx = 0,
    largerNumIdx = length;

  for (let i = length; i > 0; i--) {
    let smallerNumber = arr[smallerNumIdx],
      largerNumber = arr[largerNumIdx];

    if (Math.abs(smallerNumber) > Math.abs(largerNumber)) {
      squaredArray[i] = smallerNumber * smallerNumber;
      smallerNumIdx++;
    } else {
      squaredArray[i] = largerNumber * largerNumber;
      largerNumIdx--;
    }
  }

  return squaredArray;
};
