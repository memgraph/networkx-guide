module.exports = {
  title: 'NetworkX Guide',
  tagline: 'Learn NetworkX in 15 minutes',
  url: 'https://networkx.guide',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/networkx-logo-small.png',
  organizationName: 'memgraph',
  projectName: 'networkx-guide',
  scripts: [
    {
      src: `https://networkx.guide/js/load-analytics.js`,
      //src: `http://localhost:3000/js/load-analytics.js`,
    },
  ],
  themeConfig: {
    navbar: {
      title: 'NetworkX Guide',
      logo: {
        alt: 'NetworkX Logo',
        src: 'img/networkx-logo-small.png',
      },
      items: [
        {
          to: '/',
          label: 'Guide',
          position: 'left',
        },
        {
          href: 'https://github.com/memgraph/networkx-guide',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Guide',
          items: [
            {
              label: 'Installation',
              to: '/',
            },
            {
              label: 'Getting started',
              to: '/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/networkx',
            },
          ],
        },
        {
          title: 'Official NetworkX Resources',
          items: [
            {
              label: 'NetworkX Project',
              href: 'https://networkx.org/',
            },
            {
              label: 'Source Code',
              href: 'https://github.com/networkx/networkx',
            },
            {
              label: 'Documentation',
              href: 'https://networkx.org/documentation/stable/index.html',
            },
          ],
        },
      ],
      logo: {
        alt: 'Memgraph Logo',
        src: 'img/Memgraph-logo-white-rgb.png',
        href: 'https://memgraph.com',
      },
      copyright: `Copyright © ${new Date().getFullYear()} NetworkX Guide, Powered by Memgraph.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl:
            'https://github.com/memgraph/networkx-guide/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  clientModules: [
    require.resolve('./src/components/SegmentCall.js'),
    //require.resolve('./src/components/HotJarCall.js'),
  ],
};
