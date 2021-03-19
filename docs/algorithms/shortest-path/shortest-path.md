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

![Shortest path example](/img/algorithms/shortest-path/shortest-path-example.jpg)

## Practical applications

* We use Dijkstra’s algorithm in digital mapping services in Google Maps. Each time we look for directions, we get the time to travel alongside the optimal route. Both of that information are results of Dijkstra’s algorithm. 
* While using social networks, you might see suggestions such as ‘People you might know’ or ‘People your friends follow’. If the social graph is really small, you can use Dijkstra’s algorithm to find the shortest path between users measuring connections among them.
* In telecommunications, each line has a bandwidth, a measure that tells us how much data can go through the line. We can use Dijkstra’s algorithm to determine the shortest paths between sending and receiving points in the network when transmitting data, for example sending an email to all of your friends.

## Shortest path algorithms in NetworkX

| Name                         | Description                                                                                                                           | Link                     |
|------------------------------|---------------------------------------------------------------------------------------------------------------------------------------|--------------------------|
| Dijkstra’s algorithm     | Finds the shortest path from a source node to the target node if the weights on the edges are non-negative values.           | [NetworkX Reference Guide](https://networkx.org/documentation/stable/reference/algorithms/generated/networkx.algorithms.shortest_paths.generic.shortest_path.html#networkx.algorithms.shortest_paths.generic.shortest_path) |
| Bellman-Ford algorithm   | Find the shortest path from a source node to the target node when edge weights may be negative.                              | [NetworkX Reference Guide](https://networkx.org/documentation/stable/reference/algorithms/generated/networkx.algorithms.shortest_paths.generic.shortest_path.html#networkx.algorithms.shortest_paths.generic.shortest_path) |
| A* search algorithm      | Finds the shortest path between the pair of nodes using heuristic methods.                                                   | [NetworkX Reference Guide](https://networkx.org/documentation/stable/reference/algorithms/generated/networkx.algorithms.shortest_paths.astar.astar_path.html#networkx.algorithms.shortest_paths.astar.astar_path) |
| Floyd-Warshall algorithm | Finds all shortest paths between every pair of nodes in a graph.                                                             | [NetworkX Reference Guide](https://networkx.org/documentation/stable/reference/algorithms/generated/networkx.algorithms.shortest_paths.dense.floyd_warshall.html#networkx.algorithms.shortest_paths.dense.floyd_warshall) |
| Johnson’s algorithm      | Finds all shortest paths between every pair of nodes in a directed graph combining Dijkstra’s and Bellman-Ford’s algorithms. | [NetworkX Reference Guide](https://networkx.org/documentation/stable/reference/algorithms/generated/networkx.algorithms.shortest_paths.weighted.johnson.html#networkx.algorithms.shortest_paths.weighted.johnson) |

## Where to next?

So far, we have covered these algorithms:
* [Dijkstra’s algorithm](/algorithms/shortest-path/dijkstra),
* [A* search algorithm](/algorithms/shortest-path/a-star-search),
* [Floyd-Warshall algorithm](/algorithms/shortest-path/floyd-warshall).
