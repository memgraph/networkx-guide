---
title: Closeness centrality
sidebar_label: Closeness centrality
---

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';
import CtaButton from "@site/src/components/cta-button/cta-button";


Another important centrality measure is closeness centrality. Closeness centrality is a measure of centrality in a network calculated as the reciprocal of the sum of the lengths of the shortest paths between the node and all other nodes in the graph. Simply, the closer the node is to other nodes, the more central it is. 

## Usage in NetworkX

```python
closeness_centrality(G, u=None, distance=None, wf_improved=True)
```

**Not fast enough?** Find 100x faster algorithms [**here**](https://memgraph.com/memgraph-for-networkx?utm_source=networkx-guide&utm_medium=referral&utm_campaign=networkx_ppp&utm_term=centralityalgorithms%2Bcloseness&utm_content=findfasteralgorithms).

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

centrality = nx.closeness_centrality(G)
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

![centrality-closeness](/img/algorithms/centrality-algorithms/closeness.png)

  </TabItem>

</Tabs>

## Where to next?

There are many graph algorithms libraries out there, with their own implementations of closeness centrality algorithm. NetworkX's algorithms are written in Python, and there are many other libraries that offer faster C++ implementations, such as [**MAGE**](https://github.com/memgraph/mage), a graph algorithms library developed by Memgraph team.

<CtaButton title="Memgraph for NetworkX developers" url="https://memgraph.com/memgraph-for-networkx?utm_source=networkx-guide&utm_medium=referral&utm_campaign=networkx_ppp&utm_term=centralityalgorithms%2Bcloseness&utm_content=ctabutton"></CtaButton>
