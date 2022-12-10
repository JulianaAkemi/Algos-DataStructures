
//IN ORDER
const iterativeDFSInOrder = (node) => {
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

//POST ORDER
const iterativeDFSPostOrder = (node) => {
	const stack = [];
	const result = [];

	while (node || stack.length) {
		if (node) {
			stack.push(node);
			node = node.left;
		} else {
			node = stack.pop();
			node = node.right;
			result.push(node.val);
		}
	}

	return result;
}

//PRE ORDER
const iterativeDFSPreOrder = (node) => {
	const stack = [];
	const result = [];

	while (node || stack.length) {
		if (node) {
			result.push(node.val);
			stack.push(node);
			node = node.left;
		} else {
			node = stack.pop();
			node = node.right;
		}
	}

	return result;
}