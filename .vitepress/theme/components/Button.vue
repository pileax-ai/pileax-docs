<template>
  <a class="pi-button VPButton">
    <svg-icon :name="icon" :size="iconSize" />
    {{ label }}

    <slot></slot>
  </a>
</template>

<script setup lang="ts">
import SvgIcon from './SvgIcon.vue'

defineProps({
  label: {
    type: String,
    default: ''
  },
  icon: {
    type: String,
    default: ''
  },
  iconSize: {
    type: String,
    default: '1rem'
  },
})
</script>

<style lang="scss">
.pi-button {
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
  text-decoration: none !important;
  width: 100%;
  max-width: 200px;

  &:hover {
    filter: brightness(1.2);
    transform: translateY(-1px);
  }

  &.brand  {
    color: var(--vp-button-brand-text) !important;
    background-color: var(--vp-button-brand-bg) !important;
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
</style>