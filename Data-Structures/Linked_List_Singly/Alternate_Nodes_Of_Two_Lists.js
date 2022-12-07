// A -> B -> C -> D -> E -> F
// Q -> R -> S -> T

// A -> Q -> B -> R -> C -> S -> D -> T -> E -> F

//Assume the lists are not empty

//ITERATIVE
//n = length of list1
//m = length of list2
//Time: O(min(n, m))
//Space: O(1)
const zippListsIterative = (node1, node2) => {
  let current1 = node1.next,
    current2 = node2,
    zipped = node1,
    count = 0;

  while (current1 !== null && current2 !== null) {
    if (count % 2 === 0) {
      zipped.next = current2;
      current2 = current2.next;
    } else {
      zipped.next = current1;
      current1 = current1.next;
    }

    tail = tail.next;
    count++;
  }

  if (current1 !== null) tail.next = current1;
  if (current2 !== null) tail.next = current2;

  return zipped;
};

const zippListsRecursion = (node1, node2) => {
	if (node1 === null && node2 === null) return null;

	if(node1 === null) return node2;
	if(node2 === null) return node1;

	const next1 = node1.next,
		next2 = node2.next;
		node1.next = node2;
		node2.next = zippListsRecursion(next1, next2);

	return node1
}