import { defineConfig } from 'vitepress'
import { nav } from './theme/nav'
import { sidebarGuide } from './theme/sidebar'
import { labels } from './theme/labels'
import { name, description, docsRepo } from '../meta'
import { getPosts } from '../theme/utils/serverUtil'

const locale = 'en';

export default async () => {
  const [posts] = await Promise.all([
    getPosts(locale),
  ])

  return defineConfig({
    title: name,
    description: description,
    themeConfig: {
      ...labels(locale),
      posts: posts,
      pageSize: 5,
      postLength: posts.length,
      nav: nav(locale),
      sidebar: {
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