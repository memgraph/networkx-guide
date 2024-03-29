---
id: faq
title: Frequently asked questions
sidebar_label: FAQ
---

import CtaButton from "@site/src/components/cta-button/cta-button";


Here is the list of most common questions and answers from different developer communities. 

## Scaling and persistence

### Is there a way to store the graph object so that each time I run my script, NetworkX reads that file and loads the graph? {#store-huge-graph}

Let's say you have a huge graph in NetworkX and it takes a lot to create this graph each time I execute the script. This means you have to wait a lot each time to actually analyze the dataset. To store the graph, you can use different methods of writing the graph to a file, but the best option would be to use `write_gpickle` and `read_gpickle` procedures from the `pickle` library.

```python
import pickle

# save graph object to graph.pickle file
pickle.dump(G, open('graph.pickle', 'wb'))

# load graph object from graph.pickle file
G = pickle.load(open('graph.pickle', 'rb'))
```

If this is still not fast enough, consider switching to a persistent graph database solution with NetworxX algorithms, such as Memgraph. Read more about it at [**Memgraph for NetworkX developers**](https://memgraph.com/memgraph-for-networkx?utm_source=networkx-guide&utm_medium=referral&utm_campaign=networkx_ppp&utm_term=faq&utm_content=storehugegraph) website.

### Is it possible to use NetworkX along with some kind of persistent storage? {#persistent-storage}

It is possible to use NetworkX with different kinds of persistent storage. The best kind of storage to use is a graph database, since the data there is stored in a form of nodes and relationships, just like in NetworkX. It will be much easier to obtain the data you want to analyze from a graph, rather than relational database. There are different graph solutions out there, such as Memgraph, an open source persistent in-memory graph database. To learn more about it, head over to the [**Memgraph for NetworkX developers**](https://memgraph.com/memgraph-for-networkx?utm_source=networkx-guide&utm_medium=referral&utm_campaign=networkx_ppp&utm_term=faq&utm_content=persistentstorage) website.

### Where does NetworkX store graph info? {#store-graph-info}

What if you want to access the graph that you created with NetworkX? This is not possible out of the box, because NetworkX stores graph data in Python objects (instances of classes Graph, DiGraph, MultiGraph, MultiDiGraph). To have a persistent storage, you need to either pickle the Python object, as explained [above](#store-huge-graph), or [export](/basics#writing-graphs) it to a number of different formats. Another solution is to use persistent storage, along with NetworkX, as explained in the [answer above](#persistent-storage).

### Why does NetworkX's Python implementation affects its performance? {#python-performance}

The big issue with NetworkX is memory usage with large graphs. Since NetworkX stores graph data in Python objects, it can't handle tens of millions of objects without eating up your memory. This leads to out-of-memory errors when working with that large graphs. It is much better to use C/C++ solutions out there. Their scaling is much better, especially when performing different kind of graph algorithms. To learn more about those differences, head over to [**our resources**](https://memgraph.com/memgraph-for-networkx?utm_source=networkx-guide&utm_medium=referral&utm_campaign=networkx_ppp&utm_term=faq&utm_content=pythonperformance), and find out more about Memgraph, C++ tool with easy usage for Python developers.

### Is it possible to load a graph with millions of nodes and edges with NetworkX? {#load-graph}

NetworkX uses dictionaries and each edge uses at least 100 bytes of memory. Therefore, if you have around 30 millions of edges, you will probably need more than 40 GB of RAM. You can try running this on a larger machine, but if you don't have that kind of resources, then turn to more optimized solutions. An alternative to NetworkX is called Memgraph, an open source in-memory graph database, easy to use for Python developers. To learn how to use it, check out the [**Memgraph for NetworkX developers**](https://memgraph.com/memgraph-for-networkx?utm_source=networkx-guide&utm_medium=referral&utm_campaign=networkx_ppp&utm_term=faq&utm_content=loadgraph) website.

### What is better to use? NetworkX or a graph database? {#networkx-vs-graph-db}

It depends on your use case. If you need to store your data and you expect that it's going to change often, it's best to use a graph database. NetworkX is used for processing data, rather than storing it. NetworkX holds a set of useful graph algorithms which can come in handy when gathering insights from your data. But, if you are looking for the best of both worlds, you need a persistent in-memory graph database which holds a set of highly optimized graph algorithms, and which offers a possiblity to still use NetworkX library and algorithms. Memgraph suits the description, so head over to the [**Memgraph for NetworkX developers**](https://memgraph.com/memgraph-for-networkx?utm_source=networkx-guide&utm_medium=referral&utm_campaign=networkx_ppp&utm_term=faq&utm_content=networkxvsgraphdb) to learn more.

### Is there a way not to load one of the NetworkX generated graph each time? {#generated-graph}

Sadly, no. Since NetworkX is holding graph as an in-memory Python object, as explained [above](#store-graph-info), it has to load the graph created with NetworkX graph generator each time. To avoid this, you need to start using a [persistent database solution](#persistent-storage). 

## Graph drawing

### Are there any other solutions to draw my NetworkX graphs with? {#drawing-solutions}

There are a couple of solutions out there to draw your NetworkX graphs with. NetworkX offers basic support for Matplotlib and Graphviz, which is not that performant. Better graph visualization tools out there are Cytoscape, Gephi, and [**Orb**](https://github.com/memgraph/orb). 


### Why is the drawing of my NetworkX graph with about 50000 nodes and edges taking forever? {#drawing-large-graph}

The drawing of your graph is probably taking too long because that amount of nodes and edges for NetworkX is too huge. NetworkX is not primarily a drawing tool, and you should find better solutions out there. One of them is Memgraph, an in-memory open source graph database, which has a visual user interface called Memgraph Lab. Memgraph Lab offers you quick rendering of large graph with pretty default view and the possiblity of customization. Read more about it at [**Memgraph for NetworkX developers**](https://memgraph.com/memgraph-for-networkx?utm_source=networkx-guide&utm_medium=referral&utm_campaign=networkx_ppp&utm_term=faq&utm_content=drawinglargegraph) website.


## Where to next?

If you ran into at least one of the above issues with NetworkX, maybe it's time you check what's else out there! Check out the valuable resources for NetworkX and Python developers in general on Memgraph's website:

<CtaButton title="Memgraph for NetworkX developers" url="https://memgraph.com/memgraph-for-networkx?utm_source=networkx-guide&utm_medium=referral&utm_campaign=networkx_ppp&utm_term=faq&utm_content=ctabutton"></CtaButton>

If you have been using NetworkX for one of your projects, you’ve probably noticed some of its limitations. Memgraph solves data persistence, allows you to run queries and graph algorithms, and create visualizations you can interact with and customize. It is free to use as it’s open-source.

<iframe width="560" height="315" src="https://www.youtube.com/embed/xYjGBcm0Yqk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
