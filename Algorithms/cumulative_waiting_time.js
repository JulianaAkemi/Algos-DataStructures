function test(arr) {
  arr = arr.sort((a, b) => a - b);
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    let time = arr[i],
      queriesLeft = arr.length - (i + 1);
    total += time * queriesLeft;
  }

  return total;
}

console.log(test([3, 2, 1, 2, 6])); //should return 17

//Time: O(n log n)
//Space: O(1)
