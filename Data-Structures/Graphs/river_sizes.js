//classic graph traversal
//matrix of zeroes and ones, of not necesseraly equal width and height
// 0 = land, 1 = part of river
// ones adjacent to each other vertically or horizontally are one river
//return array with all the sizes of rivers contained in the matrix

//Time: O(width * height)
//Space: O(width * height)
const findRiverSizes = (matrix) => {
  const visited = Array(matrix.length).fill(
      Array(matrix[0].length).fill(false)
    ),
    sizes = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (visited[i][j]) continue;

      traverseNode(i, j, matrix, visited, sizes);
    }
  }

  return sizes;
};

const traverseNode = (i, j, matrix, visited, sizes) => {
  let currentRiverSize = 0,
    nodesToExplore = [[i, j]]; //queue

  while (nodesToExplore.length > 0) {
    let currentNode = nodesToExplore.shift();
    (i = currentNode[0]), (j = currentNode[1]);

    if (visited[i][j]) continue;
    visited[i][j] = true;

    if (matrix[i][j] === 0) continue;
    currentRiverSize++;

    let unvisitedNeighbors = getUnvisitedNeighbors(i, j, matrix, visited);

    for (nighbor of unvisitedNeighbors) {
      nodesToExplore.push(nighbor);
    }
  }

  if (currentRiverSize > 0) sizes.push(currentRiverSize);
};

const getUnvisitedNeighbors = (i, j, matrix, visited) => {
  const unvisitedNeighbors = [];

  if (i > 0 && !visited[i - 1][j]) unvisitedNeighbors.push([i - 1, j]);

  if (i < matrix.length - 1 && !visited[i + 1][j])
    unvisitedNeighbors.push([i + 1, j]);

  if (j > 0 && !visited[i][j - 1]) unvisitedNeighbors.push([i, j - 1]);

  if (j < matrix.length - 1 && !visited[i][j + 1])
    unvisitedNeighbors.push([i, j + 1]);

  return unvisitedNeighbors;
};
