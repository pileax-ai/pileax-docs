<template>
  <div
    :class="`relative mx-auto flex max-w-fit flex-row items-center rounded-[1.25rem] font-medium backdrop-blur transition-shadow duration-500 overflow-hidden cursor-pointer ${className}`"
  >
    <div
      v-if="showBorder"
      class="absolute inset-0 z-0 pointer-events-none animate-gradient-container"
      :style="borderStyle"
    >
      <div
        class="absolute bg-black rounded-[1.15rem] z-[-1]"
        style="width: calc(100% - 2px); height: calc(100% - 2px); left: 50%; top: 50%; transform: translate(-50%, -50%)"
      />
    </div>

    <div
      class="px-6 py-2 inline-block relative z-10 animate-gradient-container"
      :style="textStyle"
    >
      {{ text }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface GradientTextProps {
  text: string;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
  showBorder?: boolean;
}

const props = withDefaults(defineProps<GradientTextProps>(), {
  text: '',
  className: '',
  colors: () => ['#ffaa40', '#9c40ff', '#ffaa40'],
  animationSpeed: 8,
  showBorder: false
})

const baseGradientStyle = computed(() => ({
  backgroundImage: `linear-gradient(to right, ${props.colors.join(', ')})`,
  animationDuration: `${props.animationSpeed}s`,
  backgroundSize: '300% 100%',
  '--animation-duration': `${props.animationSpeed}s`
}))

const borderStyle = computed(() => ({
  ...baseGradientStyle.value
}))

const textStyle = computed(() => ({
  ...baseGradientStyle.value,
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
  display: 'inline-block'
}))
</script>

<style lang="scss">
@keyframes gradient-move {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.animate-gradient-container {
  animation: gradient-move var(--animation-duration, 8s) linear infinite;
  background-size: 300% 100% !important;
}
</style>