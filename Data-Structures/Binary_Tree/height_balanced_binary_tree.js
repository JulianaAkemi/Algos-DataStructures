//given a binary tree root node, check if the tree is height balanced
//height difference between left and right subtrees can be at most 1

//Time: O(n)
//Space: O(height)
class TreeInfo {
  constructor(isBalanced, height) {
    this.isBalanced = isBalanced;
    this.height = height;
  }
}

const getTreeInfo = (node) => {
  if (node === null) return new TreeInfo(true, -1);

  let leftSubtreeInfo = getTreeInfo(node.left),
    rightSubtreeInfo = getTreeInfo(node.right),
    isBalanced =
      leftSubtreeInfo.isBalanced &&
      rightSubtreeInfo.isBalanced &&
      Math.abs(leftSubtreeInfo.height - rightSubtreeInfo.height) <= 1,
    height = Math.max(leftSubtreeInfo.height, rightSubtreeInfo.height) + 1;

  return new TreeInfo(isBalanced, height);
};

const isTreeBalanced = (tree) => {
  let treeInfo = getTreeInfo(tree);

  return treeInfo.isBalanced;
};
