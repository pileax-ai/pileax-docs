import { defineConfig } from 'vitepress'
import commonConfig from './common.mjs'
import enConfig from './en.mjs'
import zhConfig from './zh.mjs'

// https://vitepress.dev/reference/site-config
export default async () => {
  const en = await enConfig()
  const zh = await zhConfig()
  return defineConfig({
    ...commonConfig,
    locales: {
      root: {
        label: 'English',
        lang: 'en',
        ...en
      },
      zh: {
        label: '中文',
        lang: 'zh',
        ...zh
      }
    }
  })
}