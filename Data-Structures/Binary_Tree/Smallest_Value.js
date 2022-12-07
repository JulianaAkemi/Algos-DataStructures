// 			5
// 		/	  \
// 	 11    3
// 	/  \    \
// 4    15    12

// null node = 0

// Time Complexity: O(n)
// Space Complexity: O(n) implicit call stack on recursion

// ITERATIVE Depth Fisrt
const findSmallestValue = (node) => {
  // assume input node is not empty
  const stack = [node];
  let smallest = Infinity;

  while (stack.length) {
    let current = stack.pop();

    if (current.val < smallest) smallest = current.val;

    if (current.left !== null) stack.push(current.left);
    if (current.right !== null) stack.push(current.right);
  }

  return smallest;
};

// ITERATIVE Breadth Fisrt
const findSmallestValue2 = (node) => {
  // assume input node is not empty
  const queue = [node];
  let smallest = Infinity;

  while (queue.length) {
    let current = queue.shift(); //makes it O(n^2)

    if (current.val < smallest) smallest = current.val;

    if (current.left !== null) queue.push(current.left);
    if (current.right !== null) queue.push(current.right);
  }

  return smallest;
};

// RECURSIVE Depth Fisrt
const findSmallestValueRecursive = (node) => {
  if (node === null) return Infinity;

  const leftSmallest = findSmallestValueRecursive(node.left);
  const rightSmallest = findSmallestValueRecursive(node.right);

  return Math.min(node.val, leftSmallest, rightSmallest);
};
