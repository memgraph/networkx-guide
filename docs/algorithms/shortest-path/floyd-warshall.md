---
id: floyd-warshall
title: Floyd-Warshall algorithm
sidebar_label: Floyd-Warshall
---

Floyd-Warshall algorithm is an algorithm for finding the shortest path between all the pairs of vertices in a weighted graph. The result of the algorithm is a list of lengths of shortest paths between all pairs of vertices. 

The algorithm was first designed as an example for dynamic programming by Robert Floyd in 1962. The same year, Stephen Warshall published essentially the same algorithm, but as a graph example. As the algorithms were essentially the same, the algorithm got named after both authors.


## How does it work?

Floyd-Warshall algorithm creates a series of matrices with dimension n x n, where n is the number of nodes in the graph. Elements of the matrices are filled with distances from node i to node j. If there is no path between the two nodes, the element is put as infinity. 

Each next matrix takes into account the node that is intermediate between the source node and the target node. Element of the matrix is filled if the sum of distance from source node to intermediate node and distance from intermediate node to target node is lower than the current distance. The algorithm is repeated as many times as there’s nodes in the graph.

The resulting matrix contains the length of the shortest path between each pair of nodes. 

## The difference from other shortest path algorithms

Floyd-Warshall algorithm can find lengths of the shortest paths between all pairs of vertices in a graph. The algorithm works with both directed and undirected graphs. It accepts both positive and negative values as weights. 

Floyd-Warshall algorithm is used in solving many different problems such as finding the shortest path in a directed graph, finding the transitive closure of directed graphs, finding the inversion of real matrices, testing whether an undirected graph is a bipartite and fast computation of pathfinder networks. 

## Pseudocode

```
dist = |V| x |V|
FOR EACH edge (u,v)
    dist[u][v] = weight(u,v)
ENDFOR
FOR EACH vertex v
    dist[u][v] = 0
ENDFOR

FOR k = 1 to |V|
    FOR i = 1 to |V|
        FOR j from 1 to |V|
            IF dist[i][j] > dist[i][k] + dist[k][j] THEN
                Dist[i][j] = dist[i][k] + dist[k][j]
            ENDIF
        ENDFOR
    ENDFOR
ENDFOR
```

## Usage in NetworkX

`floyd_warshall(G, weight='weight')`

### Method input

The first input parameter of the method, G, is a NetworkX graph. 
The fifth parameter, weight, represents the edge attribute that should be used as the edge weight. If it’s not specified, the default value is ‘weight’. 

### Method output

The output of the method is a dictionary keyed by source and target, of shortest paths distances between nodes..

### Example

In Python’s library, NetworkX implements the Floyd-Warshall algorithm as part of the shortest path algorithms. Insert the graph from Figure 1 in NetworkX (see Appendix A) before you start the example program.

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
nx.draw(G, pos, with_labels = True)
nx.draw_networkx_edge_labels(G, pos,edge_labels=edge_labels)

fw = nx.floyd_warshall(G, weight='weight')

results = {a:dict(b) for a,b in fw.items()}  
pp.pprint(results)
```

The output is:

```
{1: {1: 0, 2: 3, 3: 2, 4: 8, 5: 10, 6: 15},
 2: {1: 3, 2: 0, 3: 1, 4: 5, 5: 7, 6: 12},
 3: {1: 2, 2: 1, 3: 0, 4: 6, 5: 8, 6: 13},
 4: {1: 8, 2: 5, 3: 6, 4: 0, 5: 2, 6: 7},
 5: {1: 10, 2: 7, 3: 8, 4: 2, 5: 0, 6: 5},
 6: {1: 15, 2: 12, 3: 13, 4: 7, 5: 5, 6: 0}}
```


**Not fast enough?** Find 100x faster algorithms [**here**](https://memgraph.com/memgraph-for-networkx?utm_source=networkx-guide&utm_medium=referral&utm_campaign=networkx_ppp&utm_term=algorithms%2Bfloydwarshall&utm_content=findfasteralgorithms).
