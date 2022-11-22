---
id: functions
title: Functions overview
sidebar_label: Functions overview
slug: /functions
---

## Graph functions

| Function | Description |
| -------- | ----------- |
| [`degree(G, nbunch, weight)`](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.degree.html#networkx.classes.function.degree) | Returns a degree view of single node or of nbunch of nodes.   |
| [`degree_histogram(G)`](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.degree_histogram.html#networkx.classes.function.degree_histogram)              | Returns a list of the frequency of each degree value.         |
| [`density(G)`](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.density.html#networkx.classes.function.density)                        | Returns the density of a graph. |
| [`create_empty_copy(G, with_data)`](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.create_empty_copy.html#networkx.classes.function.create_empty_copy) | Returns a copy of the graph G with all of the edges removed. |
| [`is_directed(G)`](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.is_directed.html#networkx.classes.function.is_directed)                   | Return True if graph is directed. |
| [`to_directed(graph)`](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.to_directed.html#networkx.classes.function.to_directed)                | Returns a directed view of the graph graph. |
| [`to_undirected(graph)`](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.to_undirected.html#networkx.classes.function.to_undirected)             | Returns an undirected view of the graph graph. |
| [`is_empty(G)`](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.is_empty.html#networkx.classes.function.is_empty) | Returns True if G has no edges. |
| [`add_star(G_to_add_to, nodes_for_star, **attr)`](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.add_star.html#networkx.classes.function.add_star) | Add a star to Graph G_to_add_to. |
| [`add_path(G_to_add_to, nodes_for_path, **attr)`](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.add_path.html#networkx.classes.function.add_path) | Add a path to the Graph G_to_add_to. |
| [`add_cycle(G_to_add_to, nodes_for_cycle, **attr)`](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.add_cycle.html#networkx.classes.function.add_cycle) | Add a cycle to the Graph G_to_add_to. |
| [`subgraph(G, nbunch)`](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.subgraph.html#networkx.classes.function.subgraph) | Returns the subgraph induced on nodes in nbunch. |
| [`subgraph_view(G, filter_node, filter_edge)`](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.subgraph_view.html#networkx.classes.function.subgraph_view) | View of G applying a filter on nodes and edges. |
| [`induced_subgraph(G, nbunch)`](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.induced_subgraph.html#networkx.classes.function.induced_subgraph) | Returns a SubGraph view of G showing only nodes in nbunch. |
| [`restricted_view(G, nodes, edges)`](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.restricted_view.html#networkx.classes.function.restricted_view) | Returns a view of G with hidden nodes and edges. |
| [`reverse_view(G)`](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.reverse_view.html#networkx.classes.function.reverse_view) | View of G with edge directions reversed. |
| [`edge_subgraph(G, edges)`](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.edge_subgraph.html#networkx.classes.function.edge_subgraph) | Returns a view of the subgraph induced by the specified edges. |

## Node functions

| Function | Description |
| -------- | ----------- |
| [`nodes(G)`](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.nodes.html#networkx.classes.function.nodes) | Returns an iterator over the graph nodes. |
| [`number_of_nodes(G)`](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.number_of_nodes.html#networkx.classes.function.number_of_nodes) | Returns the number of nodes in the graph. |
| [`neighbors(G, n)`](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.neighbors.html#networkx.classes.function.neighbors) | Returns a list of nodes connected to node n. |
| [`all_neighbors(graph, node)`](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.all_neighbors.html#networkx.classes.function.all_neighbors) | Returns all of the neighbors of a node in the graph. |
| [`non_neighbors(graph, node)`](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.non_neighbors.html#networkx.classes.function.non_neighbors) | Returns the non-neighbors of the node in the graph. |
| [`common_neighbors(G, u, v)`](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.common_neighbors.html#networkx.classes.function.common_neighbors) | Returns the common neighbors of two nodes in a graph. |

## Edge functions

| Function | Description |
| -------- | ----------- |
| [`edges(G, nbunch)`](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.edges.html#networkx.classes.function.edges) | Returns an edge view of edges incident to nodes in nbunch. |
| [`number_of_edges(G)`](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.number_of_edges.html#networkx.classes.function.number_of_edges) | Returns the number of edges in the graph. |
| [`density(G)`](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.density.html#networkx.classes.function.density) | Returns the density of a graph. |
| [`non_edges(G)`](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.non_edges.html#networkx.classes.function.non_edges) | Returns the non-existent edges in the graph. |

## Self loop functions

| Function | Description |
| -------- | ----------- |
| [`selfloop_edges(G, data, keys, default)`](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.selfloop_edges.html#networkx.classes.function.selfloop_edges) | Returns an iterator over selfloop edges. |
| [`number_of_selfloops(G)`](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.number_of_selfloops.html#networkx.classes.function.number_of_selfloops) | Returns the number of selfloop edges. |
| [`nodes_with_selfloops(G)`](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.nodes_with_selfloops.html#networkx.classes.function.nodes_with_selfloops) | Returns an iterator over nodes with self loops. |

## Attribute functions

| Function | Description |
| -------- | ----------- |
| [`is_weighted(G, edge, weight)`](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.is_weighted.html#networkx.classes.function.is_weighted) | Returns True if G has weighted edges. |
| [`is_negatively_weighted(G, edge, weight)`](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.is_negatively_weighted.html#networkx.classes.function.is_negatively_weighted) | Returns True if G has negatively weighted edges. |
| [`set_node_attributes(G, values, name)`](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.get_node_attributes.html#networkx.classes.function.get_node_attributes) | Sets node attributes from a given value or dictionary of values. |
| [`get_node_attributes(G, name)`](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.get_node_attributes.html#networkx.classes.function.get_node_attributes) | Get node attributes from graph. |
| [`set_edge_attributes(G, values, name)`](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.set_edge_attributes.html#networkx.classes.function.set_edge_attributes) | Sets edge attributes from a given value or dictionary of values. |
| [`get_edge_attributes(G, name)`](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.get_edge_attributes.html#networkx.classes.function.get_edge_attributes) | Get edge attributes from graph. |

## Path functions

| Function | Description |
| -------- | ----------- |
| [`is_path(G, path)`](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.is_path.html#networkx.classes.function.is_path) | Returns whether or not the specified path exists. |
| [`path_weight(G, path, weight)`](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.path_weight.html#networkx.classes.function.path_weight) | Returns total cost associated with specified path and weight. |

## Freezing graph structure functions

| Function | Description |
| -------- | ----------- |
| [`freeze(G)`](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.freeze.html#networkx.classes.function.freeze) | Modify graph to prevent further change by adding or removing nodes or edges. |
| [`is_frozen(G)`](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.is_frozen.html#networkx.classes.function.is_frozen) | Returns True if graph is frozen. |
