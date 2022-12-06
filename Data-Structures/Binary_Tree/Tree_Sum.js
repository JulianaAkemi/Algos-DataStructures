// 			3
// 		/	  \
// 	 11    4
// 	/  \    \
// 4    2    1

// null node = 0

// Time Complexity: O(n)
// Space Complexity: O(n) implicit call stack on recursion

// Depth Fisrt
const depthTreeSum = (node) => {
  if (node === null) return 0;

  return node.val + treeSum(node.left) + treeSum(node.right);
};

// Breadth Fisrt
const breadthTreeSum = (node) => {
  if (node === null) return 0;

  let totalSum = 0;
  const queue = [node];

  while (queue.length > 0) {
    const current = queue.shift();
    totalSum += current.val;

    if (current.left !== null) queue.push(current.left);
    if (current.right !== null) queue.push(current.right);
  }

  return totalSum;
};
