<template>
  <div class="reading-page">
    <!-- Banner -->
    <section class="banner VPHero">
      <h1 class="slogan" data-aos="fade-up" data-aos-delay="100">
        <gradient-text :text="t('app.feature.reading')"
                       :colors="['#ffffff', '#3f51b5', '#8247E5', '#00bcd4', '#ffffff']"
                       :animation-speed="8"
                       show-border />
      </h1>
      <div class="tagline" data-aos="fade-up" data-aos-delay="100">
        {{ t('app.feature.reading.desc') }}
      </div>
    </section>

    <!-- Main Screenshot -->
    <section class="screenshot" data-aos="fade-up" data-aos-delay="200">
      <img :src="`/images/${lang}/reading/bookshelf${isDark ? '-dark' : ''}.webp`" alt="Bookshelf" v-if="false" />

      <VpvImage
        :imageConfig="{
          image: `/images/${lang}/reading/bookshelf.webp`,
          image_dark: `/images/${lang}/reading/bookshelf-dark.webp`,
        }"
        enableZoom
      />
    </section>

    <!-- Features -->
    <feature-card :tag="t('features')"
                  :title="t('app.feature.library')"
                  :desc="t('app.feature.library.desc')"
                  header-aos="fade-up"
                  header-aos-delay="100">
      <features :items="readingFeatures"
                data-aos="fade-up"
                data-aos-delay="100" />
    </feature-card>

    <!-- More Screenshots -->
    <feature-card :tag="t('app.feature.reader')"
                  :title="t('app.feature.reader')"
                  :desc="t('app.feature.reader.desc')"
                  data-aos="fade-up" >

      <features :items="readerFeatures" dense
                item-aos="zoom-in-up"
                item-aos-delay="100" />

      <div class="image-container">
        <VpvImage
          :imageConfig="{
            image: `/images/${lang}/reading/reader-vertical.webp`,
          }"
          class="shadow"
          enableZoom
        />
      </div>
      <div class="image-container">
        <VpvImage
          :imageConfig="{
            image: `/images/${lang}/reading/reader-horizontal.webp`,
          }"
          class="shadow"
          enableZoom
        />
      </div>
      <div class="image-container">
        <VpvImage
          :imageConfig="{
            image: `/images/${lang}/reading/reader.webp`,
            image_dark: `/images/${lang}/reading/reader-dark.webp`,
          }"
          class="shadow"
          enableZoom
        />
      </div>
    </feature-card>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

import useCommon from '../../../hooks/useCommon'

import { Features, FeatureCard, GradientText } from '../index'

const { isDark } = useData()
const { lang, t } = useCommon()

const readingFeatures = computed(() => {
  const linkPrefix = lang.value === 'zh' ? '/zh' : ''
  return [
    {
      label: t('reader.feature.shelf'),
      value: 'shelf',
      icon: 'chat',
      caption: t('reader.feature.shelf.desc'),
      link: `${linkPrefix}/guide/reading/shelf`
    },
    {
      label: t('reader.feature.collection'),
      value: 'collection',
      icon: 'notes',
      caption: t('reader.feature.collection.desc'),
      link: `${linkPrefix}/guide/reading/collection`
    },
    {
      label: t('reader.feature.annotation'),
      value: 'annotation',
      icon: 'library',
      caption: t('reader.feature.annotation.desc'),
      link: `${linkPrefix}/guide/reading/annotation`
    },
  ]
})

const readerFeatures = computed(() => {
  const linkPrefix = lang.value === 'zh' ? '/zh' : ''
  return [
    {
      label: t('fonts'),
      icon: 'library',
      link: `${linkPrefix}/guide/reading/fonts`
    },
    {
      label: t('styles'),
      icon: 'palette',
      link: `${linkPrefix}/guide/reading/styles`
    },
    {
      label: t('background'),
      icon: 'image',
      link: `${linkPrefix}/guide/reading/background`
    },
  ]
})
</script>

<style lang="scss">
.reading-page {


  .pi-feature-card {
    margin-top: 100px;

    .image-container {
      margin: 50px 0;
    }
  }

  .shadow {
    border-radius: 14px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
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

    .action .pi-button {
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