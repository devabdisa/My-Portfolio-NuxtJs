<script setup lang="ts">
useHead({
  title: "Portfolio | Full Stack Developer",
  meta: [
    {
      name: "description",
      content: "Modern, minimalist portfolio for a full-stack developer.",
    },
  ],
  link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
});
</script>

<template>
  <div
    class="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300 font-sans selection:bg-primary-500 selection:text-white"
  >
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
body {
  margin: 0;
  font-family:
    "Inter",
    system-ui,
    -apple-system,
    sans-serif;
}
</style>
