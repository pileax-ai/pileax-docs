import DefaultTheme from 'vitepress/theme'
import { useData, useRoute } from 'vitepress'
import type { EnhanceAppContext, Theme } from 'vitepress'
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'
// import { VPPluginTabs, VPPluginTab } from 'vitepress-plugin-tabs'
// import "vitepress-plugin-tabs/style.css";
import 'virtual:svg-icons-register'

import { watchEffect, nextTick, watch } from 'vue'
import { Download, Home, Features, GradientText, SvgIcon, VersionBadge } from './components'
import 'aos/dist/aos.css'
import './style/main.css'
import './style/vars.css'

const theme = {
  extends: DefaultTheme,
  enhanceApp({ app, router }: EnhanceAppContext) {
    // components
    app.component('Download', Download)
    app.component('Home', Home)
    app.component('Features', Features)
    app.component('GradientText', GradientText)
    app.component('SvgIcon', SvgIcon)
    app.component('VersionBadge', VersionBadge)
    // app.component('VPPluginTabs', VPPluginTabs)
    // app.component('VPPluginTab', VPPluginTab)

    // plugins
    // app.use(pinia);

    // tabs
    enhanceAppWithTabs(app)
  },
  setup() {
    const { lang } = useData()
    const route = useRoute()

    watchEffect(() => {
      if (typeof document !== 'undefined')
        document.cookie = `nf_lang=${lang.value}; expires=Sun, 1 Jan 2024 00:00:00 UTC; path=/`
    })

    // AOS
    const initAosEffect = async () => {
      // Avoid execution during SSR (Server Side Rendering)
      if ((import.meta as any).env.SSR) return

      // Dynamically import AOS to prevent build-time errors
      const AOS = (await import('aos')).default

      // Wait for the next DOM update cycle
      await nextTick()

      // A small delay ensures that Vue has fully rendered the custom components
      setTimeout(() => {
        AOS.init({
          duration: 500,
          easing: 'ease-out-quad',
          once: true,
          offset: 120,
          anchorPlacement: 'top-bottom',
        })

        // Refresh is required to detect data-aos attributes on route change
        AOS.refreshHard()
      }, 200)
    }

    // Observe route changes to re-trigger animations
    watch(
      () => route.path,
      () => initAosEffect(),
      { immediate: true } // Execute on initial load
    )
  },
} satisfies Theme;

export { theme as default };