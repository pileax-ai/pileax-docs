import { defineConfig, type HeadConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons-ng'
import { resolve } from 'node:path'
import { name, description, repo } from '../meta'
import { CustomThemeConfig } from '../theme'

// Google Analytics
const ga = process.env.NODE_ENV === 'production'
  ? [
      [
        'script',
        { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-7N2WL6JFRB' }
      ],
      [
        'script',
        {},
        `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-7N2WL6JFRB');`
      ]
    ] as HeadConfig[]
  : []

const softwareAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: name,
  operatingSystem: 'Windows, macOS, Linux, Web',
  applicationCategory: 'ProductivityApplication',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD'
  },
  description: description
}

// https://vitepress.dev/reference/site-config
export default defineConfig<CustomThemeConfig>({
  srcDir: './src',
  rewrites: {
    'en/:rest*': ':rest*'
  },
  cleanUrls: true,
  ignoreDeadLinks: true,
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',
    search: {
      provider: 'local',
      // options: {
      //   appId: 'LBLWR2QCI3',
      //   apiKey: '4338f265da64e33025f821af827dd22e',
      //   indexName: 'pileax'
      // }
    },
    comment: {
      repo: 'pileax-ai/pileax',
      repoId: 'R_kgDOQeykvg',
      categoryId: 'DIC_kwDOQeykvs4C_dNh'
    },
    outline: 'deep',
    socialLinks: [
      { icon: 'github', link: repo },
    ],
    footer: {
      message: 'MIT Licensed.',
      copyright: `Copyright © 2025-present ${name}`
    },
  },

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['meta', { property: 'robots', content: 'index, follow' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:image', content: 'https://pileax.ai/images/og-image.webp' }],
    // Twitter
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: 'https://pileax.ai/images/og-image.webp' }],
    ['meta', { name: 'twitter:site', content: '@pileaxai' }],
    // SoftwareApplication
    ['script', { type: 'application/ld+json' }, JSON.stringify(softwareAppSchema)],
    // GA
    ...ga
  ],

  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
    }
  },

  vite: {
    plugins: [
      createSvgIconsPlugin({
        iconDirs: [
          resolve(process.cwd(), 'src/public/icons')
        ],
      }),
    ],
    ssr: { noExternal: ['@cynber/vitepress-valence']}
  },

})