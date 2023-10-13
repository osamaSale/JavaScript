// Depth-First Search (DFS)

/* 
Depth-First Search (DFS)
A traversal algorithm that explores as far as possible along each branch
before backtracking.
*/


const graph = {
    A: ['B', 'D'],
    B: ['A', 'C', 'E'],
    C: ['B'],
    D: ['A', 'E'],
    E: ['B', 'D', 'F'],
    F: ['E'],
};

// Implementation of BFS using a queue to traverse the graph:

function bfs(graph, start) {
    const queue = [start];
    const visited = new Set();
    const result = [];

    while (queue.length) {
        const vertex = queue.shift();

        if (!visited.has(vertex)) {
            visited.add(vertex);
            result.push(vertex);

            for (const neighbor of graph[vertex]) {
                queue.push(neighbor);
            }
        }
    }

    return result;
}

// console.log(bfs(graph, 'A')); // ['A', 'B', 'D', 'C', 'E', 'F']


// Implementation of DFS using a stack for the given graph:

function dfs(graph, start) {
    const stack = [start];
    const visited = new Set();
    const result = [];

    while (stack.length) {
        const vertex = stack.pop();

        if (!visited.has(vertex)) {
            visited.add(vertex);
            result.push(vertex);

            for (const neighbor of graph[vertex]) {
                stack.push(neighbor);
            }
        }
    }

    return result;
}

// console.log(dfs(graph, 'A')); // ['A', 'D', 'E', 'F', 'B', 'C']


// Implementation of BFS using a queue to traverse the graph:


function createNode(value, left = null, right = null) {
    return { value, left, right };
  }
  
  const tree = createNode(1,
    createNode(2,
      createNode(4),
      createNode(5)
    ),
    createNode(3,
      createNode(6),
      createNode(7)
    )
  );

function bfs1(node) {
    if (!node) {
      return [];
    }
  
    const queue = [node];
    const result = [];
  
    while (queue.length) {
      const current = queue.shift();
      result.push(current.value);
  
      if (current.left) {
        queue.push(current.left);
      }
  
      if (current.right) {
        queue.push(current.right);
      }
    }
  
    return result;
  }
  
  // console.log(bfs1(tree)); // [1, 2, 3, 4, 5, 6, 7]
  