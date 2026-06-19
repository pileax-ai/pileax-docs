<template>
  <button class="pi-button VPButton"
          :class="{ 'dense': dense }"
          @click="onClick">
    <svg-icon :name="icon" :size="iconSize" class="left" v-if="icon" />
    {{ label }}

    <slot></slot>
    <svg-icon :name="iconRight" :size="iconSize" class="right" v-if="iconRight" />
  </button>
</template>

<script setup lang="ts">
import SvgIcon from './SvgIcon.vue'
import useCommon from '../../../hooks/useCommon'

const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  icon: {
    type: String,
    default: ''
  },
  iconRight: {
    type: String,
    default: ''
  },
  iconSize: {
    type: String,
    default: '1rem'
  },
  to: {
    type: String,
    default: ''
  },
  target: {
    type: String,
    default: ''
  },
  dense: {
    type: Boolean,
    default: false
  },
})
const { openUrl } = useCommon()

const onClick = () => {
  if (props.to) {
    openUrl(props.to, props.target)
  }
}
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
  max-width: 200px;

  &.dense {
    padding: 2px 16px;
  }

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
    &.left {
      margin-right: 8px;
    }

    &.right {
      margin-left: 8px;
    }
  }
}
</style>