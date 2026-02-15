<script setup lang="ts">
defineProps<{
  onClick?: () => void;
}>();
</script>

<template>
  <button
    @click="onClick"
    class="relative bg-transparent border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-gray-100 hover:border-primary-500/50 transition-all duration-1000 focus:outline-none group px-8 py-4 text-lg font-medium rounded-full overflow-visible animated-border cursor-pointer flex items-center justify-center"
  >
    <!-- Animated SVG Border -->
    <svg
      class="absolute left-0 top-0 w-full h-full pointer-events-none"
      viewBox="0 0 200 60"
      preserveAspectRatio="none"
      style="overflow: visible"
    >
      <path
        d="M 30,1 A 29,29 0 0 0 1,30 L 1,30 A 29,29 0 0 0 30,59 L 170,59 A 29,29 0 0 0 199,30 L 199,30 A 29,29 0 0 0 170,1 Z"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-dasharray="400 550"
        stroke-dashoffset="400"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="animated-border-path text-primary-500"
      />
    </svg>
    <span class="relative z-10 flex items-center justify-center gap-2">
      <slot />
    </span>
  </button>
</template>

<style scoped>
.animated-border:hover .animated-border-path {
  stroke-dashoffset: 0;
  transition: stroke-dashoffset 1s ease-in-out;
}

.animated-border-path {
  stroke-dashoffset: 400;
  transition: stroke-dashoffset 1s ease-in-out;
}
</style>
