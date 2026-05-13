<template>
  <div class="home-page">
    <div class="banner VPHero">
      <div class="name" data-aos="fade-up">
        PileaX
      </div>
      <h1 class="slogan" data-aos="fade-up" data-aos-delay="100">
        <gradient-text text="All-in-one AI Knowledge Base"
                       :colors="['#ffffff', '#3f51b5', '#8247E5', '#00bcd4', '#ffffff']"
                       :animation-speed="8"
                       show-border />
      </h1>
      <div class="tagline" data-aos="fade-up" data-aos-delay="100">
        Local-first · Knowledge loop · Growing wisdom
      </div>
    </div>

    <div class="screenshot" data-aos="fade-up" data-aos-delay="200">
      <img src="/screenshots/quickstart.png" alt="Quickstart" />
    </div>

    <div class="download panel" data-aos="fade-up" data-aos-delay="300">
      <div class="action">
        <a class="VPButton medium brand"
           href="/download">
          <svg-icon name="download" size="24px" />
          Download
        </a>
      </div>
      <div class="action">
        <a class="VPButton medium brand outline"
           href="https://github.com/pileax-ai/pileax"
           target="_blank">
          <svg-icon name="github" size="24px" />
          Github
        </a>
      </div>

      <div class="download-tips">
        <div class="platforms">
          <span class="text-accent">Free</span> · macOS · Windows · Linux
        </div>
      </div>
    </div>

    <div class="VPFeatures panel" data-aos="fade-up"
         data-aos-offset="300"
         data-aos-delay="500">
      <header>
        <div>
          <span class="text-accent text-bold text-uppercase">Features</span>
        </div>
        <h1 class="text-center">
          From knowledge creation to application.
        </h1>
        <div class="text-center caption">
          Build a unified knowledge base and continuously optimizes the AI interaction experience with AI agent.
        </div>
      </header>

      <div class="container">
        <div class="items"
             data-aos="fade-up"
             data-aos-delay="600">
          <div class="item">
            <article class="VPFeature">
              <div class="icon">
                <svg-icon name="icon-apple" size="32px" />
              </div>
              <div class="meta">
                <div class="title">AI Chat</div>
                <div class="caption">Your AI assistant, ready to answer questions and tackle tasks.</div>
              </div>
            </article>
          </div>
          <div class="item">
            <article class="VPFeature">
              <div class="icon">
                <svg-icon name="icon-microsoft-windows" size="32px" />
              </div>
              <div class="meta">
                <div class="title">Notes</div>
                <div class="caption">Capture ideas and build structured knowledge with AI support.</div>
              </div>
            </article>
          </div>
          <div class="item">
            <article class="VPFeature">
              <div class="icon">
                <svg-icon name="linux" size="32px" />
              </div>
              <div class="meta">
                <div class="title">Personal Library</div>
                <div class="caption">Build your personal library and enjoy AI-powered reading.</div>
              </div>
            </article>
          </div>
        </div>

        <div class="items feature-cloud">
          <div class="item"
               data-aos="flip-left" v-for="(item, index) in features" :key="index">
            <article class="VPFeature dense">
              <div class="icon">
                <svg-icon :name="item.icon" size="24px" />
              </div>
              {{ item.label }}
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { tr } from '../../../i18n'
import GradientText from '../GradientText.vue'
import SvgIcon from '../SvgIcon.vue'

const props = defineProps({
  locale: {
    type: String,
    default: 'en'
  }
})

const features = computed(() => {
  return [
    { label: 'Multi-workspace', value: '', icon: 'apple' },
    { label: 'Extensible', value: '', icon: 'apple' },
    { label: 'Cross Platform', value: '', icon: 'apple' },
    { label: 'AI Providers', value: '', icon: 'apple' },
    { label: 'Chat/Embedding/TTS', value: '', icon: 'apple' },
    { label: 'AI Agents', value: '', icon: 'apple' },
    { label: 'Collaboration', value: '', icon: 'apple' },
    { label: 'Notion-like Editor', value: '', icon: 'apple' },
    { label: 'Markdown', value: '', icon: 'apple' },
  ]
})

const t = (key: string) => {
  return tr(props.locale, key)
}
</script>

<style lang="scss">
.home-page {
  .panel {
    margin-top: 100px;
  }

  h1 {
    font-size: 40px;
    font-weight: 600;
  }

  .banner {
    margin-top: 40px;
    text-align: center;

    .name {
      font-size: 40px;
    }

    .slogan {
      font-size: 52px;
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
    margin-top: 40px;
  }

  .VPFeatures {
    padding: 16px 0;

    header {
      h1 {
        margin: 18px 0;
      }
      .caption {
        font-size: 18px;
        color: var(--vp-c-text-3);
      }
    }

    .container {
      margin: 0 auto;
      padding-top: 40px;
      max-width: 1152px;
    }
    .items {
      display: flex;
      flex-wrap: wrap;
      margin: -8px;

      &.feature-cloud {
        margin-top: 24px;
      }
    }
    .item {
      padding: 10px;
      width: 100%;
    }

    .VPFeature {
      display: block;
      border: 1px solid var(--vp-c-bg-soft);
      border-radius: 12px;
      height: 100%;
      background-color: var(--vp-c-bg-soft);
      transition: border-color 0.25s, background-color 0.25s;
      padding: 24px;
      //text-align: center;

      &.dense {
        width: 100%;
        display: inline-flex;
        align-items: center;

        .icon {
          width: 32px;
          height: 32px;
          margin-right: 16px;
        }
      }

      &:hover {
        border-color: var(--vp-c-text-3);
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

        svg {
          //color: var(--vp-c-brand-1);
        }
      }

      .meta {
        margin-top: 20px;
      }

      .title {
        line-height: 24px;
        font-size: 20px;
        font-weight: 600;
        color: var(--vp-c-text-1);
      }

      .caption {
        margin-top: 12px;
        font-size: 12px;
        font-weight: 600;
        color: var(--vp-c-text-2);
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
  }


  .download {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 24px;

    .action {
      width: 200px;
    }
    .VPButton {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: 1px solid transparent;
      text-align: center;
      font-weight: 600;
      white-space: nowrap;
      transition: color 0.25s, border-color 0.25s, background-color 0.25s;
      border-radius: 10px;
      padding: 8px 20px;
      line-height: 38px;
      font-size: 14px;
      text-decoration: none;
      width: 100%;
      max-width: 200px;

      &:hover {
        filter: brightness(1.2);
        transform: translateY(-1px);
      }

      &.brand  {
        color: var(--vp-button-brand-text);
        background-color: var(--vp-button-brand-bg);
      }

      &.outline {
        background-color: transparent!important;
        color: inherit !important;
        border-color: var(--vp-c-text-3);

        &:hover {
          border-color: var(--vp-button-brand-bg);
        }
      }

      svg {
        margin-right: 8px;
      }
    }

    .download-tips {
      width: 100%;
      display: flex;
      justify-content: center;

      .platforms {
        padding: 4px 12px;
        color: var(--vp-c-text-3);
        border: solid 1px var(--vp-c-bg-soft);
        border-radius: 24px;
      }
    }
  }

  @media (min-width: 640px) {
    .VPFeatures {
      padding: 24px 0;

      .item { width: calc(100% / 2); }
    }
  }

  @media (min-width: 960px) {
    .VPFeatures {
      padding: 40px 0;

      .item { width: calc(100% / 3); }
    }
  }

}
</style>