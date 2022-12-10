// given a unsorted array of integers and a number n
//write a function that finds all instances of n
//and move them to the end of the array in place

//input: [2, 1, 2, 2 ,2, 3, 4, 2], 2
//output: [1 ,3, 4, 2, 2, 2, 2, 2]

//sorting would be too obvious, being O(n log n)
// so there must be a better solution of O(n)

//Time: O(n)
//Space: O(1)
const swap = (arr, left, right) => {
  [arr[left], arr[right]] = [arr[right], arr[left]];
};

const moveToEnd = (arr, n) => {
  let left = 0,
    right = arr.length - 1;

  while (left < right) {
    while (left < right && right === n) {
      right--;
    }

    // if (arr[left] === n) {
    //   let temp = arr[left];
    //   //swap
    //   arr[left] = arr[right];
    //   arr[right] = temp;
    // }

    if (arr[left] === n) {
      swap(arr, left, right);
    }

    left++;
  }
};
