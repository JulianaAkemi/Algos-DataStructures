//given a matrix of zeroes(water) and ones(land)
//remove the lands that are not touching horizontally or vertically
//the border of the matrix (islands)

//Trivial
//Time: O(width * height)
//Space: O(width * height)
const getNeighbors = (matrix, row, column) => {
  const neighbors = [];
  let numberOfRows = matrix.length,
    numberOfColumns = matrix[row].length;

  if (row - 1 > -0) neighbors.push([row - 1, column]); //UP

  if (row + 1 < numberOfRows) neighbors.push([row + 1, column]); //DOWN

  if (column - 1 > -0) neighbors.push([row, column - 1]); //UP

  if (column + 1 < numberOfColumns) neighbors.push([row, column + 1]); //DOWN

  return neighbors;
};

const findLandConnectedToBorder = (
  matrix,
  startRow,
  startColumn,
  connectedToBorder
) => {
  const stack = [[startRow, startColumn]];

  while (stack.length) {
    let currentPosition = stack.pop(),
      [currentRow, currentColumn] = currentPosition,
      alreadyVisited = connectedToBorder[currentRow][currentColumn];

    if (alreadyVisited) continue;

    connectedToBorder[currentRow][currentColumn] = true;

    const neighbors = getNeighbors(matrix, currentRow, currentColumn);

    for (let neighbor of neighbors) {
      let [row, column] = neighbor;

      if (matrix[row][column] !== 1) continue;

      stack.push(neighbor);
    }
  }
};

const removeIslands = (matrix) => {
  const connectedToBorder = Array(matrix.length).fill(
    Array(matrix[0].length).fill(false)
  );

  for (let row of matrix) {
    for (let column of matrix[row]) {
      let rowIsBorder = row === 0 || row === matrix.length - 1,
        columnIsBorder = column === 0 || column === matrix[0] - 1,
        isBorder = rowIsBorder || columnIsBorder;

      if (!isBorder) continue;

      if (matrix[row][column] !== 1) continue;

      findLandConnectedToBorder(matrix, row, column, connectedToBorder);
    }
  }

  for (let i = 1; i < matrix.length - 1; i++) {
    for (let j = 1; j < matrix[row].length - 1; j++) {
      if (connectedToBorder[i][j]) continue;

      matrix[i][j] = 0;
    }
  }

  return matrix;
};

/////////////////////////////////////////////

//Without auxiliary data structure, in place modification

const modifyLandConnectedToBorder = (matrix, startRow, startColumn) => {
  const stack = [[startRow, startColumn]];

  while (stack.length) {
    let currentPosition = stack.pop(),
      [currentRow, currentColumn] = currentPosition;

    matrix[currentRow][currentColumn] = 2;

    const neighbors = getNeighbors(matrix, currentRow, currentColumn);

    for (let neighbor of neighbors) {
      let [row, column] = neighbor;

      if (matrix[row][column] !== 1) continue;

      stack.push(neighbor);
    }
  }
};

const removeIslands2 = (matrix) => {
  for (let row of matrix) {
    for (let column of matrix[row]) {
      let rowIsBorder = row === 0 || row === matrix.length - 1,
        columnIsBorder = column === 0 || column === matrix[0] - 1,
        isBorder = rowIsBorder || columnIsBorder;

      if (!isBorder) continue;

      if (matrix[row][column] !== 1) continue;

      modifyLandConnectedToBorder(matrix, row, column);
    }
  }

  for (let row of matrix) {
    for (let column of matrix[row]) {
      let cell = matrix[row][column];

      if (cell === 1) matrix[row][column] = 0;

      if (cell === 2) matrix[row][column] = 1;
    }
  }

  return matrix;
};
