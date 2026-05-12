<template>
  <svg class="o-svg-icon" aria-hidden="true"
       :style="`--svg-icon-color: ${color}; --svg-icon-size: ${size}`">
    <use :xlink:href="`#icon-${iconName}`" />
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue'

defineOptions({ name: 'OSvgIcon', inheritAttrs: true })
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: '1rem'
  },
})

const iconName = computed(() => {
  let name = props.name?.toLowerCase()
  if (name?.indexOf('icon-') === 0) {
    name = name.substring(5)
  }
  return name
})
</script>

<style>
.o-svg-icon {
  width: var(--svg-icon-size);
  height: var(--svg-icon-size);
  color: var(--svg-icon-color);
  fill: currentColor;
  overflow: hidden;
  display: inline-block;
}
</style>
