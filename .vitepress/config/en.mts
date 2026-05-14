import { defineConfig } from 'vitepress'
import { nav } from './theme/nav'
import { sidebarGuide } from './theme/sidebar'
import { labels } from './theme/labels'
import { name, description, docsRepo } from '../meta'

const locale = 'en';

export default defineConfig({
  title: name,
  description: description,
  themeConfig: {
    ...labels(locale),
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