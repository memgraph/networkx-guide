---
id: visualization
title: Visualization overview
sidebar_label: Visualization overview
slug: /visualization
---

Even though the NetworkX package isn't primarily a drawing tool, some functionalities come builtin.  
Basic drawing with capabilities with **Matplotlib** and the open-source **Graphviz** software package are included.

Here is an example of how to draw a simple graph:

```python
import matplotlib.pyplot as plt
import networkx as nx

G = nx.petersen_graph()
plt.subplot(121)

nx.draw(G, with_labels=True, font_weight='bold', node_color='orange')
plt.subplot(122)

nx.draw_shell(G, nlist=[range(5, 10), range(5)], with_labels=True, font_weight='bold', node_color='orange')

plt.show()
```

The output is:

![Matplotlib figure](/img/visualization/visualization-matplotlib-1.png)

Here are some other options for drawing graphs:

```python
import matplotlib.pyplot as plt
import networkx as nx

options = {
    'node_color': 'orange',
    'node_size': 100,
    'width': 3,
}

G = nx.petersen_graph()

plt.subplot(221)
nx.draw_random(G, **options)

plt.subplot(222)
nx.draw_circular(G, **options)

plt.subplot(223)
nx.draw_spectral(G, **options)

plt.subplot(224)
nx.draw_shell(G, nlist=[range(5,10), range(5)], **options)

plt.show()
```

The output is:

![Matplotlib figure](/img/visualization/visualization-matplotlib-2.png)

## Where to next?

If you wish to learn more about drawing graphs with NetworkX, visit the [draw_networkx()](https://networkx.org/documentation/stable/reference/generated/networkx.drawing.nx_pylab.draw_networkx.html#networkx.drawing.nx_pylab.draw_networkx) and [Graph Layout](https://networkx.org/documentation/stable/reference/drawing.html#module-networkx.drawing.layout) sections in the NetworkX reference guide.

Take a look at some of the most common questions when it comes to drawing graphs:
1. [How to draw directed graphs using NetworkX in Python?](/visualization/basics#1-how-to-draw-directed-graphs-using-networkx-in-python)
2. [How to draw a NetworkX graph with labels?](/visualization/basics#2-how-to-draw-a-networkx-graph-with-labels)
3. [How to change the color and width of edges in NetworkX graphs according to edge attributes?](/visualization/basics#3-how-to-change-the-color-and-width-of-edges-in-networkx-graphs-according-to-edge-attributes)
4. [How to color nodes in NetworkX graphs?](/visualization/basics#4-how-to-color-nodes-in-networkx-graphs)
5. [How to color nodes in NetworkX graphs according to their attributes?](/visualization/basics#5-how-to-color-nodes-in-networkx-graphs-according-to-their-attributes)


See how to visualise your graphs easy [**here**](https://memgraph.com/memgraph-for-networkx?utm_source=networkx-guide&utm_medium=referral&utm_campaign=networkx_ppp&utm_term=visualization%2Boverview&utm_content=visualizeiteasy).
