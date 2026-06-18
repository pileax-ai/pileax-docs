<template>
  <div class="pi-feature-card">
    <header :data-aos="headerAos"
            :data-aos-delay="headerAosDelay">
      <div :class="tagClass">
          <span class="text-accent text-bold text-uppercase">
            {{ tag }}
          </span>
      </div>
      <h1 class="text-center">
        {{ title }}
      </h1>
      <div class="text-center caption">
        {{ desc }}
      </div>
    </header>

    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineProps({
  tag: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  desc: {
    type: String,
    default: ''
  },
  tagClass: {
    type: String,
    default: ''
  },
  headerAos: {
    type: String,
    default: ''
  },
  headerAosDelay: {
    type: String,
    default: ''
  },
})
</script>

<style lang="scss">
.pi-feature-card {
  h1 {
    margin: 18px 0;
    font-size: 40px;
    font-weight: 600;
  }
  .caption {
    font-size: 18px;
    color: var(--vp-c-text-3);
  }
}
</style>