const container = require('markdown-it-container');

const ogprefix = 'og: http://ogp.me/ns#';
const title = 'letsGo Documentation';
const description = 'A go to framework for RESTful API';
const color = '#2F80ED';
const author = 'Sab94';
const url = 'https://letsgo-framework.github.io/';

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
  base: '/',
  themeConfig: {
    repo: 'letsgo-framework/letsgo-docs',
    website: 'https://letsgo-framework.github.io/',
    slack: 'https://slack.letsgo.io',
    blog: 'https://blog.letsgo.io',
    editLinks: true,
    editLinkText: 'Improve this page',
    serviceWorker: true,
    hiddenLinks: ['/cli/CLI.html', '/api-reference/reference.html'],
    sidebar: [
      {
        collapsable: false,
        title: '🚀 Getting started',
        children: [
          '/getting-started/introduction',
          '/getting-started/install-requirements',
          '/getting-started/quick-start',
          '/getting-started/quick-tutorial'
        ],
      },
      {
        collapsable: true,
        title: '💡 Guides',
        children: [
          '/concepts/concepts',
          '/guides/controllers',
          '/guides/environment',
          '/guides/databases',
          '/guides/deployment',
          '/guides/types',
          '/guides/log',    ]
      },
      {
        collapsable: true,
        title: '💻 Command Line Interface',
        children: ['/cli/CLI'],
      },
      {
        collapsable: false,
        title: '📚 Resources',
        children: [
          '/articles/articles',
        ],
      },
    ]
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
