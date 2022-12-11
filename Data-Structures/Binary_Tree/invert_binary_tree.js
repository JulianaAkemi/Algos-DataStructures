// Breadth First
//Time: O(n)
//Space: O(n)
const swapLeftAndRight = (node) => {
	let left = node.left;
	node.left = node.right;
	node.right = left;
}

const invertInteratively = (tree) => {
	const queue = [tree];

	while(queue.length){
		let current = queue.shift();

		if(current === null) continue

		swapLeftAndRight(current)
		queue.push(current.left)
		queue.push(current.right)
	}
}

//Recursive
//Time: O(n)
//Space: O(depth)
const invertRecursively = (node) => {
	if (node === null) return;

	swapLeftAndRight(node);

	invertRecursively(node.left);
	invertRecursively(node.right);
}