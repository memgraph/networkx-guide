module.exports = {
  networkx_guide: [
    'overview',
    {
      type: 'category',
      label: 'Getting started',
      link: { type: 'doc', id: 'getting-started/getting-started' },
      items: ['getting-started/basics', 'getting-started/installation'],
    },
    {
      type: 'category',
      label: 'Visualizing graphs',
      link: { type: 'doc', id: 'visualization/visualization' },
      items: ['visualization/basics'],
    },
    {
      type: 'category',
      label: 'Functions',
      link: { type: 'doc', id: 'functions/functions' },
      items: [
        {
          type: 'category',
          label: 'Attributes',
          items: ['functions/attributes/basics',],
        },],
    },
    {
      type: 'category',
      label: 'Algorithms',
      link: { type: 'doc', id: 'algorithms/algorithms' },
      items: [
        {
          type: 'category',
          label: 'Graph traversals',
          link: { type: 'doc', id: 'algorithms/graph-traversals/overview' },
          items: [
            'algorithms/graph-traversals/breadth-first-search',
            'algorithms/graph-traversals/depth-first-search'],
        },
        {
          type: 'category',
          label: 'Shortest path',
          link: { type: 'doc', id: 'algorithms/shortest-path/overview' },
          items: [
            'algorithms/shortest-path/dijkstra',
            'algorithms/shortest-path/a-star-search',
            'algorithms/shortest-path/floyd-warshall',],
        },
        {
          type: 'category',
          label: 'Centrality algorithms',
          link: { type: 'doc', id: 'algorithms/centrality-algorithms/overview' },
          items: [
            'algorithms/centrality-algorithms/pagerank',
            'algorithms/centrality-algorithms/betweenness-centrality',
            'algorithms/centrality-algorithms/degree-centrality',
            'algorithms/centrality-algorithms/closeness-centrality',
            'algorithms/centrality-algorithms/katz-centrality',
          ],
        },
        {
          type: 'category',
          label: 'Community detection',
          link: { type: 'doc', id: 'algorithms/community-detection/overview' },
          items: [
            'algorithms/community-detection/girvan-newman',],
        },
        'algorithms/components/weakly-connected-components',],
    },
    'other-resources',
    'faq',
  ],
};
