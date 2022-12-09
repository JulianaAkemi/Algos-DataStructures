//Always sorted in ASC order
// input: 1 -> 1 -> 3 -> 4  -> 4 -> 4 -> 5 -> 6 -> 6
// output: 1 -> 3 -> 4 -> 5 -> 6
// in place modification

const removeDuplicates = (node) => {
  const head = node;
  let current = node,
    next = node.next;

  while (current) {
    if (current.val === next.val) {
      current.next = next.next;
      next.next = null;
    }

    current = current.next;
  }

  return head;
};

//Time: O(n)
//Space: O(1)
