---
id: getting-started
title: Getting started
sidebar_label: Getting started
slug: /getting-started
---

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';

NetworkX is a Python package for the creation, manipulation and the study of the structure, dynamics and functions of complex networks. It offers data structures for **graphs**, **digraphs**, **multigraphs**, and **multidigraphs** as well as standard graph algorithms. It enables you to load and store networks in many data formats, build and analyze network structure, generate types of random or classic networks, and much more. It is a great starting point for someone looking to get **quick insights** from their data on the fly.

This is the perfect place for graph enthusiasts who are starting their journey through the NetworkX Python package. With this guide, you are going to get a basic understanding of the most important concepts in NetworkX, such as:

- [**NetworkX graph types**](#networkx-graph-types)
- [**Graph creation**](#graph-creation)
- [**Graph examination**](#graph-examination)


:::info prerequisites
For the getting started guide you need to have **Python** and **NetworkX** installed locally. If that's not the case for you, check out the [**Installation guide**](/installation).
:::


## NetworkX graph types

The model of the graph structure in NetworkX is similar to the labeled-property graph. Regarding the naming convention, relationships are called edges, and properties are called attributes in NetworkX. You can use the following NetworkX graph classes:

![networkx-graph-types](../../static/img/getting-started/networkx-graph-types.png)

## Graph creation

NetworkX graph objects can be created in three ways:

- using the [**graph generators**](#graph-generators) - standard algorithms to create network topologies,
- by [**reading**](#reading-graphs) from different formats,
- by [**adding nodes and edges**](#adding-nodes-and-edges) explicitly.

It is also possible to [remove nodes and edges](#removing-nodes-and-edges-from-the-graph) from your graph.

### Graph generators

There are many types of graph generators inside NetworkX. They create predefined network structures, so that you can continue on exploring it and learning more about graph algorithms. Some of the most often used generators are:

- `balanced_tree()`
- `complete_graph()`
- `cycle_graph()`
- `star_graph()`
- `karate_club_graph()`

**Example:**

<Tabs
  groupId="graph_generators"
  defaultValue="code"
  values={[
    {label: 'Python code', value: 'code'},
    {label: 'Output', value: 'output'},
  ]
}>
  <TabItem value="code"> 

Let's generate and draw Zachary’s Karate Club graph with the following Python code:

```python
generated_graph = nx.karate_club_graph()
pos = nx.spring_layout(generated_graph, scale=0.5)
nx.draw(generated_graph, pos)

plt.show()
```
  </TabItem>


  <TabItem value="output">

  The output of the previous Python code looks like this:

![](../../static/img/getting-started/karate-club-dataset.png)

  </TabItem>

</Tabs>


### Reading graphs

Data can be imported from many different sources and file formats: Adjacency List, Multiline Adjacency List, Edge List, GEXF, GML, Pickle, GraphML, JSON, LEDA, SparseGraph6, Pajek, GIS Shapefile and Matrix Market.

**Example:**

<Tabs
  groupId="reading_graphs"
  defaultValue="csv"
  values={[
    {label: 'CSV file', value: 'csv'},
    {label: 'Python code', value: 'code'},
    {label: 'Output', value: 'output'},
  ]
}>
<TabItem value="csv">

Let's say we have the following `graph.csv` file:

```csv
source,target
1,2
1,3
2,3
1,4
2,4
3,4
1,5
1,6
```
</TabItem>
  <TabItem value="code"> 

Let's import the `graph.csv` file and draw the graph:

```python
graph_type = nx.Graph()
df = pd.read_csv('graph.csv')
G = nx.from_pandas_edgelist(df, create_using=graph_type)

nx.draw(G)
plt.show()
```
  </TabItem>


  <TabItem value="output">

  The output of the previous Python code looks like this:

![](../../static/img/getting-started/draw-csv.png)

  </TabItem>

</Tabs>


### Adding nodes and edges

All NetworkX graph classes allow hashable Python objects (except `None`) as nodes. Hashable objects include a text string, an image, an XML object, another Graph, a customized node object, and more. **Nodes** can be added and manipulated by using the following methods:

- `G.add_node(node)` - add a single node to graph `G`
- `G.add_nodes_from(nodes)` - add nodes from container of nodes to graph `G`
- `G.remove_node(node)` - remove node from all adjacent edges from graph `G`
- `G.remove_nodes_from(nodes)` - remove nodes from container of nodes from graph `G`

**Edges** often have data associated with them. Any Python object can be assigned as an edge attribute. Edges can be added and manipulated by using the following methods:

- `G.add_edge(u, v)` - add edge between nodes `u` and `v` in graph `G`
- `G.add_edges_from(ebunch)` - add edges from the container of edges to graph `G`
- `G.add_weighted_edges_from(ebunch)` - add weighted edges from the container of edges to graph `G`
- `G.remove_edge(u, v)` - remove edge between nodes `u` and `v` from graph `G`
- `G.remove_edges_from(ebunch)` - remove edges from list or container of edge tuples from graph `G`

**Example**

<Tabs
  groupId="adding_nodes_and_edges"
  defaultValue="code"
  values={[
    {label: 'Python code', value: 'code'},
    {label: 'Output', value: 'output'},
  ]
}>
  <TabItem value="code"> 

The following Python code shows how to add one or multiple nodes and edges. It will also draw a graph with Matplotlib library.

```python
import networkx as nx

import matplotlib.pyplot as plt

g = nx.Graph()

# Adding one node
g.add_node("1", label="Person", name="Kevin Bacon", age=64)

# Adding multiple nodes
g.add_nodes_from(
    [
        ("2", {"label": "Person", "name": "Ian McKellen", "age": 83}),
        ("3", {"label": "Person", "name": "James McAvoy", "age": 43}),
        ("4", {"label": "Person", "name": "Michael Fassbender", "age": 45}),
    ]
)

# Adding one edge
g.add_edge("1", "3", type="ACTED_WITH")

# Adding multiple edges
g.add_edges_from([("1", "4"), ("2", "3"), ("2", "4")], type="ACTED_WITH")

# Graph drawing
pos = nx.circular_layout(g)
nx.draw(g, pos, node_size=10000)

labels = nx.get_node_attributes(g, "name")
edge_labels = nx.get_edge_attributes(g, "type")

nx.draw_networkx_labels(g, pos, labels=labels, font_size=10, font_color="white")
nx.draw_networkx_edge_labels(g, pos, edge_labels=edge_labels, font_size=10)

plt.show()
```
  </TabItem>


  <TabItem value="output">

  The output of the previous Python code looks like this:

![](../../static/img/getting-started/kevin-bacon.png)

  </TabItem>

</Tabs>

### Removing nodes and edges from the graph

The following methods are used to remove nodes and edges:

- `Graph.remove_node()`
- `Graph.remove_nodes_from()`
- `Graph.remove_edge()`
- `Graph.remove_edges_from()`

**Example**

<Tabs
  groupId="removing_nodes_and_edges"
  defaultValue="code"
  values={[
    {label: 'Python code', value: 'code'},
    {label: 'Output', value: 'output'},
  ]
}>
  <TabItem value="code"> 

The following Python code shows how to remove one or multiple nodes and edges.

```python
import networkx as nx

g = nx.Graph()
g.add_nodes_from([1, 2, 3, 4, 5, 6])
g.add_edges_from([(1, 2), (2, 3), (3, 4), (3, 5), (4, 5), (4, 6), (5, 6)])
print(g.nodes)
print(g.edges)

g.remove_node(1)
print(g.nodes)
print(g.edges)

g.remove_nodes_from([2, 3])
print(g.nodes)
print(g.edges)

g.remove_edges_from([(4, 5), (4, 6)])
print(g.nodes)
print(g.edges)
```
  </TabItem>


  <TabItem value="output">

  The output of the previous Python code looks like this:

```python
[1, 2, 3, 4, 5, 6]
[(1, 2), (2, 3), (3, 4), (3, 5), (4, 5), (4, 6), (5, 6)]
[2, 3, 4, 5, 6]
[(2, 3), (3, 4), (3, 5), (4, 5), (4, 6), (5, 6)]
[4, 5, 6]
[(4, 5), (4, 6), (5, 6)]
[4, 5, 6]
[(5, 6)]
```

Notice how when the node `1` was removed, all edges incident with the removed node were also removed from the graph.

  </TabItem>

</Tabs>


## Graph examination

To check out the number of nodes or edges, use the `number_of_nodes()` and `number_of_edges()` methods respectively:

```python
print(G.number_of_nodes())
print(G.number_of_edges())
```

To list out the actual edges and nodes in the graph:

```python
print(G.nodes)
print(G.edges)
```




