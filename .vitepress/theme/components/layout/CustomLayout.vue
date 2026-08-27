<template>
  <Layout>
    <template #doc-before>
      <div v-if="frontmatter.type === 'post'" class="post-before post">
        <h1>{{frontmatter.title}}</h1>
        <div class="meta">
          <div class="date">{{ timeMulti(frontmatter.date, 'MMM DD, YYYY').timestamp() }}</div>
          <div class="tags" v-if="frontmatter.tags">
            <div class="tag" v-for="(tag, index) in frontmatter.tags"
                 :key="index"
                 @click="openUrl(`/pages/tags?tag=${tag}`)">
              {{ tag }}
            </div>
          </div>
        </div>
      </div>

      <breadcrumb></breadcrumb>
    </template>
    <template #doc-after>
      <div v-if="frontmatter.type === 'post'" class="post-after">
        <comment-giscus />
      </div>
    </template>

    <template #layout-bottom>
      <custom-footer v-if="showFooter"></custom-footer>
    </template>
  </Layout>
</template>

<script lang="ts" setup>
import { computed, watch, nextTick } from 'vue'
import { useData, useRoute } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import useCommon from '../../../hooks/useCommon'
import { CustomFooter, Breadcrumb, CommentGiscus } from '../../components/index'

const { Layout } = DefaultTheme
const { frontmatter } = useData()
const route = useRoute()
const { openUrl, timeMulti } = useCommon()

const showFooter = computed(() => {
  return frontmatter.value.layout === 'home' || frontmatter.value.footer === true
})

watch(
  () => route.path,
  async () => {
    if (frontmatter.value.type === 'post') {
      return
    }

    await nextTick()

    const badges = document.querySelectorAll('#giscus')
    badges.forEach(el => {
      el.remove()
    })
  },
  { immediate: true }
)
</script>

<style scoped>
.post-before {
  margin-bottom: 1rem;

  .meta {
  }
}
</style>
