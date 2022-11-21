module.exports = {
  networkx_guide: [
    'overview',
    {
      type: 'category',
      label: 'Getting started',
      items: ['getting-started/installation', 'getting-started/getting-started'
      ],
    },
    {
      type: 'category',
      label: 'Visualizing graphs',
      items: ['visualization/visualization',
        'visualization/basics'],
    },
    {
      type: 'category',
      label: 'Functions',
      items: ['functions/functions',
        {
          type: 'category',
          label: 'Attributes',
          items: ['functions/attributes/basics',],
        },],
    },
    {
      type: 'category',
      label: 'Algorithms',
      items: ['algorithms/algorithms',
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
  ],
};
