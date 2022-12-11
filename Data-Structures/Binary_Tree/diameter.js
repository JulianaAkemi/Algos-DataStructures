//diameter = length of longest path, not necesseraly from the root,
// where it's nodes are not connected to more than 2 other nodes

// 			  	1
// 		  	/   \
// 		   3     2
// 	  	/ \
// 	   7   4
//   	/		  \
//   8       5
//  /         \
// 9           6

// Longest path = 6
// 9 -> 8 -> 7 -> 3 -> 4 -> 5 -> 6

//Time: O(n)
//Space: O(height)
class TreeInfo {
	constructor(diameter, height) {
		this.diameter = diameter;
		this.height = height;
	}
}

const getTreeinfo = (tree) => {
	if (tree === null) return new TreeInfo(0, 0);

	let leftTreeInfo = getTreeinfo(tree.left),
		rightTreeInfo = getTreeinfo(tree.right),
		longestpathThroughRoot = leftTreeInfo.height + rightTreeInfo.height,
		maxDiameterSoFar = Math.max(leftTreeInfo.diameter, rightTreeInfo.diameter),
		currentDiameter = Math.max(longestpathThroughRoot, maxDiameterSoFar),
		currentHeight = 1 + Math.max(leftTreeInfo.height, rightTreeInfo.height);

	returnTreeInfo(currentDiameter, currentHeight)
}

const getBinaryTreeDiameter = (tree) => {
	return getTreeInfo(tree).diameter;
}