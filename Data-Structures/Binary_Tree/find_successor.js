class BinaryTree {
  constructor(val, left = null, right = null, parent = null) {
    this.val = val;
    this.left = left;
    this.right = right;
    this.parent = parent;
  }
}

//find in order traversal sucessor of a node

//Time: O(n)
//Space: O(n)
const getInOrderTraversal = (node, order = []) => {
  if (node === null) return order;

  getInOrderTraversal(node.left, order);
  order.push(node);
  getInOrderTraversal(node.right, order);

  return order;
};

const findSuccessor = (tree) => {
  let order = getInOrderTraversal(tree);

  for (let i = 0; i < order.length; i++) {
    let currentNode = order[i];

    if (!currentNode) continue;

    if (i === order.length - 1) return null; //last node of tree

    return order[i + 1];
  }
};

//Time: O(height)
//Space: O(1)
const getLeftmostChild = (currentNode) => {
  while (currentNode.left !== null) {
    currentNode = currentNode.left;
  }

  return currentNode;
};

const getRightmostParent = (currentNode) => {
  while (
    currentNode.parent !== null &&
    currentNode.parent.right !== currentNode
  ) {
    currentNode = currentNode.parent;
  }

  return currentNode.parent;
};

const findSuccessor2 = (node) => {
  if (node.right !== null) return getLeftmostChild(node);

  return getRightmostParent(node);
};
