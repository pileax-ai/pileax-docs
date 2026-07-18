import { defineConfig, type DefaultTheme } from 'vitepress'
import { nav } from './theme/nav'
import { sidebarGuide, sidebarDevelop } from './theme/sidebar'
import { labels } from './theme/labels'
import { name, description, docsRepo } from '../meta'
import { getPosts } from '../theme/utils/serverUtil'
import { CustomThemeConfig } from '../theme'

const locale = 'en';

export default async () => {
  const [posts] = await Promise.all([
    getPosts(locale),
  ])

  return defineConfig<CustomThemeConfig>({
    title: name,
    description: description,
    themeConfig: {
      ...labels(locale),
      posts: posts,
      pageSize: 5,
      postLength: posts.length,
      nav: nav(locale),
      sidebar: {
        '/develop/': { base: '/develop/', items: sidebarDevelop(locale) },
        '/guide/': { base: '/guide/', items: sidebarGuide(locale) },
      },
      editLink: {
        pattern: `${docsRepo}/edit/main/src/:path`,
        text: "Edit this page",
      },
    },
    head: [
    ],
  })
}