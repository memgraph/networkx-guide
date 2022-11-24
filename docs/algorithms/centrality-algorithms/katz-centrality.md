---
title: Katz centrality
sidebar_label: Katz centrality
---

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';
import CtaButton from "@site/src/components/cta-button/cta-button";

Katz centrality is a measure of centrality that doesn’t consider only the shortest path. It considers the total number of walks in a graph. A walk in a graph is a sequence of edges which joins a sequence of nodes. (e.g 1→2→3→4→2→1→3). Katz centrality computes the relative influence of a node within a graph by measuring the number of the immediate neighbors and all other nodes in the graph. 

## Usage in NetworkX

```python
katz_centrality(G, alpha=0.1, beta=1.0, max_iter=1000, tol=1e-06, nstart=None, normalized=True, weight=None)[source]
```

**Not fast enough?** Find 100x faster algorithms [**here**](https://memgraph.com/memgraph-for-networkx?utm_source=networkx-guide&utm_medium=referral&utm_campaign=networkx_ppp&utm_term=centralityalgorithms%2Bkatz&utm_content=findfasteralgorithms).

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

centrality = nx.katz_centrality(G)
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

![centrality-katz](/img/algorithms/centrality-algorithms/katz.png)

  </TabItem>

</Tabs>

## Where to next?

There are many graph algorithms libraries out there, with their own implementations of Katz centrality algorithm. NetworkX's algorithms are written in Python, and there are many other libraries that offer faster C++ implementations, such as [**MAGE**](https://github.com/memgraph/mage), a graph algorithms library developed by Memgraph team.

<CtaButton title="Memgraph for NetworkX developers" url="https://memgraph.com/memgraph-for-networkx?utm_source=networkx-guide&utm_medium=referral&utm_campaign=networkx_ppp&utm_term=centralityalgorithms%2Bkatz&utm_content=ctabutton"></CtaButton>
