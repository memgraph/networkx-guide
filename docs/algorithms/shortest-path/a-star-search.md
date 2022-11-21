---
id: a-star-search
title: A* search algorithm
sidebar_label: A* search
---

A\* algorithm is a graph traversal and path search algorithm often used in many fields of computer science. Starting from the starting node, it aims to find the path to the target node having the smallest cost.

A\* search algorithm was made as a part of the Shakey project. The goal of the project was to build a mobile robot that could plan its own action. It yielded in the making of Shakey the Robot, the first general-purpose robot made in 1966. A* search algorithm was developed to help Shakey solve the pathfinding problems so it could move around.


## How does it work?

A* search algorithm combines information from Dijkstra’s algorithm and the Greedy Best-First-Search algorithm. Dijkstra’s algorithm favours vertices that are closer to the starting point, while the Greedy Best-First-Search algorithm favours vertices that are closer to the goal. 

A* search algorithm uses heuristics to determine the path it will take. The heuristic function provides an estimate of the minimum cost between the current vertex and the target vertex. The algorithm will combine the actual cost from the start vertex with the estimated cost to the target vertex. It will use the result to select the next vertex to evaluate.

## The difference from other shortest path algorithms

The difference from other shortest path algorithms
Unlike other traversal techniques, A\* search algorithm has “brains”. It is a really smart algorithm that uses heuristic methods to guide itself. A\* search algorithm is more efficient as its use of heuristics allows the algorithm to make a better choice about what path to take next. 

While Dijkstra’s algorithm will always find the shortest path between the starting vertex and every other vertex in the graph, A\* search algorithm will find the shortest path between the starting vertex and target vertex.  In a graph with a small number of nodes, Dijkstra’s algorithm will suffice. However, in a real-life situation, we are dealing with the problem of an enormous number of combinations. For that, we need to use a “guided” algorithm that can decide the optimal route quickly and accurately. A\* search algorithm only performs steps if it seems promising and reasonable, unlike other shortest path algorithms. It runs toward the goal and doesn’t consider any non-optimal steps if it doesn’t have to consider them. 

A\* search algorithm is very useful for artificially intelligent systems such as machine learning and game development where characters navigate complex terrains and obstacles to reach players.


## Pseudocode

Before starting with the pseudocode, we need to explain the node structure. Each node has three attributes f, g, and h. Those attributes are parameters of the following equation:

`f(n) = g(n) + h(n)`

Where: 
* f is cost of the transversal
* g is the actual cost of transversal from the starting node
* h is the estimate cost of transversal to the target node 
 
```
INIT LIST openList
INIT LIST closedList
startNode.f = 0
ADD startNode TO openList
WHILE openList is not empty
    currentNode = node with the least f value
    REMOVE currentNode FROM penList
    ADD currentNode TO closedList
    IF currentNode = goal THEN
        FINISHED
    ENDIF
    children = list of nodes adjacent to currentNode
 
    FOR EACH child in children
        IF child is in closedList
            CONTINUE
        ENDIF
        child.g = currentNode.g + distance between child and current
        child.h = distance from child to target
        child.f = child.g + child.h
        IF child.position is in the openList's nodes positions
            IF the child.g is higher than the openList node's g
                CONTINUE
		ENDIF
		  ENDIF
        ADD the child TO the openList
    ENDFOR
ENDWHILE
```

## Usage in NetworkX

`astar_path(G, source, target, heuristic=None, weight='weight')`

### Method input

The first input parameter of the method, G, is a NetworkX graph. 
The second parameter, source, is the source node of the shortest path.
The third parameter, target, is the target node of the shortest path.
The fourth parameter, heuristic, is a function to evaluate the estimate of the distance from the a node to the target. The function takes two node arguments and must return a number.
The fifth parameter, weight, represents the edge attribute that should be used as the edge weight. If it’s not specified, the weight of all edges will be 1. 

### Method output

The output of the method is a list of nodes.

### Example

Using A\* search algorithm in Python allows us to use custom methods and function as heuristics. In the following example, we designed the distance heuristic which calculates geometrical distances between the points. 

```python
import networkx as nx
import matplotlib.pyplot as plt

def dist(a, b):
    (x1, y1) = a
    (x2, y2) = b
    return ((x1 - x2) ** 2 + (y1 - y2) ** 2) ** 0.5

G = nx.grid_graph(dim=[3, 3])  # nodes are two-tuples (x,y)
nx.set_edge_attributes(G, {e: e[1][0] * 2 for e in G.edges()}, "cost")
path = nx.astar_path(G, (0, 0), (2, 2), heuristic=dist, weight="cost")
length = nx.astar_path_length(G, (0, 0), (2, 2), heuristic=dist, weight="cost")
print(“Path: ” + path)
print(“Path length: ” + length)

pos = nx.spring_layout(G)
nx.draw(G, pos, with_labels = True, node_color="#f86e00")
edge_labels = nx.get_edge_attributes(G, "cost")
nx.draw_networkx_edge_labels(G, pos, edge_labels=edge_labels)
plt.show()
```

The output is:

```
Path: [(0, 0), (0, 1), (0, 2), (1, 2), (2, 2)]
Path length: 6
```

![Astar matplotlib](/img/algorithms/shortest-path/astar-matplotlib.png)

The first output represents the shortest path from point (0,0) to point (2,2). The second output is the length of the shortest path.


**Not fast enough?** Find 100x faster algorithms [**here**](https://memgraph.com/memgraph-for-networkx?utm_source=networkx-guide&utm_medium=referral&utm_campaign=networkx_ppp&utm_term=algorithms%2Bastar&utm_content=findfasteralgorithms).
