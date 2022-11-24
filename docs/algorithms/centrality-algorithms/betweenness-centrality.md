---
title: Betweenness centrality
sidebar_label: Betweenness centrality
---

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';
import CtaButton from "@site/src/components/cta-button/cta-button";

Centrality analysis provides information about the node’s importance for an information flow or connectivity of the network. Betweenness centrality is one of the most used centrality metrics. Betweenness centrality measures the extent to which a node lies on paths between other nodes in the graph. Nodes with higher betweenness have more influence within a network. 

## Practical applications

There are many applications of the betweenness centrality, such as in social networks to indicate the position of power or to measure the strength of a relationship with friends. It is also used in protein to protein interactio networks to get a better insight into how proteins interact with each other. One of the most popular usages is in transportation. In a complex transportation network, centrality measurement can reveal the main bottlenecks and congestions within the system. Such can help to organize the infrastructure of a big city, as well as the amount spent in optimizing such routes.

## Usage in NetworkX

```python
betweenness_centrality(G, k=None, normalized=True, weight=None, endpoints=False, seed=None)[source]
```

**Not fast enough?** Find 100x faster algorithms [**here**](https://memgraph.com/memgraph-for-networkx?utm_source=networkx-guide&utm_medium=referral&utm_campaign=networkx_ppp&utm_term=centralityalgorithms%2Bbc&utm_content=findfasteralgorithms).

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

centrality = nx.betweenness_centrality(G)
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

![centrality-bc](/img/algorithms/centrality-algorithms/bc.png)

  </TabItem>

</Tabs>

## Where to next?

There are many graph algorithms libraries out there, with their own implementations of betweenness centrality algorithm. NetworkX's algorithms are written in Python, and there are many other libraries that offer faster C++ implementations, such as [**MAGE**](https://github.com/memgraph/mage), a graph algorithms library developed by Memgraph team.

<CtaButton title="Memgraph for NetworkX developers" url="https://memgraph.com/memgraph-for-networkx?utm_source=networkx-guide&utm_medium=referral&utm_campaign=networkx_ppp&utm_term=centralityalgorithms%2Bbc&utm_content=ctabutton"></CtaButton>
