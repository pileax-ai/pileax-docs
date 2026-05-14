<template>
  <div class="pi-features">
    <div class="items main-features">
      <div class="item"
           :data-aos="itemAos"
           :data-aos-delay="itemAosDelay"
           v-for="(item, index) in items" :key="index">
        <article class="feature"
                 :class="{ 'dense': dense, 'link': item.link }"
                 @click="goTo(item)">
          <div class="icon" :class="{ 'brand': !dense }">
            <svg-icon :name="item.icon" :size="dense ? '24px' : '32px'" />
          </div>
          <span v-if="dense">{{ item.label }}</span>
          <div class="meta" v-else>
            <div class="title">{{ item.label }}</div>
            <div class="caption" v-if="item.caption">{{ item.caption }}</div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import { useRouter } from 'vitepress'
import SvgIcon from './SvgIcon.vue'

defineProps({
  items: {
    type: Array as  PropType<Indexable[]>,
    required: true
  },
  itemAos: {
    type: String,
    default: ''
  },
  itemAosDelay: {
    type: String,
    default: ''
  },
  dense: {
    type: Boolean,
    default: false
  }
})

const router = useRouter()

const goTo = (value: Indexable) => {
  if (value.link) {
    router.go(value.link)
  }
}
</script>

<style lang="scss">
.pi-features {
  padding: 1rem 0;
  margin: 0 auto;
  max-width: 1152px;

  .items {
    display: flex;
    flex-wrap: wrap;
    margin: -8px;

    .item {
      padding: 10px;
      width: 100%;

      .feature {
        display: block;
        border: 1px solid var(--vp-c-bg-soft);
        border-radius: 12px;
        height: 100%;
        background-color: var(--vp-c-bg-soft);
        transition: border-color 0.25s, background-color 0.25s;
        padding: 24px;

        &:hover {
          border-color: var(--vp-c-text-3);
        }

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

        &.link {
          &:hover {
            cursor: pointer;
            border-color: var(--vp-c-brand-1);
          }
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

          &.brand svg {
            color: var(--vp-c-brand-1);
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
  }
}

@media (min-width: 640px) {
  .pi-features {
    margin: 24px 0;

    .item {
      width: calc(100% / 2) !important;
    }
  }
}

@media (min-width: 960px) {
  .pi-features {
    margin: 40px 0;

    .item {
      width: calc(100% / 3) !important;
    }
  }
}
</style>