//given a adjencency list of a directed graph, return if it has a cycle
//adjencency list length = number of vertices

//Time: O(vertices + edges)
//Space: O(vertices)
const hasCycle = (edges) => {
  const numberOfNodes = edges.length,
    visited = [Array(numberOfNodes).fill(false)],
    currentlyInStack = [Array(numberOfNodes).fill(false)];

  for (node of edges) {
    if (visited[node]) continue;

    let containsCycle = isNodeInCycle(edges, node, visited, currentlyInStack);
    if (containsCycle) return true;
  }

  return false;
};

const isNodeInCycle = (edges, node, visited, currentlyInStack) => {
  visited[node] = true;
  currentlyInStack[node] = true;

  let neighbors = edges[node];

  for (let neighbor of neighbors) {
    if (!visited[neighbor]) {
      let containsCycle = isNodeInCycle(
        edges,
        neighbor,
        visited,
        currentlyInStack
      );
      if (containsCycle) return true;
    } else if (currentlyInStack[neighbor]) {
      return true;
    }
  }

  currentlyInStack[node] = false;
  return false;
};
