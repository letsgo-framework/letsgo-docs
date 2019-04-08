const container = require('markdown-it-container');

const ogprefix = 'og: http://ogp.me/ns#';
const title = 'letsGo Documentation';
const description = 'A Go Boilerplate for RESTful API';
const color = '#2F80ED';
const author = 'Sab94';
const url = 'https://letsgo.io/documentation/';

module.exports = {
  head: [
    ['link', { rel: 'icon', href: `/rocket.png` }],
    ['meta', { name: 'theme-color', content: color }],
    ['meta', { prefix: ogprefix, property: 'og:title', content: title }],
    ['meta', { prefix: ogprefix, property: 'twitter:title', content: title }],
    ['meta', { prefix: ogprefix, property: 'og:type', content: 'article' }],
    ['meta', { prefix: ogprefix, property: 'og:url', content: url }],
    [
      'meta',
      { prefix: ogprefix, property: 'og:description', content: description },
    ],
    [
      'meta',
      { prefix: ogprefix, property: 'og:image', content: `${url}rocket.png` },
    ],
    [
      'meta',
      { prefix: ogprefix, property: 'og:article:author', content: author },
    ],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
    // ['link', { rel: 'apple-touch-icon', href: `/assets/apple-touch-icon.png` }],
    // ['link', { rel: 'mask-icon', href: '/assets/safari-pinned-tab.svg', color: color }],
    ['meta', { name: 'msapplication-TileImage', content: '/rocket.png' }],
    ['meta', { name: 'msapplication-TileColor', content: color }],
  ],
  markdown: {
    anchor: {
      permalink: true,
    },
    config: md => {
      md.use(require('markdown-it-decorate'))
        .use(...createContainer('intro'))
        .use(...createContainer('windows'))
        .use(...createContainer('ubuntu'))
        .use(...createContainer('mac'))
        .use(...createContainer('note'));
    },
  },
  title,
  description,
  base: '/documentation/',
  ga: 'UA-54313258-1',
  themeConfig: {
    // versions: [['Version 3.x.x', '/3.x.x/'], ['Version 1.x.x', '/1.x.x/']],
    repo: 'sab94/letsGo',
    website: 'https://letsgo.io',
    slack: 'https://slack.letsgo.io',
    blog: 'https://blog.letsgo.io',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: 'Improve this page',
    serviceWorker: true,
    hiddenLinks: ['/cli/CLI.html', '/api-reference/reference.html'],
    sidebar: {
      '/': [
        {
          collapsable: false,
          title: '🚀 Getting started',
          children: [
            '/getting-started/introduction',
            '/getting-started/install-requirements'
          ],
        },
        // {
        //   collapsable: true,
        //   title: '💡 Guides',
        //   children: [
        //     '/3.x.x/concepts/concepts',
        //     '/3.x.x/guides/api-documentation',
        //     '/3.x.x/guides/authentication',
        //     '/3.x.x/configurations/configurations',
        //     '/3.x.x/guides/controllers',
        //     '/3.x.x/guides/deployment',
        //     '/3.x.x/guides/email',
        //     '/3.x.x/guides/upload',
        //     '/3.x.x/guides/filters',
        //     '/3.x.x/guides/graphql',
        //     '/3.x.x/guides/i18n',
        //     '/3.x.x/guides/models',
        //     '/3.x.x/guides/policies',
        //     '/3.x.x/guides/public-assets',
        //     '/3.x.x/guides/requests',
        //     '/3.x.x/guides/responses',
        //     '/3.x.x/guides/routing',
        //     '/3.x.x/guides/services',
        //     '/3.x.x/guides/webhooks',
        //   ],
        // },
        // {
        //   collapsable: true,
        //   title: '⚙️️ Advanced',
        //   children: [
        //     '/3.x.x/advanced/customize-admin',
        //     '/3.x.x/advanced/hooks',
        //     '/3.x.x/advanced/logging',
        //     '/3.x.x/advanced/middlewares',
        //     '/3.x.x/advanced/usage-tracking',
        //   ],
        // },
        // {
        //   collapsable: true,
        //   title: '🔌 Plugin Development',
        //   children: [
        //     '/3.x.x/plugin-development/quick-start',
        //     '/3.x.x/plugin-development/plugin-architecture',
        //     '/3.x.x/plugin-development/backend-development',
        //     '/3.x.x/plugin-development/frontend-development',
        //     '/3.x.x/plugin-development/frontend-use-cases',
        //     '/3.x.x/plugin-development/utils',
        //     // '/3.x.x/plugin-development/ui-components', TODO: Add this file
        //   ],
        // },
        // {
        //   collapsable: true,
        //   title: '💻 Command Line Interface',
        //   children: ['/3.x.x/cli/CLI'],
        // },
        // {
        //   collapsable: true,
        //   title: '🏗 API Reference',
        //   children: ['/3.x.x/api-reference/reference'],
        // },
        // {
        //   collapsable: false,
        //   title: '📚 Resources',
        //   children: [
        //     [
        //       'https://github.com/strapi/strapi/blob/master/CONTRIBUTING.md',
        //       'Contributing guide',
        //     ],
        //     '/3.x.x/migration-guide/',
        //     '/3.x.x/articles/',
        //   ],
        // },
      ]
    },
  },
};

function createContainer(className) {
  return [
    container,
    className,
    {
      render(tokens, idx) {
        const token = tokens[idx];
        if (token.nesting === 1) {
          return `<div class="${className} custom-block">\n`;
        } else {
          return `</div>\n`;
        }
      },
    },
  ];
}
