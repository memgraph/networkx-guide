---
title: Degree centrality
sidebar_label: Degree centrality
---

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';
import CtaButton from "@site/src/components/cta-button/cta-button";


Historically, the first centrality was the degree centrality. Conceptually, it is the simplest algorithm to measure centrality. Degree centrality is defined as the number of connections a node has. Here, we have to differentiate two types of edges - edges that go “in” the node and edges that go “out” of the node. Therefore, there are two separate measures of degree centrality - indegree and outdegree. Indegree centrality is often interpreted as a form of popularity and outdegree as a form of companionship. 

## Usage in NetworkX

```python
degree_centrality(G)
```

**Not fast enough?** Find 100x faster algorithms [**here**](https://memgraph.com/memgraph-for-networkx?utm_source=networkx-guide&utm_medium=referral&utm_campaign=networkx_ppp&utm_term=centralityalgorithms%2Bdegree&utm_content=findfasteralgorithms).

### Example

First save locally [`graph.gexf`](https://public-assets.memgraph.com/networkx-resources/graph.gexf) to run the below example.

<Tabs
  groupId="bc"
  defaultValue="code"
  values={[
    {label: 'Python code', value: 'code'},
    {label: 'Output', value: 'output'},
  ]
}>
  <TabItem value="code"> 

```python
import networkx as nx
import matplotlib.pyplot as plt


G = nx.read_gexf("graph.gexf")

centrality = nx.degree_centrality(G)
colors = list(centrality.values())

nx.draw_networkx(
    G,
    nx.spring_layout(G),
    node_size=50,
    node_color=colors,
    edge_color="g",
    with_labels=False,
)

plt.axis("off")
plt.show()

```
  </TabItem>


  <TabItem value="output">

![centrality-degree](/img/algorithms/centrality-algorithms/degree.png)

  </TabItem>

</Tabs>

## Where to next?

There are many graph algorithms libraries out there, with their own implementations of degree centrality algorithm. NetworkX's algorithms are written in Python, and there are many other libraries that offer faster C++ implementations, such as [**MAGE**](https://github.com/memgraph/mage), a graph algorithms library developed by Memgraph team.

<CtaButton title="Memgraph for NetworkX developers" url="https://memgraph.com/memgraph-for-networkx?utm_source=networkx-guide&utm_medium=referral&utm_campaign=networkx_ppp&utm_term=centralityalgorithms%2Bdegree&utm_content=ctabutton"></CtaButton>
