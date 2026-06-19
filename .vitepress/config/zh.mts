import { defineConfig } from 'vitepress'
import { nav } from './theme/nav'
import { sidebarGuide } from './theme/sidebar'
import { labels } from './theme/labels'
import { name, docsRepo, descriptionZh } from '../meta'
import { getPosts } from '../theme/utils/serverUtil'

const locale = 'zh';

export default async () => {
  const [posts] = await Promise.all([
    getPosts(locale),
  ])

  return defineConfig({
    title: name,
    description: descriptionZh,
    themeConfig: {
      ...labels(locale),
      posts: posts,
      pageSize: 5,
      postLength: posts.length,
      nav: nav(locale),
      sidebar: {
        '/zh/guide/': { base: '/zh/guide/', items: sidebarGuide(locale) },
      },
      editLink: {
        pattern: `${docsRepo}/edit/main/src/:path`,
        text: "编辑此页",
      },
    },
    head: [
    ],
  })
}