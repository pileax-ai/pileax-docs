import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons-ng'
import { resolve } from 'node:path'
import { keywords, name, repo } from '../meta'
import { CustomThemeConfig } from '../theme'

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
    ['meta', { name: 'keywords', content: keywords }],
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