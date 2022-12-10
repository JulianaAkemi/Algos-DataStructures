//given a two dimensional array, traverse it in a spiral direction
//to output a flat array

//input: [
// [1,  2,  3,  4],
// [12, 13, 14, 5],
// [11, 16, 15, 6],
// [10, 9,  8,  7],
//]

//output: [1, 2, 3, ..., 14, 15, 16]

// ITERATIVE
//Time: O(n)
//Space: O(n)
const spiralTraverse = (matrix) => {
  const flatArray = [],
    matrixSize = matrix.length * matrix[0].length;
  let top = 0,
    bottom = matrix.length - 1,
    right = matrix[0].length - 1;
  left = 0;

  while (flatArray.length < matrixSize) {
    for (let i = left; i <= right && flatArray.length < matrixSize; i++) {
      flatArray.push(matrix[top][i]);
    }

    top++;

    for (let i = top; i <= bottom && flatArray.length < matrixSize; i++) {
      flatArray.push(matrix[i][right]);
    }

    right--;

    for (let i = right; i >= left && flatArray.length < matrixSize; i--) {
      flatArray.push(matrix[bottom][i]);
    }

    bottom--;

    for (let i = bottom; i >= top && flatArray.length < matrixSize; i--) {
      flatArray.push(matrix[i][left]);
    }

    left++;
  }

  return flatArray;
};

// RECURSIVE
//Time: O(n)
//Space: O(n)
const recurse = () => {
  if () return;

  recurse();
};

const spiraltraverseRecursive = (matrix) => {
  const flatArray = [];

  recurse(

  );

  return flatArray;
};
