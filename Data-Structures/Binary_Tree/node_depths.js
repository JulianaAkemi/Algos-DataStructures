//   			1  -> 0
//   		/	   \
//   	 2      3 -> 1*2
//   	/ \    / \
//   4   5   6  7 -> 2 = 2*4
//  / \
// 8   9 -> 3*2
// Add up the depths of each node
// 16

// depth first

// Recursive
//Time: O(n)
//Space: O(d) d = biggest depth of a leaf
const sumAllDepthsRecursive = (root, depthsSum = 0) => {
  if (root === null || (root.left === null && root.right === null)) return 0;

  let leftDepft = sumAllDepths(root.left, (depthsSum += 1));
  let rightDepft = sumAllDepths(root.right, (depthsSum += 1));

  return depthsSum + leftDepft + rightDepft;
};

// Iterative
//Time: O(n)
//Space: O(d) d = biggest depth of a leaf
const sumAllDepthsIterative = (root) => {
  let sum = 0;

  if (root === null || (root.left === null && root.right === null)) return sum;

  const stack = [{ node: root, depth: 0 }];

  while (stack.length) {
    let current = stack.pop(),
      [node, depth] = current;

    if (node === null) continue;

    sum += depth;
    stack.push({ node: node.left, depth: depth++ });
    stack.push({ node: node.right, depth: depth++ });
  }

  return sum;
};
