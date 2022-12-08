//Given a ACYCLIC graph, check if it has a path from
// a source to a destination vertece/node

//n = # nodes
//e = # edges
//Time: O(e) -> worst case O(n^2)
//Space: O(n)
const graph = {
  f: [g, h],
  g: [h],
  h: [],
  i: [g, k],
  j: [i],
  k: [],
};

//Depth first
const hasPath = (graph, src, dst) => {
  if (src === dst) return true;

  for (let neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst) === true) return true;
  }
};

//Breadth first
const hasPath2 = (graph, src, dst) => {
  const queue = [src];

  while (queue.length > 0) {
    const current = queue.shift();

    if (current === dst) return true;

    for (let neighbor of graph[current]) queue.push(neighbor);
  }

  return false;
};
