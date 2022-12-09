//[5, 2, [7, -1], 3, [6, [-13, 8], 4]]
//

//Time: O(n) where n is number of elements of arrays and subelements of the subarrays
//Space: O(d) where d is depth of subarrays
const recursiveProductSum = (arr, multiplier = 1) => {
  let sum = 0;

  for (element of arr) {
    if (typeof element === "object") {
      sum += recursiveProductSum(element, multiplier++);
    } else {
      sum += element;
    }
  }

  return sum * multiplier;
};
