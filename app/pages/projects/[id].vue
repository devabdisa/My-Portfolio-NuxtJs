<script setup lang="ts">
const route = useRoute();
const projectId = route.params.id as string;

const { projects } = useProjects();
const project = computed(() => projects.find((p) => p.id === projectId));

if (!project.value) {
  throw createError({ statusCode: 404, statusMessage: "Project not found" });
}

useHead({
  title: `${project.value?.title} | Abdisa Ketema`,
});
</script>

<template>
  <div
    v-if="project"
    class="min-h-screen py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
  >
    <div class="mb-8" v-motion-slide-visible-once-left>
      <NuxtLink
        to="/projects"
        class="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium group"
      >
        <Icon
          name="lucide:arrow-left"
          class="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform"
        />
        Back to Projects
      </NuxtLink>
    </div>

    <div
      class="rounded-2xl overflow-hidden shadow-2xl mb-12 border border-gray-200 dark:border-gray-700"
      v-motion-fade-visible-once
    >
      <img
        :src="project.image"
        :alt="project.title"
        class="w-full object-cover max-h-[600px]"
      />
    </div>

    <div class="grid md:grid-cols-3 gap-12">
      <div class="md:col-span-2">
        <h1
          class="font-display text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
        >
          {{ project.title }}
        </h1>

        <div
          class="prose dark:prose-invert max-w-none mb-12 text-gray-600 dark:text-gray-300"
        >
          <p class="text-lg leading-relaxed mb-6">
            {{ project.fullDescription || project.description }}
          </p>

          <div v-if="project.tags" class="mt-8">
            <h3 class="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              Technologies Used
            </h3>
            <ul class="grid grid-cols-2 gap-2">
              <li
                v-for="tag in project.tags"
                :key="tag"
                class="flex items-center text-gray-600 dark:text-gray-400"
              >
                <Icon
                  name="lucide:check-circle"
                  class="w-4 h-4 text-primary-500 mr-2"
                />
                {{ tag }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="md:col-span-1">
        <div
          class="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 sticky top-24"
        >
          <h3
            class="font-display text-lg font-bold mb-4 text-gray-900 dark:text-white"
          >
            Project Links
          </h3>

          <div class="space-y-3">
            <a
              :href="project.link"
              target="_blank"
              class="w-full py-3 px-4 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors flex items-center justify-center shadow-lg shadow-primary-500/20 group"
            >
              <Icon name="lucide:external-link" class="w-4 h-4 mr-2" />
              Live Demo
            </a>
            <a
              :href="project.github"
              target="_blank"
              class="w-full py-3 px-4 bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-600 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors flex items-center justify-center group"
            >
              <Icon name="lucide:github" class="w-4 h-4 mr-2" />
              Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
