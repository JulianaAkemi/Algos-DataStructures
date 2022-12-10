class Node {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

//every node to the left is strictly smaller,
// to the right equals or greater than it's parent
class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	insert(val) {
		const newNode = new Node(val);

		if (this.root === null) {
      this.root = newNode;
      return this;
    }

		let currentNode = this.root;

		while(currentNode){
			if (newNode.val < currentNode.val) {
				if (currentNode.left === null) {
					currentNode.left = newNode;
					return this;
				}

				currentNode = currentNode.left
			} else {
				if (currentNode.right === null) {
					currentNode.right = newNode;
					return this;
				}

				currentNode = currentNode.right;
			}
		}
	}

	search(val) {
		if (this.root === null) return false

		let currentNode = this.root;

		while(currentNode){
			if (val < currentNode.val) {
				currentNode = currentNode.left
			} else if (val > currentNode.val) {
				currentNode = currentNode.right;
			} else {
				return true
			}
		}

		return false;
	}

	delete(node = this.root, val, parentNode = null) {
		while(currentNode !== null) {
			if(val < currentNode.val) {
				parentNode = currentNode;
				currentNode = currentNode.left;
			} else if(val > currentNode.val) {
				parentNode = currentNode;
				currentNode = currentNode.right;
			} else {
				if (currentNode.left !== null && currentNode.right !== null) {
					currentNode.val = Math.min(
						currentNode.right.left,
						currentNode.right.right
					);
					this.delete(currentNode.right, currentNode.val, currentNode);
				} else if (parentNode === null){
					if (currentNode.left !== null) {
						currentNode.val = currentNode.left.val;
						currentNode.right = currentNode.left.right;
						currentNode.left = currentNode.left.left;
					} else if (currentNode.right !== null) {
						currentNode.val = currentNode.right.val;
						currentNode.left = currentNode.right.left;
						currentNode.right = currentNode.right.right;
					} else {
						currentNode.val = null;
					}
				}


			}
		}
	}

	remove(value) {
    if (!this.root) return false;

    let currentNode = this.root,
     parentNode = null;

    while(currentNode){
      if(value < currentNode.value){
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if(value > currentNode.value){
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //We have a match, get to work!

        //Option 1: No right child:
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {

            //if parent > current value, make current left child a child of parent
            if(currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;

            //if parent < current value, make left child a right child of parent
            } else if(currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }

        //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;

          if(parentNode === null) {
            this.root = currentNode.right;
          } else {

            //if parent > current, make right child of the left the parent
            if(currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;

            //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }

        //Option 3: Right child that has a left child
        } else {
          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;

          while(leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if(parentNode === null) {
            this.root = leftmost;
          } else {
            if(currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if(currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }

      return true;
      }
    }
  }
}
