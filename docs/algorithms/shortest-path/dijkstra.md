---
id: dijkstra
title: Dijkstra’s algorithm
sidebar_label: Dijkstra
---

Dijkstra’s algorithm finds the shortest path between nodes in a graph. With the algorithm, you can find the shortest path from a starting node to all the other nods in the graph. 

The algorithm was designed by Dr Edsger Dijkstra, a Dutch computer scientist, in 1956. He designed the algorithm and implemented it for a slightly simplified transportation map of 64 cities in the Netherlands. In his own words, it was a 20-minute invention that is today one of the most important and well-known algorithms in the field of graph theory.

## How does it work?

Dijkstra’s algorithm starts at the chosen node (also known as the source node). The algorithm keeps track of the currently known shortest path from each node to the source node. It updates the path values if it finds a shorter path. When the algorithm finds the shortest path between the source node and another node, that node is marked as “visited” and added to the path. This process continues until all of the nodes have been added to the path. The result of the algorithm is a path that connects the source node to all other nodes in the graph following the shortest path to each node.  

## The difference from the other shortest path algorithms
Dijkstra’s algorithm can only work on graphs that have positive values on the edges. The result of the algorithm is a structure called the minimum spanning tree - a tree-like structure that connects the source node to every other node in the graph following the shortest path to each node.

## Pseudocode

```
INIT set of nodes Q
INIT list dist
INIT list prev

FOR EACH node n in graph
    SET dist[n] TO infinity
    SET prev[n] TO unknown
    ADD n TO Q
ENDFOR
dist[source] = 0

WHILE Q is not empty:
    SET u TO node from Q with minimal dist[u]
    REMOVE u FROM Q
    FOR EACH neighbor node n of u
        IF n in Q THEN
            temp = dist[u] + length between u and n
            IF temp < dist[v] THEN
                dist[v] = temp
                prev[v] = unknown
            ENDIF
        ENDIF
    ENDFOR
ENDWHILE
```

## Usage in NetworkX

`shortest_path(G, source=None, target=None, weight=None, method='dijkstra')`

### Method input

The first input parameter of the method, G, is a NetworkX graph. 
The second parameter, source, is the source node of the shortest path. If it’s not specified, the method will compute the shortest path for all nodes. 
The third parameter, target, is the target node of the shortest path. If it’s not specified, the method will compute the shortest path to all possible nodes. 
The fourth parameter, weight, represents the edge attribute that should be used as the edge weight. If it’s not specified, the weight of all edges will be 1. 

### Method output

The output of the method is a list or dictionary with all the requested shortest paths. Paths are represented as lists of nodes. 

### Example

In Python’s library, NetworkX implements Dijkstra’s algorithm as part of the shortest path algorithms. Insert the graph from Figure 1 in NetworkX (see Appendix A) before you start the example program.

```python=
import networkx as nx

edges = [(1,2, {'weight':4}),
        (1,3,{'weight':2}),
        (2,3,{'weight':1}),
        (2,4, {'weight':5}),
        (3,4, {'weight':8}),
        (3,5, {'weight':10}),
        (4,5,{'weight':2}),
        (4,6,{'weight':8}),
        (5,6,{'weight':5})]
edge_labels = {(1,2):4, (1,3):2, (2,3):1, (2,4):5, (3,4):8, (3,5):10, (4,5):2, (4,6):8, (5,6):5}
   
        
G = nx.Graph()
for i in range(1,7):
    G.add_node(i)
G.add_edges_from(edges)

pos = nx.planar_layout(G)

# This will give us all the shortest paths from node 1 using the weights from the edges. 
p1 = nx.shortest_path(G, source=1, weight='weight')

# This will give us the shortest path from node 1 to node 6.
p1to6 = nx.shortest_path(G, source=1, target=6, weight='weight')

# This will give us the length of the shortest path from node 1 to node 6.
length = nx.shortest_path_length(G, source=1, target=6, weight='weight')

print(“All shortest paths from 1: “ + p1)
print(“Shortest path from 1 to 6: “ + p1to6)
print(“Length of the shortest path: ” + length)
```

The output is:

```
All paths from 1: {1: [1], 2: [1, 3, 2], 3: [1, 3], 4: [1, 3, 2, 4], 5: [1, 3, 2, 4, 5], 6: [1, 3, 2, 4, 5, 6]}
Shortest path from 1 to 6: [1, 3, 2, 4, 5, 6] 
Length of the shortest path: 15
```


**Not fast enough?** Find 100x faster algorithms [**here**](https://memgraph.com/memgraph-for-networkx?utm_source=networkx-guide&utm_medium=referral&utm_campaign=networkx_ppp&utm_term=algorithms%2Bdijkstra&utm_content=findfasteralgorithms).
