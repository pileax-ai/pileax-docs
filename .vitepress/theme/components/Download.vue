<template>
  <div class="download-page">
    <div class="banner VPHero">
      <h1 class="name clip">{{ t('download') }} <span>PileaX</span></h1>
      <div class="desc">Free for macOS, Windows and Linux</div>
      <div class="version">{{ config?.version }}</div>
    </div>

    <div class="VPFeatures">
      <div class="container">
        <div class="items">
          <div class="item">
            <article class="VPFeature">
              <div class="icon">🚀</div>
              <div class="meta">
                <div class="title">macOS</div>
                <div class="caption">Intel & Apple Silicon</div>
              </div>
              <div class="actions">
                <div class="action" v-for="(item, index) in macosFiles" :key="`macos-${index}`">
                  <a class="VPButton medium brand"
                     :class="{ 'outline': item.url.indexOf('x64') > 0 }"
                     :href="`${yamlBaseUrl}/${item.url}`">
                    {{ item.url.indexOf('x64') > 0 ? 'Intel' : 'Apple Silicon' }}
                  </a>
                </div>
              </div>
            </article>
          </div>
          <div class="item">
            <article class="VPFeature">
              <div class="icon">🚀</div>
              <div class="meta">
                <div class="title">Windows</div>
                <div class="caption">Windows 10+</div>
              </div>
              <div class="actions">
                <div class="action" v-for="(item, index) in windowsFiles" :key="`windows-${index}`">
                  <a class="VPButton medium brand"
                     :class="{ 'outline': item.url.indexOf('x86') > 0 }"
                     :href="`${yamlBaseUrl}/${item.url}`">
                    Installer {{ item.url.indexOf('x86') > 0 ? 'x86' : 'x86_64' }}
                  </a>
                </div>
              </div>
            </article>
          </div>
          <div class="item">
            <article class="VPFeature">
              <div class="icon">🚀</div>
              <div class="meta">
                <div class="title">Linux</div>
                <div class="caption">Main Distributions</div>
              </div>
              <div class="actions">
                <div class="action" v-for="(item, index) in windowsFiles" :key="`windows-${index}`">
                  <a class="VPButton medium brand"
                     :class="{ 'outline': item.url.indexOf('x86') > 0 }"
                     :href="`${yamlBaseUrl}/${item.url}`">
                    AppImage {{ item.url.indexOf('x86') > 0 ? 'x86' : 'x86_64' }}
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import yaml from 'js-yaml'
import { tr } from '../../i18n'


interface UpdateConfigFile {
  url: string
  size: number
  sha512: string
}

interface UpdateConfig {
  version: string
  path: string
  sha512: string
  files: UpdateConfigFile[]
  releaseDate?: string
  [key: string]: any
}

const yamlBaseUrl = 'https://file.pileax.ai/updater/desktop'
const props = defineProps({
  locale: {
    type: String,
    default: 'en'
  }
})

const loading = ref(false)
const config = ref<UpdateConfig>()

const macosFiles = computed(() => {
  return config.value?.files?.filter(item => item.url.indexOf('dmg') > 0) || []
})
const windowsFiles = computed(() => {
  return config.value?.files?.filter(item => item.url.indexOf('exe') > 0) || []
})
const linuxFiles = computed(() => {
  return config.value?.files?.filter(item => item.url.indexOf('AppImage') > 0) || []
})

const t = (key: string) => {
  return tr(props.locale, key)
}

const fetchMeta = async () => {
  try {
    loading.value = true
    const response = await fetch('/update.yml')
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const yamlText = await response.text()
    config.value = yaml.load(yamlText) as UpdateConfig
  } catch (err: any) {
    console.error('Failed to fetch/parse YAML:', err)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchMeta()
})
</script>

<style>
.download-page {
  .banner {
    margin-top: 40px;
    text-align: center;

    .name {
      font-size: 40px;
    }

    .desc {
      margin-top: 20px;
      color: var(--vp-c-text-1);
    }

    .version {
      margin-top: 4px;
      color: var(--vp-c-text-3);
    }
  }

  .VPFeatures {
    padding: 40px 24px;


    .VPFeature {
      display: block;
      border: 1px solid var(--vp-c-bg-soft);
      border-radius: 12px;
      height: 100%;
      background-color: var(--vp-c-bg-soft);
      transition: border-color 0.25s, background-color 0.25s;
      padding: 48px 24px;
      text-align: center;

      &:hover {
        border-color: var(--vp-c-brand-1);
        background-color: var(--vp-c-bg-soft-up);
      }

      .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 6px;
        background-color: var(--vp-c-default-soft);
        width: 48px;
        height: 48px;
        font-size: 24px;
        transition: background-color 0.25s;
        margin: 0 auto;
      }

      .meta {
        margin: 20px 0;
      }

      .title {
        line-height: 24px;
        font-size: 24px;
        font-weight: 600;
        color: var(--vp-c-text-1);
      }

      .caption {
        font-size: 12px;
        font-weight: 600;
        color: var(--vp-c-text-3);
      }

      .details {
        flex-grow: 1;
        padding-top: 8px;
        line-height: 24px;
        font-size: 14px;
        font-weight: 500;
        color: var(--vp-c-text-2);
      }
    }

    .container {
      margin: 0 auto;
      max-width: 1152px;
    }
    .items {
      display: flex;
      flex-wrap: wrap;
      margin: -8px;
    }
    .item {
      padding: 8px;
      width: 100%;
    }
  }

  .actions {
    .action:not(:first-child) {
      margin-top: 10px;
    }
  }

  .VPButton {
    display: inline-block;
    border: 1px solid transparent;
    text-align: center;
    font-weight: 600;
    white-space: nowrap;
    transition: color 0.25s, border-color 0.25s, background-color 0.25s;
    border-radius: 10px;
    padding: 0 20px;
    line-height: 38px;
    font-size: 14px;
    text-decoration: none;
    width: 100%;
    max-width: 200px;

    &.brand  {
      border-color: var(--vp-button-brand-border);
      color: var(--vp-button-brand-text);
      background-color: var(--vp-button-brand-bg);
    }

    &.outline {
      border-color: var(--vp-button-brand-bg);
      background-color: transparent!important;
      color: inherit !important;
    }
  }

  @media (min-width: 640px) {
    .VPFeatures {
      padding: 48px 48px;

      .item { width: calc(100% / 2); }
    }
  }

  @media (min-width: 960px) {
    .VPFeatures {
      padding: 64px 64px;

      .item { width: calc(100% / 3); }
    }
  }

}
</style>