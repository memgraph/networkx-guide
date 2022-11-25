---
title: Biggest challenges with NetworkX
sidebar_label: Biggest challenges
---

import CtaButton from "@site/src/components/cta-button/cta-button";

If you have been using NetworkX for one of your projects, you’ve probably noticed some of its limitations. Here you can find the **biggest challenges** you may stumble upon when working with NetworkX. 


## Dataset load time
Each time you want to change something in the dataset or run another algorithm, you have to load the dataset all over again. This repetitive loading wastes time and slows down the development process, especially for large datasets. If you have run into these kind of issues, check out our [**FAQ**](/faq#scaling-and-persistence) to help you solve your loading time.

:::tip
To avoid long load time, it's best to have a persistent storage solution. Since the objects stored in NetworkX are graphs, it makes sense to use a graph database as a storage solution. Memgraph is an open source in-memory graph database which ensures data durability and keeps your data in place for quick analytics. If you want to still use familiar NetworkX library, you can do it out of the box. Read how to on [**Memgraph for NetworkX developers**](https://memgraph.com/memgraph-for-networkx?utm_source=networkx-guide&utm_medium=referral&utm_campaign=networkx_ppp&utm_term=biggestchallenges&utm_content=datasetloadtime) website.
:::

## Scaling and persistence

NetworkX stores data in-memory in instantiated Python objects - Graph, DiGraph, MultiGraph, or MultiDiGraph. So NetworkX can actually give results of graph algorithms on smaller-scale graphs pretty fast. But, each time you need to change something in the database or run another algorithm, you have to reload the dataset into the appropriate Python object. There are a couple of solutions to store the data somewhere else, including exporting and importing those Python objects to different formats or using on-disk storage solutions, but that means more software you need to figure out, which slows down the development process significantly. Read more about those solutions on our [**FAQ**](/faq#scaling-and-persistence). 

:::tip
If you like using NetworkX as a graph analytic tool required for your project but often need to reach for other tools, remember that Memgraph can speed up your development by being persistent in-memory data storage. You still get to use the NetworkX algorithms you are used to or explore other, more efficient, and dynamic algorithms. If default and implemented algorithms and procedures do not cover your use case, extend the Cypher query language with custom procedures. Check out the [**Memgraph for NetworkX developers**](https://memgraph.com/memgraph-for-networkx?utm_source=networkx-guide&utm_medium=referral&utm_campaign=networkx_ppp&utm_term=biggestchallenges&utm_content=textlink) website to learn more about this integration.
:::

## Quick and easy visualizations

After running the queries, you probably want to explore the results by playing around with their visualization and share exciting insights you come across. As you probably know, NetworkX is not primarily a graph drawing package, so it doesn’t offer much to create visually pleasing and interactive graphs. Also, NetworkX cannot handle visualizations of large graphs, so you need to reach out for another drawing library and learn how to use it. Even when those libraries are better than NetworkX alone, they still have limitations regarding zooming and interacting with nodes and relationships, such as dragging and clicking. Read more about the common issues at out [FAQ section](/faq#graph-drawing).

:::tip
A visualization tool is a part of the Memgraph package, so there is no more need to explore other solutions. Feel free to shape the graph results so they reflect the insights you discovered in the best possible way. [**Learn how to use Memgraph with NetworkX**](https://memgraph.com/memgraph-for-networkx?utm_source=networkx-guide&utm_medium=referral&utm_campaign=networkx_ppp&utm_term=biggestchallenges&utm_content=learnmore) to get the most out of your data.
:::

## Smooth application deployment

NetworkX is not a database, so of course, it is missing other features that come in handy when you are deploying your application. For example, with a graph database, you can always do ad-hoc graph querying. If you plan to use your project in production, you need to find an appropriate permanent storage solution and additional graph analytics capabilities. 

The beginning of every NetworkX project includes data import. If you are importing data from different sources, your code is probably snowballing with every additional source. Things are getting messy, and every time you change something in the code, you have to pull the data from all those different sources all over again. The project gets harder to maintain, and your time gets unnecessarily wasted on pulling the data rather than on the actual analysis.

:::tip
Avoid all of the boilerplate code and smoothly deploy applications by using Memgraph, an open-source in-memory graph database, on which you can perform graph analytics using NetworkX you are familiar with, both on static and streaming datasets. [**Check out resources**](https://memgraph.com/memgraph-for-networkx?utm_source=networkx-guide&utm_medium=referral&utm_campaign=networkx_ppp&utm_term=biggestchallenges&utm_content=checkoutresources) on how to use Memgraph with NetworkX.
:::

## How to overcome these challenges?

Memgraph is a drop-in replacement for a huge part of the boilerplate code in the NetworkX project. It can work with streaming or static datasets and it offers easy integration of any NetworkX code. Although it is in-memory, Memgraph still persists your data, meaning your dataset doesn’t have to be loaded on each run. It’s enough to load it once and then query, analyze and change it. You can explore parts of the graph you need and deliver an analysis of the dataset. 

<CtaButton title="Memgraph for NetworkX developers" url="https://memgraph.com/memgraph-for-networkx?utm_source=networkx-guide&utm_medium=referral&utm_campaign=networkx_ppp&utm_term=biggestchallenges&utm_content=overcomechallenges"></CtaButton>


