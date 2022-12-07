// given a number n, find the closest value contained in a binary tree

//RECURSIVE
// Average: time O(log n) | space O(log n)
// Worst: time O(n) | space O(n) = ONE BRANCH TREE
const findClosestValueRecursively = (node, n) => {
  const checkClosest = (currentNode, target, closest) => {
    if (node === null) return closest;

    if (Math.abs(target - closest) > Math.abs(target - currentNode.value))
      closest = currentNode.value;

    if (target < currentNode.value) {
      return checkClosest(currentNode.left, target, closest);
    } else if (target > currentNode.value) {
      return checkClosest(currentNode.rigth, target, closest);
    } else {
      return closest;
    }
  };

  return checkClosest(node, n, Infinity);
};

//ITERATIVE
// Average: time O(log n) | space O(1)
// Worst: time O(n) | space O(1) = ONE BRANCH TREE
const findClosestIteratively = (node, n) => {
  let currentNode = node,
    closest = Infinity;

  while (currentNode) {
    if (Math.abs(n - closest) > Math.abs(n - currentNode.value))
      closest = currentNode.value;

    if (n < currentNode.value) {
      currentNode = currentNode.left;
    } else if (n > currentNode.value) {
      currentNode = currentNode.rigth;
    } else {
      break;
    }
  }

  return closest;
};
