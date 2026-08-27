<template>
  <footer class="custom-footer VPFooter">
    <div class="container">
      <div class="copyright">
        <p>Copyright © 2025-present PileaX.</p>
      </div>
      <div class="links">
        <nav>
          <template v-for="(item, _index) in links" :key="_index">
            <a :href="item.path" :class="{'active': item.active }">
              <span>{{ item.label }}</span>
            </a>
          </template>
        </nav>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vitepress'
import useCommon from '../../../hooks/useCommon.ts'

const route = useRoute()
const { t, buildPath } = useCommon()

const links = computed(() => {
  const list = [
    { label: t('download'), path: '/download' },
    { label: t('guide'), path: '/guide/getting-started' },
    { label: t('blog'), path: '/blog' },
    { label: t('agreement'), path: '/agreement' },
    { label: t('privacy'), path: '/privacy' },
    { label: t('contact'), path: '/support' },
  ]
  return list.map(item => {
    const path = buildPath(item.path)
    return {
      label: item.label,
      path: path,
      active: route.path === path
    }
  })
})
</script>

<style scoped>
.custom-footer {
  position: relative;
  z-index: var(--vp-z-index-footer);
  border-top: 1px solid var(--vp-c-gutter);
  padding: 32px 24px;
  background-color: var(--vp-c-bg);
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    width: 100%;
    max-width: calc(var(--vp-layout-max-width) - 64px);
    display: flex;
    justify-content: space-between;
    align-items: center;

    .copyright {
      color: var(--vp-c-text-2);
      font-size: 14px;
    }

    nav {
      display: flex;
      a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        //line-height: var(--vp-nav-height);
        font-size: 14px;
        font-weight: 500;
        color: var(--vp-c-text-1);
        transition: color 0.25s;

        &.active, &:hover {
          color: var(--vp-c-brand-1);
        }
      }
    }
  }
}


@media (max-width: 768px) {
  .custom-footer .container {
    justify-content: center;

    .links {
      display: none;
    }
  }
}
</style>
