---
id: basics
title: Attribute basics
sidebar_label: Attribute basics
---

## How to store and access node attributes using NetworkX in Python?

You can add attributes when adding the nodes to the graph:

```python
G.add_node('Person', name='Anna', year_of_birth='1990')
```

Attributes can also be added as a dictionary:

```python
G.add_node('Person', {'name': 'Anna', 'year_of_birth': 1990})
```

You can access the attributes just as you would access any dictionary in Python:

```python
G.node['Person']['name']
G.node['Person']['year_of_birth']
```

## How to access and change attributes of connected nodes?

We can use the `G.edges()` function to get all the edges of a graph and iterate over them.
We need to set `data=True` to access the attributes.

```python
for n1, n2 in list(G.edges(data=True)):
    print(G.node[n1]['name'], G.node[n2]['name'])
    print(G.node[n1]['year_of_birth'], G.node[n2]['year_of_birth'])
```
