class Node {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let current = this.root;

    while (true) {
      if (value === current.val) return undefined;

      if (value < current.val) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }

        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }

        current = current.right;
      }
    }
  }

  find(value) { //Breadth First
    if (this.root === null) return false;
    let current = this.root,
      found = false;

    while (current && !found) {
      if (value < current.val) {
        current = current.left;
      } else if (value > current.val) {
        current = current.right;
      } else {
        found = true;
      }
    }

    if (!found) return false;
    return current;
  }

  find2(node, value) { //Breadth First
    if (node === null) return false;
    let queue = [node];

    while (queue.length) {
      const current = queue.shift();

			if(current.val === value) return true;
			if(current.left) queue.push(current.left);
			if(current.right) queue.push(current.right);
    }

		return false;
  }

  findRecursively(node, value) { //Breadth First
    if (node === null) return false;
    if (node.val === target) return true;

		return findRecursively(node.left, value) || findRecursively(node.right, value);
  }

  //Since Breadth First uses a queue, it can't be implemented
  //recursively since under the hood it would be using a stack call
  BreadthFirstSearch() {
    let node = this.root;
    if (node === null) return [];

    const data = [],
      queue = [];

    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return data;
  }

  //Depth First Search uses stack
  DFSPreOrder() {
    const data = [];

    const traverse = (node) => {
      if (node === null) return [];

      data.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };

    traverse(this.root);
    return data;
  }

  DFSPostOrder() {
    const data = [];

    const traverse = (node) => {
      if (node === null) return [];

      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.val);
    };

    traverse(this.root);
    return data;
  }

  DFSPostOrder2(node) {
    //under the hood call stack
    if (node === null) return [];

    const leftValues = this.DFSPostOrder2(node.left);
    const rightValues = this.DFSPostOrder2(node.right);
    return [node.val, ...leftValues, ...rightValues];
  }

  DFSInOrder() {
    const data = [];

    const traverse = (node) => {
      if (node === null) return [];

      if (node.left) traverse(node.left);
      data.push(node.val);
      if (node.right) traverse(node.right);
    };

    traverse(this.root);
    return data;
  }

	iterativeDFSInOrder(node) {
		const stack = [];
		const result = [];

		while (node || stack.length) {
			if (node) {
				stack.push(node);
				node = node.left;
			} else {
				node = stack.pop();
				result.push(node.val);
				node = node.right;
			}
		}

		return result;
	}

  invert(node) {
    let left = node.left;
    node.left = node.right;
    node.right = left;

    this.invert(node.left);
    this.invert(node.right);
  }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
tree.DFSPreOrder();
tree.DFSPostOrder();
tree.DFSInOrder();
