---
id: shortest-path
title: Shortest path algorithms
sidebar_label: Shortest path
slug: /algorithms/shortest-path
---

When planning a road trip, we are trying to minimize our costs in many different areas - gas, time, overnight stays, traffic costs, etc. Calculating these costs can take a lot of effort and time, but what if there was a more elegant way that could solve the problem for you? 

Pathfinding algorithms are one of the classical graph problems and have been researched since the 19th century. The Shortest Path algorithm is an algorithm that calculates a path between two nodes in a weighted graph such as the sum of the values on the edges that form a path is minimized. 

## How does it work?

Starting from the source node, the algorithm looks up the weights on the (out-)going (in weighted graphs) edges. It chooses the edge which, summed to the previous total sum, gives the lowest result. The algorithm runs through every node up until the destination point. Results are a path and the total sum of the shortest path.


## Practical Applications

Most commonly used to find directions and paths between physical locations.
* In networking or telecommunications, where they seek the shortest path with minimum delay.
* In social networks, trying to find the shortest path between users and celebrities.
* Shortest Path Algorithms in NetworkX

| Dijkstra’s algorithm     | Finds the shortest path from a source node to the target node if the weights on the edges are non-negative values.           | NetworkX Reference Guide |
|--------------------------|------------------------------------------------------------------------------------------------------------------------------|--------------------------|
| Bellman-Ford algorithm   | Find the shortest path from a source node to the target node when edge weights may be negative.                              | NetworkX Reference Guide |
| A* search algorithm      | Finds the shortest path between the pair of nodes using heuristic methods.                                                   | NetworkX Reference Guide |
| Floyd-Warshall algorithm | Finds all shortest paths between every pair of nodes in a graph.                                                             | NetworkX Reference Guide |
| Johnson’s algorithm      | Finds all shortest paths between every pair of nodes in a directed graph combining Dijkstra’s and Bellman-Ford’s algorithms. | NetworkX Reference Guide |

In the following chapters, we will cover these algorithms:
* Dijkstra’s algorithm,
* A* search algorithm,
* Floyd-Warshall algorithm.