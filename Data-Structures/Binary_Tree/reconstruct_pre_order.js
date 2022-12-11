// OF A BINARY SEARCH TREE, else it is unlikely to reconstruct exactly
// does the input have unique values?

class BST {
  constructor(val = null, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

//Time: O(n^2)
//Space: O(height)
const reconstructRecursively = (arr) => {
  if (arr.length === 0) return null;

  let currentVal = arr[0],
    right = arr.length - 1;

  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];
    if (value > currentVal) {
      right = i;
      break;
    }
  }

  let leftSubtree = reconstructRecursively(arr.slice(1, right));
  rightSubtree = reconstructRecursively(arr.slice(right));

  return new BST(currentVal, leftSubtree, rightSubtree);
};

//Time: O(n)
//Space: O(height)
