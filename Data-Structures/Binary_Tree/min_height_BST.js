// given a sorted array of DISTINCT integers
// build a binary search tree with the smallest height possible

//you are given an insert method Time O(n log n)
// [1, 2, 5, 7, 10, 13, 14, 15, 22]

//      10
// 		 /   \
//  	2	    14
//   / \    / \
//  1   5  13  15
//       \       \
// 	  	  7      22

//Time: O(n log n)
//Space: O(n)
const minHeightBST = (arr, bst, start, end) => {
	if (end < start) return null;

	let middle = Math.floor((start + end )/ 2),
		value = arr[middle];

	if(bst === null) {
		bst = new BST(value)
	} else {
		bst.insert(value)
	}

	minHeightBST(arr, bst, start, middle - 1);
	minHeightBST(arr, bst, middle + 1, end);

	return bst;
}

const buildBST = (arr) => {
	return minHeightBST(arr, null, 0, arr.length - 1);
}


//Time: O(n)
//Space: O(n)
const minHeightBST2 = (arr, start, end) => {
	if (end < start) return null;

	let middle = Math.floor((start + end )/ 2);
	const newBST = new BST(arr[middle])

	newBST.left = minHeightBST(arr, start, middle - 1);
	newBST.right = minHeightBST(arr, middle + 1, end);

	return newBST;
}

const buildBST2 = (arr) => {
	return minHeightBST(arr, 0, arr.length - 1);
}