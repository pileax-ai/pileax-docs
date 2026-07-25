import { defineConfig } from 'vitepress'
import { nav } from './theme/nav'
import { sidebarDevelop, sidebarGuide } from './theme/sidebar'
import { labels } from './theme/labels'
import { name, titleZh, docsRepo, descriptionZh, keywordsZh, homeUrlZh } from '../meta'
import { getPosts } from '../theme/utils/serverUtil'
import { CustomThemeConfig } from '../theme'

const locale = 'zh';

export default async () => {
  const [posts] = await Promise.all([
    getPosts(locale),
  ])

  return defineConfig<CustomThemeConfig>({
    title: name,
    description: descriptionZh,
    themeConfig: {
      ...labels(locale),
      posts: posts,
      pageSize: 5,
      postLength: posts.length,
      nav: nav(locale),
      sidebar: {
        '/zh/develop/': { base: '/zh/develop/', items: sidebarDevelop(locale) },
        '/zh/guide/': { base: '/zh/guide/', items: sidebarGuide(locale) },
      },
      editLink: {
        pattern: `${docsRepo}/edit/main/src/:path`,
        text: "编辑此页",
      },
    },
    head: [
      ['link', { rel: 'canonical', href: homeUrlZh }],
      [
        'meta', {
          name: 'keywords',
          content: keywordsZh
        }
      ],
      ['meta', { property: 'og:title', content: titleZh }],
      ['meta', { property: 'og:description', content: descriptionZh }],
      ['meta', { property: 'og:url', content: homeUrlZh }],
      ['meta', { property: 'og:image', content: 'https://pileax.ai/images/og-image.webp' }],
      // Twitter Card
      ['meta', { name: 'twitter:card', content: 'https://pileax.ai/images/og-image.webp' }]
    ],
  })
}