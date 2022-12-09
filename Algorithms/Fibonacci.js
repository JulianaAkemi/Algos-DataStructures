// Fibonacci uuugh  ¬¬

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
// fib(n) = fib(n-1) + fib(n-2) for n>2

//Time: O(n^2)
//Space: O(n)
const recursiveFib = (n) => {
  if (n === 2) {
    return 1;
  } else if (n === 1) {
    return 0;
  } else {
    return recursiveFib(n - 1) + recursiveFib(n - 2);
  }
};

//Time: O(n)
//Space: O(n)
const memoizedFib = (n, memoized = { 1: 0, 2: 1 }) => {
  if (n in memoized) {
    return memoized[n];
  } else {
    memoized[n] = memoizedFib(n - 1, memoized) + memoizedFib(n - 2, memoized);
    return memoized[n];
  }
};

//ITERATIVE
//Time: O(n)
//Space: O(1)
const iterativeFib = (n) => {
  let lastTwo = [0, 1],
    counter = 3;

  while (counter <= n) {
    let nextFib = lastTwo[0] + lastTwo[1];
    lastTwo[0] = lastTwo[1];
    lastTwo[1] = nextFib;
    counter++;
  }

  return n > 1 ? lastTwo[1] : lastTwo[0];
};
