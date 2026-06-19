<template>
  <Layout>
    <template #doc-before>
      <div v-if="frontmatter.type === 'post'" class="post-before post">
        <h1>{{frontmatter.title}}</h1>
        <div class="meta">
          <div class="date">{{ timeMulti(frontmatter.date, 'MMM DD, YYYY').timestamp() }}</div>
          <div class="tags" v-if="frontmatter.tags">
            <div class="tag" v-for="(tag, index) in frontmatter.tags" :key="index">
              {{ tag }}
            </div>
          </div>
        </div>
      </div>
    </template>
    <template #doc-after>
      After
    </template>
  </Layout>
</template>

<script lang="ts" setup>
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import useCommon from '../../../hooks/useCommon'

const { Layout } = DefaultTheme
const { frontmatter } = useData()
const { timeMulti } = useCommon()
</script>

<style scoped>
.post-before {
  margin-bottom: 1rem;
}
</style>
