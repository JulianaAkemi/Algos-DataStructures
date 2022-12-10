//given a 2D integer matrix, transpose it by flipping it's
//main diagonal, switching the matrix's row and column indices

//Time: O(n^2)
//Space: O(n)
const transpose = (matrix) => {
  const transposedMatrix = new Array(matrix[0].length)
    .fill()
    .map(() => new Array(matrix.length));

  for (let row = 0; row < matrix.length; row++) {
    for (let column = 0; column < matrix[0].length; column++) {
      transposedMatrix[column][row] = matrix[row][column];
    }
  }

  return transposedMatrix;
};
