//input: [5, 1, 4, 2]
//output: [8, 40, 10, 20]
//8 = 1*4*2
//40 = 5*4*2
//10 = 5*1*2
//20 = 5*1*4

//Time: O(n)
//Space: O(n)
const getProducts = (arr) => {
  const products = [];
  let totalProduct = 1;

  arr.forEach((num) => (totalProduct = totalProduct * num));

  arr.forEach((num) => products.push(totalProduct / num));

  return products;
};
