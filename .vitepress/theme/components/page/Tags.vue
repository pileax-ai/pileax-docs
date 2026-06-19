<template>
  <div class="page-tags">
    <nav>
      <div class="tags">
        <div @click="toggleTag(String(key))" v-for="(_, key) in tags"
             class="tag" :class="{ 'active': key === selectTag }">
          <div class="name">{{ key }}</div>
          <div class="count">{{ tags[key].length }}</div>
        </div>
      </div>
    </nav>
    <section class="posts">
      <a
        :href="withBase(article.regularPath)"
        v-for="(article, index) in selectTag ? tags[selectTag] : []"
        :key="index"
        class="post"
      >
        <div class="title">
          {{ article.frontMatter.title }}
        </div>
        <div class="date">
          {{ article.frontMatter.date }}
        </div>
      </a>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, onMounted } from 'vue'
import { useData, withBase } from 'vitepress'
import { initTags } from '../../utils/blogUtil'

const { theme } = useData()
const selectTag = ref('')
const tags = computed(() => initTags(theme.value.posts))

const toggleTag = (value: string) => {
    selectTag.value = value
}

const initTag = () => {
  const url = location.href.split('?')[1]
  const params = new URLSearchParams(url)
  const tag = params.get('tag') ? params.get('tag') : ''
  if (tag) {
    selectTag.value = tag
  } else {
    const defaultDisplayTag = Object.keys(tags.value)[0]
    if (defaultDisplayTag) {
      toggleTag(defaultDisplayTag)
    }
  }
}

onMounted(initTag)
</script>

<style scoped>
.page-tags {
  width: 100%;
  display: flex;
  gap: 1rem;

  nav {
    width: 240px;
    border-radius: 8px;
    background: var(--vp-sidebar-bg-color);

    .tags {
      display: flex;
      flex-wrap: wrap;
      padding: 8px;
      gap: 2px;

      .tag {
        width: 100%;
        display: inline-flex;
        justify-content: space-between;
        padding: 6px 8px;
        font-size: 0.875rem;
        background-color: var(--vp-c-bg-alt);
        border-radius: 8px;
        color: var(--vp-c-text-1);
        cursor: pointer;

        &:hover, &.active {
          color: white;
          background: var(--vp-c-brand);
        }
      }
    }
  }

  .posts {
    flex: 1;
    width: 100%;

    .post {
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-decoration: none;
      color: unset;
      padding: 10px;
      border-radius: 4px;
      cursor: pointer;

      &:hover {
        color: var(--vp-c-brand);
        background-color: var(--vp-c-bg-soft);
      }

      .title {
        font-weight: 600;
      }

      .date {
        font-size: 0.85rem;
        color: var(--vp-c-text-3);
      }
    }
  }
}

@media (max-width: 768px) {
  .page-tags {
    flex-direction: column;
  }

  nav {
    flex: none;
    width: 100% !important;

    .tag {
      width: calc(50% - 2px) !important;
    }
  }

  .posts {
    flex: none;
    width: 100%
  }
}
</style>
