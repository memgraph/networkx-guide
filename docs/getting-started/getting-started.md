---
id: getting-started
title: Getting started
sidebar_label: Getting started
slug: /getting-started
---

Welcome to the NetworkX getting started guide. The is the perfect place for graph enthusiasts who are starting their journey through the NetworkX Python package. 
Follow the next few steps to get a basic understanding of the most important concepts in NetworkX.

## Prerequisites

For the getting started guide you need to have Python and NetworkX installed locally.  
If that's not the case for you, check out our [Installation guide](/installation).

## 1. Create an empty graph

Create a new text file with the name `networkx.py` and the following code:

```python
import networkx as nx

G = nx.Graph()
```

This code will create an empty NetworkX graph without any nodes or edges. 
A `Graph` object is a collection of **nodes** (vertices) and **edges** (links, relationships).

## 2. Add nodes

Nodes can be any hashable object like a string, an image, an XML object, another Graph, etc.
You can find the complete list [here](https://docs.python.org/3/glossary.html#term-hashable).

If you want to add a node to your newly created graph, add the following line to your code:

```python
G.add_node(1)
```

You can also add multiple nodes at once:

```python
G.add_nodes_from([2, 3])
```

## 3. Add edges

Just like nodes, edges can be added one at a time:

```python
G.add_edge(1, 2)
```

Multiple edges can be added at once:

```python
G.add_edges_from([(1, 2), (1, 3)])
```

## 4. Examine your graph

To check out the number of nodes or edges, use the `number_of_nodes()` and `number_of_edges()` methods respectively:

```python
print(G.number_of_nodes())
print(G.number_of_edges())
```

To list out the actual edges and nodes in the graph:

```python
print(list(G.nodes))
print(list(G.edges))
```

## 5. Removing nodes and edges from the graph

The following methods are used to remove nodes and edges:
* Graph.remove_node()
* Graph.remove_nodes_from()
* Graph.remove_edge()
* Graph.remove_edges_from()

For example:

```python
G.remove_node(1)
G.remove_nodes_from([1, 2, 3])
```