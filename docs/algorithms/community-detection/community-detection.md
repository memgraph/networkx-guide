---
id: community-detection
title: Community detection algorithms
sidebar_label: Community detection
slug: /algorithms/community-detection
---

While humans are very good at detecting distinct or repetitive patterns among a few components, the nature of large interconnected networks makes it practically impossible to perform such basic tasks manually. Groups of densely connected nodes are easy to spot visually, but more sophisticated methods are needed to perform these tasks programmatically. Community detection algorithms are used to find such groups of densely connected components in various networks.

M. Girvan and M. E. J. Newman have proposed one of the most widely adopted community detection algorithms. According to them, groups of nodes in a network are tightly connected within communities and loosely connected between communities.

![Community-detection-example](/img/algorithms/community-detection/community-detection-example.jpg)

## Practical applications

Because networks are an integral part of many real-world problems, community detection algorithms have found their way into various fields, ranging from social network analysis to public health initiatives.
* A known use case is the detection of terrorist groups in social networks by tracking their activities and interactions. In a similar fashion, groups of malicious bots can be detected on online social platforms.
* Community detection can be used to study the dynamics of certain groups that are susceptible to epidemic diseases. Other types of diseases can be studied in a similar fashion to discover common links among patients.
* One of the most recent use cases, community evolution prediction, involves the prediction of upcoming changes in a network structure.

## Community detection techniques

There are two main types of community detection techniques, **agglomerative** and **divisive**.

**Agglomerative** methods generally start with a network that contains only nodes of the original graph. The edges are added one-by-one to the graph, while stronger edges are prioritized over weaker ones. The strength of an edge, or weight, is calculated differently depending on the specific algorithm implementation.

On the other hand, **divisive** methods rely on the process of removing edges from the original graph iteratively. Stronger edges are removed before weaker ones. At every step, the edge-weight calculation is repeated, since the weight of the remaining edges changes after an edge is removed. After a certain number of steps, we get clusters of densely connected nodes, a.k.a. communities.

## Community detection algorithms in NetworkX

| Name                         | Description                                                                                                                           | Link                     |
|------------------------------|---------------------------------------------------------------------------------------------------------------------------------------|--------------------------|
| **Girvan-Newman algorithm**      | The Girvan-Newman algorithm detects communities by progressively removing edges from the original network.                            | [NetworkX Reference Guide](https://networkx.org/documentation/stable/reference/algorithms/generated/networkx.algorithms.community.centrality.girvan_newman.html#networkx.algorithms.community.centrality.girvan_newman) |
| **Fluid Communities algorithm**  | The algorithm is based on the simple idea of fluids interacting in an environment, expanding and pushing each other.                  | [NetworkX Reference Guide](https://networkx.org/documentation/stable/reference/algorithms/generated/networkx.algorithms.community.asyn_fluid.asyn_fluidc.html#networkx.algorithms.community.asyn_fluid.asyn_fluidc) |
| **Label Propagation algorithm**  | Label propagation is a semi-supervised machine learning algorithm that assigns labels to previously unlabeled data points.            | [NetworkX Reference Guide](https://networkx.org/documentation/stable/reference/algorithms/generated/networkx.algorithms.community.label_propagation.asyn_lpa_communities.html#networkx.algorithms.community.label_propagation.asyn_lpa_communities) |
| **Clique Percolation algorithm** | The algorithm finds k-clique communities in a graph using the percolation method.                                                     | [NetworkX Reference Guide](https://networkx.org/documentation/stable/reference/algorithms/generated/networkx.algorithms.community.kclique.k_clique_communities.html#networkx.algorithms.community.kclique.k_clique_communities) |
| **Kernighan-Lin algorithm**      | This algorithm partitions a network into two sets by iteratively swapping pairs of nodes to reduce the edge cut between the two sets. | [NetworkX Reference Guide](https://networkx.org/documentation/stable/reference/algorithms/generated/networkx.algorithms.community.kernighan_lin.kernighan_lin_bisection.html#networkx.algorithms.community.kernighan_lin.kernighan_lin_bisection) |

## Where to next?

So far, we have covered these algorithms:
* [Girvan-Newman algorithm](/algorithms/community-detection/girvan-newman).

**Not fast enough?** Find 100x faster algorithms [**here**](https://memgraph.com/memgraph-for-networkx?utm_source=networkx-guide&utm_medium=referral&utm_campaign=networkx_ppp&utm_term=algorithms%2Bcommunitydetection&utm_content=findfasteralgorithms).
