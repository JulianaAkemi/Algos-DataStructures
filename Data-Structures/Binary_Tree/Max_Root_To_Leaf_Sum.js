const maxPathSum = (node) => {
  if (node === null) return -Infinity;
  if (node.left === null && node.right === null) return node.val;

  const maxChildrenSum = Math.max(
    maxPathSum(node.left),
    maxPathSum(node.right)
  );

  return node.val + maxChildrenSum;
};
