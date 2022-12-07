//Time: O(n)
//Space: O(1)
const getTotalSumInteratively = (head) => {
  let sum = 0,
    current = head;

  while (current !== null) {
    sum += current.val;
    current = current.next;
  }

  return sum;
};

//Time: O(n)
//Space: O(n) because of the call stack
const getTotalSumRecursively = (head) => {
  if (head === null) return 0;

  return head.val + getTotalSumRecursively(head.next);
};
