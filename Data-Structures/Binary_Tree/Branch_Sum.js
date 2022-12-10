//   			 1
//   		/	   \
//   	 2      3
//   	/ \    / \
//   4   5   6  7
//  / \   \
//  8  9   10

// [15, 16, 18, 10, 11]

// depth first
//Time: O(n)
//Space: O(n)
const sumBranches = (root) => {
  const sums = [];

  const calcSums = (node, runningSum, sums) => {
    if (node === null) return;

    let newSum = runningSum + node.val;

    if (node.left === null && node.right === null) {
      sums.push(newSum);
      return;
    }

    calcSums(node.left, newSum, sums);
    calcSums(node.right, newSum, sums);
  };

  calcSums(root, 0, sums);
  return sums;
};
