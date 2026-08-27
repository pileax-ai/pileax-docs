<template>
  <div class="support-page">
    <!-- Banner -->
    <section class="banner VPHero">
      <h1 class="slogan" data-aos="fade-up" data-aos-delay="100">
        <gradient-text :text="t('support.get')"
                       :colors="['#ffffff', '#3f51b5', '#8247E5', '#00bcd4', '#ffffff']"
                       :animation-speed="8"
                       show-border />
      </h1>
      <div class="tagline" data-aos="fade-up" data-aos-delay="100">
        {{ t('support.desc') }}
      </div>
    </section>

    <!-- Features -->
    <feature-card header-aos="fade-up"
                  header-aos-delay="100">
      <features :items="readingFeatures"
                data-aos="fade-up"
                data-aos-delay="100"
                dense />
    </feature-card>

    <!-- More Screenshots -->
    <feature-card :title="t('contact')"
                  :desc="t('contact.desc')"
                  data-aos="fade-up" >
      <section class="contact-container wechat">
        <VpvImage
          :imageConfig="{
          image: '/images/qr-pileax-wechat.png',
        }"
          width="200px"
          enableZoom
        />
      </section>

      <section class="contact-container email">
        <pi-button class="brand"
                   icon="mail"
                   icon-size="24px"
                   to="mailto:support@pileax.ai">
          support@pileax.ai
        </pi-button>
      </section>
    </feature-card>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import useCommon from '../../../hooks/useCommon'

import { Features, FeatureCard, GradientText, PiButton } from '../index'

const { t } = useCommon()

const readingFeatures = computed(() => {
  return [
    {
      label: 'Github',
      value: 'github',
      icon: 'github',
      link: 'https://github.com/pileax-ai/pileax',
      linkTarget: '_blank',
    },
    {
      label: 'Discord',
      value: 'discord',
      icon: 'discord',
      link: 'https://discord.gg/8QQWYXF8Vd',
      linkTarget: '_blank',
    },
    {
      label: 'Telegram',
      value: 'telegram',
      icon: 'telegram',
      link: 'https://t.me/pileax_ai',
      linkTarget: '_blank',
    },
  ]
})

</script>

<style lang="scss">
.vp-doc:has(.support-page) {
  max-width: 1000px;
}

.support-page {
  .contact-container {
    display: flex;
    justify-content: center;
    padding-top: 2rem;
  }
  .vpv-image-containers {
    width: 100% !important;
    padding: 2rem 0;
    justify-content: center;

    img {
      width: 200px !important;
    }
  }

  .pi-feature-card {
    margin-top: 0;

    &:last-child {
      margin-top: 100px;
    }

    .image-container {
      margin: 50px 0;
    }

    .pi-features {
      .icon {
        background-color: unset!important;
        width: 40px !important;
        height: 40px !important;

        svg {
          width: 100% !important;
          height: 100% !important;

          &.discord {
            color: #5865F2;
          }
          &.telegram {
            color: #0088CC;
          }
        }
      }
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
      margin-top: 20px;
      font-size: 20px;
      color: var(--vp-c-text-2);
    }

    .version {
      margin-top: 4px;
      color: var(--vp-c-text-3);
    }
  }

}
</style>