//Given a not necessarily sorted array
// [ 141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]
// should return sorted array of the three largest numbers
//[18, 141, 541]

// Time: O(n)
// Space: O(1)
const threeLargest = (array) => {
  let finalThree = Array(3);

  for (let num of arr) {
    if (!finalThree[2] || num > finalThree[2]) {
      finalThree[2] = num;
    } else if (!finalThree[1] || num > finalThree[1]) {
      finalThree[1] = num;
    } else if (!finalThree[0] || num > finalThree[0]) {
      finalThree[0] = num;
    }
  }

  return finalThree;
};
