<script setup lang="ts">
const { projects } = useProjects();

useHead({
  title: "Projects | Abdisa Ketema",
  meta: [
    {
      name: "description",
      content: "A selection of my recent work in web development.",
    },
  ],
});
</script>

<template>
  <div class="min-h-screen py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <div class="text-center mb-16" v-motion-fade-visible-once>
      <span
        class="text-primary-600 dark:text-primary-400 text-sm font-medium tracking-wider uppercase mb-2 block"
        >Featured Work</span
      >
      <h1
        class="font-display text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white"
      >
        Projects that speak for
        <span
          class="font-serif italic font-normal text-primary-600 dark:text-primary-400"
          >themselves</span
        >
      </h1>
      <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
        A selection of my recent work.
      </p>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
      <NuxtLink
        v-for="project in projects"
        :key="project.id"
        :to="`/projects/${project.id}`"
        class="group flex flex-col bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300 transform hover:-translate-y-1 h-full"
        v-motion-slide-visible-once-bottom
      >
        <div class="aspect-video overflow-hidden relative">
          <div
            class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10 duration-300"
          ></div>
          <img
            :src="project.image"
            :alt="project.title"
            class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
          />

          <div
            class="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
          >
            <div class="p-3 rounded-full glass bg-white/90 text-gray-900">
              <span class="text-sm font-medium">View Details</span>
            </div>
          </div>
        </div>
        <div class="p-6 flex flex-col flex-grow">
          <div class="flex justify-between items-start mb-2">
            <h3
              class="font-display text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors"
            >
              {{ project.title }}
            </h3>
            <Icon
              name="lucide:arrow-up-right"
              class="w-5 h-5 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 text-primary-500"
            />
          </div>
          <p
            class="text-gray-600 dark:text-gray-400 mb-4 text-sm line-clamp-3 leading-relaxed flex-grow"
          >
            {{ project.description }}
          </p>
          <div
            class="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-100 dark:border-gray-700"
          >
            <span
              v-for="t in project.tags"
              :key="t"
              class="px-2.5 py-1 bg-gray-100 dark:bg-gray-700/50 text-xs font-medium rounded-md text-gray-600 dark:text-gray-300"
            >
              {{ t }}
            </span>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
