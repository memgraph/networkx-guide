---
id: functions
title: Functions overview
sidebar_label: Functions overview
slug: /functions
---

:::info
This site is under construction.
:::

## Graph functions

| Function | Description |
| -------- | ----------- |
| [degree](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.degree.html#networkx.classes.function.degree)(G[, nbunch, weight]) | Returns a degree view of single node or of nbunch of nodes.   |
| [degree_histogram](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.degree_histogram.html#networkx.classes.function.degree_histogram)(G)               | Returns a list of the frequency of each degree value.         |
| [density](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.density.html#networkx.classes.function.density)(G)                        | Returns the density of a graph. |
| [info](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.info.html#networkx.classes.function.info)(G[, n])                      | Return a summary of information for the graph G or a single node n. |
| [create_empty_copy](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.create_empty_copy.html#networkx.classes.function.create_empty_copy)(G[, with_data]) | Returns a copy of the graph G with all of the edges removed. |
| [is_directed](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.is_directed.html#networkx.classes.function.is_directed)(G)                    | Return True if graph is directed. |
| [to_directed](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.to_directed.html#networkx.classes.function.to_directed)(graph)                | Returns a directed view of the graph graph. |
| [to_undirected](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.to_undirected.html#networkx.classes.function.to_undirected)(graph)              | Returns an undirected view of the graph graph. |
| [is_empty](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.is_empty.html#networkx.classes.function.is_empty)(G) | Returns True if G has no edges. |
| [add_star](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.add_star.html#networkx.classes.function.add_star)(G_to_add_to, nodes_for_star, **attr) | Add a star to Graph G_to_add_to. |
| [add_path](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.add_path.html#networkx.classes.function.add_path)(G_to_add_to, nodes_for_path, **attr) | Add a path to the Graph G_to_add_to. |
| [add_cycle](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.add_cycle.html#networkx.classes.function.add_cycle)(G_to_add_to, nodes_for_cycle, **attr) | Add a cycle to the Graph G_to_add_to. |
| [subgraph](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.subgraph.html#networkx.classes.function.subgraph)(G, nbunch) | Returns the subgraph induced on nodes in nbunch. |
| [subgraph_view](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.subgraph_view.html#networkx.classes.function.subgraph_view)(G[, filter_node, filter_edge]) | View of G applying a filter on nodes and edges. |
| [induced_subgraph](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.induced_subgraph.html#networkx.classes.function.induced_subgraph)(G, nbunch) | Returns a SubGraph view of G showing only nodes in nbunch. |
| [restricted_view](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.restricted_view.html#networkx.classes.function.restricted_view)(G, nodes, edges) | Returns a view of G with hidden nodes and edges. |
| [reverse_view](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.reverse_view.html#networkx.classes.function.reverse_view)(G) | View of G with edge directions reversed. |
| [edge_subgraph](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.edge_subgraph.html#networkx.classes.function.edge_subgraph)(G, edges) | Returns a view of the subgraph induced by the specified edges. |

## Node functions

| Function | Description |
| -------- | ----------- |
| [nodes](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.nodes.html#networkx.classes.function.nodes)(G) | Returns an iterator over the graph nodes. |
| [number_of_nodes](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.number_of_nodes.html#networkx.classes.function.number_of_nodes)(G) | Returns the number of nodes in the graph. |
| [neighbors](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.neighbors.html#networkx.classes.function.neighbors)(G, n) | Returns a list of nodes connected to node n. |
| [all_neighbors](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.all_neighbors.html#networkx.classes.function.all_neighbors)(graph, node) | Returns all of the neighbors of a node in the graph. |
| [non_neighbors](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.non_neighbors.html#networkx.classes.function.non_neighbors)(graph, node) | Returns the non-neighbors of the node in the graph. |
| [common_neighbors](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.common_neighbors.html#networkx.classes.function.common_neighbors)(G, u, v) | Returns the common neighbors of two nodes in a graph. |

## Edge functions

| Function | Description |
| -------- | ----------- |
| [edges](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.edges.html#networkx.classes.function.edges)(G[, nbunch]) | Returns an edge view of edges incident to nodes in nbunch. |
| [number_of_edges](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.number_of_edges.html#networkx.classes.function.number_of_edges)(G) | Returns the number of edges in the graph. |
| [density](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.density.html#networkx.classes.function.density)(G) | Returns the density of a graph. |
| [non_edges](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.non_edges.html#networkx.classes.function.non_edges)(G) | Returns the non-existent edges in the graph. |

## Self loop functions

| Function | Description |
| -------- | ----------- |
| [selfloop_edges](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.selfloop_edges.html#networkx.classes.function.selfloop_edges)(G[, data, keys, default]) | Returns an iterator over selfloop edges. |
| [number_of_selfloops](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.number_of_selfloops.html#networkx.classes.function.number_of_selfloops)(G) | Returns the number of selfloop edges. |
| [nodes_with_selfloops](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.nodes_with_selfloops.html#networkx.classes.function.nodes_with_selfloops)(G) | Returns an iterator over nodes with self loops. |

## Attribute functions

| Function | Description |
| -------- | ----------- |
| [is_weighted](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.is_weighted.html#networkx.classes.function.is_weighted)(G[, edge, weight]) | Returns True if G has weighted edges. |
| [is_negatively_weighted](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.is_negatively_weighted.html#networkx.classes.function.is_negatively_weighted)(G[, edge, weight]) | Returns True if G has negatively weighted edges. |
| [set_node_attributes](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.get_node_attributes.html#networkx.classes.function.get_node_attributes)(G, values[, name]) | Sets node attributes from a given value or dictionary of values. |
| [get_node_attributes](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.get_node_attributes.html#networkx.classes.function.get_node_attributes)(G, name) | Get node attributes from graph. |
| [set_edge_attributes](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.set_edge_attributes.html#networkx.classes.function.set_edge_attributes)(G, values[, name]) | Sets edge attributes from a given value or dictionary of values. |
| [get_edge_attributes](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.get_edge_attributes.html#networkx.classes.function.get_edge_attributes)(G, name) | Get edge attributes from graph. |

## Path functions

| Function | Description |
| -------- | ----------- |
| [is_path](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.is_path.html#networkx.classes.function.is_path)(G, path) | Returns whether or not the specified path exists. |
| [path_weight](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.path_weight.html#networkx.classes.function.path_weight)(G, path, weight) | Returns total cost associated with specified path and weight. |

## Freezing graph structure functions

| Function | Description |
| -------- | ----------- |
| [freeze](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.freeze.html#networkx.classes.function.freeze)(G) | Modify graph to prevent further change by adding or removing nodes or edges. |
| [is_frozen](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.is_frozen.html#networkx.classes.function.is_frozen)(G) | Returns True if graph is frozen. |