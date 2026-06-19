<template>
  <div class="blog-page">
    <!-- Posts -->
    <div class="post-list">
      <article
        v-for="item in currentPagePosts"
        :key="item.regularPath"
        class="post-item post"
      >
        <a class="title" @click="openUrl(item.regularPath)">
          {{ item.frontMatter.title }}
        </a>

        <div class="meta">
          <div class="date">{{ timeMulti(item.frontMatter.date, 'MMM DD, YYYY').timestamp() }}</div>
          <div class="tags" v-if="item.frontMatter.tags">
            <div class="tag"
                 v-for="(tag, index) in item.frontMatter.tags"
                 :key="index" @click="openUrl(`/pages/tags?tag=${tag}`)">
              {{ tag }}
            </div>
          </div>
        </div>

        <div class="desc">{{ item.frontMatter.description }}</div>
      </article>
    </div>

    <!-- Pagination -->
    <div v-if="totalPages > 1" class="pagination">
      <pi-button :label="t('theme.prev')"
                 class="brand left"
                 :class="{ 'show': currentPage > 1 }"
                 icon="arrow_left_alt"
                 icon-size="24px"
                 dense
                 @click="goToPage(currentPage - 1)" />

      <div>{{ `${currentPage}/${totalPages}` }}</div>

      <pi-button :label="t('theme.next')"
                 class="brand right"
                 :class="{ 'show': currentPage < totalPages }"
                 icon-right="arrow_right_alt"
                 icon-size="24px"
                 dense
                 @click="goToPage(currentPage + 1)" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useData } from 'vitepress'
import { PiButton } from '../index'
import useCommon from '../../../hooks/useCommon'
import type { Post } from '../../utils/serverUtil'

const { theme } = useData()
const { t, openUrl, timeMulti } = useCommon()

const allPosts = computed<Post[]>(() => {
  const posts: Post[] = theme.value.posts ?? []
  return posts.filter((item) => !item.regularPath.includes('index'))
})

const pageSize = computed<number>(() => theme.value.pageSize ?? 5)
const totalPages = computed(() => Math.ceil(allPosts.value.length / pageSize.value))

const currentPage = ref(1)

const currentPagePosts = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value
  return allPosts.value.slice(start, start + pageSize.value)
})

function goToPage(page: number): void {
  currentPage.value = page
  window.scrollTo({
    top: 0,
    behavior: 'auto'
  })
}
</script>

<style lang="scss" scoped>
.blog-page {
  padding: 30px 0;
}

.post-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .post-item {
    width: 100%;
    max-width: 800px;
    display: block;
    border-radius: 10px;
    padding: 22px 26px;
    margin: 10px;
    background-color: var(--vp-c-bg-soft);
    border: 1px solid var(--vp-c-bg-soft);
    text-decoration: none;

    &:hover {
      .title {
        color: var(--vp-c-brand);
      }
    }
  }

  .title {
    color: var(--vp-c-brand-light);
    font-size: 1.4em;
    font-weight: bold;
    margin-bottom: 4px;
  }

  .meta {
    margin-bottom: 12px;
  }
}

.pagination {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 800px;
  margin: 20px auto;
  position: relative;

  .pi-button {
    visibility: hidden;

    &.show {
      visibility: visible;
    }
  }
}

</style>
