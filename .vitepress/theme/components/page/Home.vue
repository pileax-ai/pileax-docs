<template>
  <div class="home-page">
    <!-- Banner -->
    <section class="banner VPHero">
      <div class="name" data-aos="fade-up">
        PileaX
      </div>
      <h1 class="slogan" data-aos="fade-up" data-aos-delay="100">
        <gradient-text :text="t('app.slogan')"
                       :colors="['#ffffff', '#3f51b5', '#8247E5', '#00bcd4', '#ffffff']"
                       :animation-speed="8"
                       show-border />
      </h1>
      <div class="tagline" data-aos="fade-up" data-aos-delay="100">
        {{ t('app.tags.tag1') }} · {{ t('app.tags.tag2') }} · {{ t('app.tags.tag3') }}
      </div>
    </section>

    <!-- Main Screenshot -->
    <section class="screenshot" data-aos="fade-up" data-aos-delay="200">
      <img :src="`/screenshots/quickstart${isDark ? '-dark' : ''}.png`" alt="Quickstart" />
    </section>

    <!-- Download -->
    <section class="download"
             data-aos="fade-up"
             data-aos-delay="100">
      <div class="action">
        <pi-button class="brand"
                   icon="download"
                   icon-size="24px"
                   href="/download">
          {{ t('download') }}
        </pi-button>
      </div>
      <div class="action">
        <pi-button class="brand outline"
                   icon="github"
                   icon-size="24px"
                   label="Github"
                   href="https://github.com/pileax-ai/pileax"
                   target="_blank">
        </pi-button>
      </div>

      <div class="download-tips">
        <div class="platforms">
          <span class="text-accent">
            {{ t('free') }}
          </span>  macOS · Windows · Linux
        </div>
      </div>
    </section>

    <!-- Features -->
    <feature-card :tag="t('features')"
                  :title="t('app.feature.brief')"
                  :desc="t('app.feature.desc')"
                  header-aos="fade-up"
                  header-aos-delay="100">
      <features :items="mainFeatures"
                data-aos="fade-up"
                data-aos-delay="100" />

      <features :items="subFeatures" dense
                item-aos="zoom-in-up"
                item-aos-delay="100" />
    </feature-card>

    <!-- More Screenshots -->
    <feature-card :tag="t('screenshots')"
                  tag-class="text-center"
                  data-aos="fade-up" >
      <div>
        <img :src="`/screenshots/main${isDark ? '-dark' : ''}.gif`"
             class="shadow"
             alt="Screenshots" />
      </div>
    </feature-card>


    <!-- Reading -->
    <feature-card :tag="t('reading')"
                  tag-class="text-center"
                  data-aos="fade-up" >
      <div>
        <img :src="`/screenshots/reader${isDark ? '-dark' : ''}.gif`"
             class="shadow"
             alt="Reading" />
      </div>
    </feature-card>

  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

import useCommon from '../../../hooks/useCommon'

import { PiButton, Features, FeatureCard, GradientText } from '../index'
import SvgIcon from '../SvgIcon.vue'

const { isDark } = useData()
const { t } = useCommon()

const mainFeatures = computed(() => {
  return [
    { label: t('app.feature.chat'), value: 'chat', icon: 'chat', caption: t('app.feature.chat.desc') },
    { label: t('app.feature.note'), value: 'note', icon: 'notes', caption: t('app.feature.note.desc') },
    { label: t('app.feature.library'), value: 'library', icon: 'library', caption: t('app.feature.library.desc') },
  ]
})

const subFeatures = computed(() => {
  return [
    { label: t('app.feature.multiWorkspace'), value: 'multiWorkspace', icon: 'workspaces' },
    { label: t('app.feature.extensible'), value: 'extensible', icon: 'extension' },
    { label: t('app.feature.crossPlatform'), value: 'crossPlatform', icon: 'devices' },
    { label: t('app.feature.aiProviders'), value: 'aiProviders', icon: 'hub' },
    { label: t('app.feature.aiModels'), value: 'aiModels', icon: 'neurology' },
    { label: t('app.feature.aiAgents'), value: 'aiAgents', icon: 'smart_toy' },
    { label: t('app.feature.collaboration'), value: 'collaboration', icon: 'diversity' },
    { label: t('app.feature.editor'), value: 'editor', icon: 'widgets' },
    { label: t('app.feature.markdown'), value: 'markdown', icon: 'markdown' },
  ]
})
</script>

<style lang="scss">
.home-page {
  .pi-feature-card {
    margin-top: 100px;
  }

  .shadow {
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }

  .banner {
    margin-top: 40px;
    text-align: center;

    .name {
      font-size: 40px;
    }

    .slogan {
      font-size: 60px;
      line-height: unset;
    }

    .tagline {
      //margin-top: 20px;
      font-size: 24px;
      color: var(--vp-c-text-2);
    }

    .version {
      margin-top: 4px;
      color: var(--vp-c-text-3);
    }
  }

  .screenshot {
    margin-top: 60px;
  }


  .download {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 24px;
    margin-top: 100px;

    .action {
      width: 200px;
    }

    .download-tips {
      width: 100%;
      display: flex;
      justify-content: center;

      .platforms {
        padding: 6px 12px;
        color: var(--vp-c-text-3);
        border: solid 1px var(--vp-c-bg-soft);
        border-radius: 24px;

        span {
          margin-right: 8px;
        }
      }
    }
  }


}
</style>