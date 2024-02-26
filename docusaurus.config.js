module.exports = {
  title: 'Memgraph\'s Guide for NetworkX library',
  tagline: 'Learn NetworkX in 15 minutes',
  url: 'https://memgraph.github.io',
  baseUrl: '/networkx-guide/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/memgraph-logo-round-corners.png',
  organizationName: 'memgraph',
  projectName: 'networkx-guide',
  scripts: [
    {
      src: `https://memgraph.github.io/networkx-guide/js/load-analytics.js`,
      //src: `http://localhost:3000/js/load-analytics.js`,
    },
  ],
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    metadata: [
      {
        name: "facebook-domain-verification",
        content:
          "qsp6bwsoed1tgwrnqps64c0fm4rxij",
      },
    ],
    navbar: {
      title: 'Memgraph\'s Guide for NetworkX library',
      logo: {
        alt: 'Memgraph Logo',
        src: 'img/memgraph-logo-round-corners.png',
      },
      items: [
        {
          href: "https://github.com/memgraph/memgraph",
          className: 'header-github-link',
          position: "right",
          'aria-label': 'GitHub repository'
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
              label: 'Getting started',
              to: '/getting-started',
            },
            {
              label: 'Visualizing graphs',
              to: '/visualization',
            },
            {
              label: 'Functions',
              to: '/functions',
            },
            {
              label: 'Algorithms',
              to: '/algorithms',
            },
            {
              label: 'Biggest challenges',
              to: '/biggest-challenges',
            },
            {
              label: 'Other resources',
              to: '/other-resources',
            },
            {
              label: 'FAQ',
              to: '/faq',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'NetworkX Project',
              href: 'https://networkx.org/',
            },
            {
              label: 'NetworkX Source Code',
              href: 'https://github.com/networkx/networkx',
            },
            {
              label: 'NetworkX Documentation',
              href: 'https://networkx.org/documentation/stable/index.html',
            },
            {
              label: 'Memgraph for NetworkX Developers',
              href: 'https://memgraph.com/memgraph-for-networkx?utm_source=networkx-guide&utm_medium=referral&utm_campaign=networkx_ppp&utm_term=footer&utm_content=textlinkresources',
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
      ],
      logo: {
        alt: 'Memgraph Logo',
        src: 'img/Memgraph-logo-white-rgb.png',
        href: 'https://memgraph.com',
        width: 160,
        height: 74,
      },
      copyright: `Copyright © ${new Date().getFullYear()} Memgraph\'s Guide for NetworkX library`,
    },
    announcementBar: {
      id: "topnotice",
      content:
        'Memgraph is not associated or affiliated with NetworkX. None of the information presented on this website is provided or approved by NetworkX.',
      backgroundColor: "#fafbfc",
      textColor: "#091E42",
      isCloseable: false,
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
    require.resolve('./src/components/analyticsCall.js'),
  ],
};
