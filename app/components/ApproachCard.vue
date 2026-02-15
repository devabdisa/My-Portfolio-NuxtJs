<script setup lang="ts">
interface Props {
  title: string;
  des: string;
  order: string;
}

defineProps<Props>();

const hovered = ref(false);
</script>

<template>
  <div
    @mouseenter="hovered = true"
    @mouseleave="hovered = false"
    class="border border-black/10 dark:border-white/10 group flex items-center justify-center max-w-sm w-full mx-auto p-4 relative lg:h-[30rem] rounded-3xl bg-gray-950 overflow-hidden transition-all duration-500"
  >
    <!-- Corner Icons -->
    <Icon
      name="lucide:plus"
      class="absolute h-6 w-6 -top-3 -left-3 text-white/30"
    />
    <Icon
      name="lucide:plus"
      class="absolute h-6 w-6 -bottom-3 -left-3 text-white/30"
    />
    <Icon
      name="lucide:plus"
      class="absolute h-6 w-6 -top-3 -right-3 text-white/30"
    />
    <Icon
      name="lucide:plus"
      class="absolute h-6 w-6 -bottom-3 -right-3 text-white/30"
    />

    <!-- Animated Canvas Background (Conditional on Hover) -->
    <div v-if="hovered" class="absolute inset-0 z-0">
      <slot name="canvas" />
    </div>

    <!-- Content -->
    <div class="relative z-20 px-10 text-center">
      <!-- Icon/Order (Phase) -->
      <div
        class="mb-6 lg:mb-0 lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:group-hover:-translate-y-4 lg:group-hover:opacity-0 transition duration-300"
        :class="{
          'opacity-0 lg:opacity-100': !hovered,
          'opacity-100': !hovered,
        }"
      >
        <div class="relative inline-flex overflow-hidden rounded-full p-px">
          <span
            class="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
          />
          <span
            class="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-2 text-primary-400 backdrop-blur-3xl font-bold text-2xl"
          >
            {{ order }}
          </span>
        </div>
      </div>

      <!-- Title -->
      <h2
        class="text-white text-3xl font-bold mt-4 lg:group-hover:-translate-y-2 transition duration-300"
        :class="{ 'lg:opacity-0 lg:group-hover:opacity-100': true }"
      >
        {{ title }}
      </h2>

      <!-- Description -->
      <p
        class="text-sm mt-4 text-[#E4ECFF] lg:group-hover:-translate-y-2 transition duration-300"
        :class="{ 'lg:opacity-0 lg:group-hover:opacity-100': true }"
      >
        {{ des }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.group:hover {
  background: linear-gradient(
    90deg,
    rgba(4, 7, 29, 1) 0%,
    rgba(12, 14, 35, 1) 100%
  );
}
</style>
