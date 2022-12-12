//return [A, B, C, D, E, F, G, H, I, J, K]
/*
              A
						/ | \
					B   C   D
				 / \     / \
				E   F   G   H
				   / \   \
					 I   J   K
*/

class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
  }

  breathFirstSearch(node = this) {
    //...
    //IMPLEMENT YOUR CODE
    //Time: O(vertices + edges)
    //Space: O(vertices)
    const queue = [node],
      results = [];

    while (queue.length > 0) {
      let currenNode = queue.shift();
      results.push(currenNode.val);

      for (let child of currenNode.children) {
        results.push(child);
      }
    }

    return result;
  }
}
