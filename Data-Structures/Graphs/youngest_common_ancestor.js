//find youngest common ancestor of 2 given verteces
//vertices have a .ancestor property

//Time: O(depth)
//Space: O(1)
const getToungestCommonAncestor = (topAncestor, descendantOne, descendantTwo) => {
	let depthOne = getDescendantDepth(descendantOne, topAncestor),
		depthTwo = getDescendantDepth(descendantTwo, topAncestor);

	if(depthOne > depthTwo) {
		return backtrackAncestor(descendantTwo, descendantOne, depthOne - depthTwo)
	} else {
		return backtrackAncestor(descendantOne, descendantTwo, depthTwo - depthOne)
	}
}

const getDescendantDepth = (descendant, topAncestor) => {
	let depth = 0;

	while(descendant !== topAncestor) {
		depth++;
		descendant = descendant.ancestor;
	}

	return depth;
}

const backtrackAncestor = (lowerDescendant, higherDescendant, difference) => {
	while(difference > 0){
		lowerDescendant = lowerDescendant.ancestor;
		difference--;
	}

	while(lowerDescendant !== higherDescendant) {
		lowerDescendant = lowerDescendant.ancestor;
		higherDescendant = higherDescendant.ancestor;
	}

	return lowerDescendant;
}