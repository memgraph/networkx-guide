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
          label: 'Shortest path',
          items: ['algorithms/shortest-path/shortest-path',
            'algorithms/shortest-path/dijkstra',
            'algorithms/shortest-path/a-star-search',
            'algorithms/shortest-path/floyd-warshall',],
        },
        'algorithms/link-analysis/pagerank',
        {
          type: 'category',
          label: 'Community detection',
          items: ['algorithms/community-detection/community-detection',
            'algorithms/community-detection/girvan-newman',],
        },
        'algorithms/components/weakly-connected-components',],
    },
    'other-resources',
    'faq',
  ],
};
