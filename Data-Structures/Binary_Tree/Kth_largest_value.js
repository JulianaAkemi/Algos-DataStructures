// inputs = root, k positive integer
// k = 1, return de largest
// k = 2, return second largest
// k = 3, return the third largest
// etc

// it is a Binary Search Tree

//NAIVE
// classic in order traversal (looks at left side first)
//Time: O(n)
//Space: O(n)
const classicInOrder = (node, sortedValues) => {
  if (node === null) return;

  classicInOrder(node.left, sortedValues);
  sortedValues.push(node.val);
  classicInOrder(node.right, sortedValues);
};

const findKth = (tree, k) => {
  const sortedValues = [];

  classicInOrder(tree, sortedValues);

  return sortedValues[sortedValues.length - k];
};

// OPTIMAL
// reversed in order traversal (looks at rigth side first)
//Time: O(height + k)
//Space: O(height)
const reversedInOrder = (node, visited, k) => {
  if (node === null || visited.k >= k) return;

  reversedInOrder(node.right, visited, k);
  if (visited.k < k) {
    visited.k += 1;
    visited.nodeValue = node.val;
    reversedInOrder(node.left, visited, k);
  }
};

const findKth2 = (tree, k) => {
  const visited = { nodeValue: tree.val, k: 0 };

  reversedInOrder(tree, visited, k);

  return sortedValues[sortedValues.length - k];
};
