<template>
  <footer
    class="bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 py-12"
  >
    <div
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center"
    >
      <div class="mb-8">
        <NuxtLink
          to="/"
          class="font-display font-bold text-2xl tracking-tight text-gray-900 dark:text-white"
        >
          Abdisa<span class="text-primary-600 dark:text-primary-400">.</span>
        </NuxtLink>
      </div>

      <div class="flex space-x-8 mb-8">
        <a
          href="https://github.com/devabdisa"
          target="_blank"
          class="text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors transform hover:-translate-y-1"
        >
          <Icon name="lucide:github" class="w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/abdisa-ketema/"
          target="_blank"
          class="text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors transform hover:-translate-y-1"
        >
          <Icon name="lucide:linkedin" class="w-6 h-6" />
        </a>
        <a
          href="https://www.youtube.com/@ethiopandatech"
          target="_blank"
          class="text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors transform hover:-translate-y-1"
        >
          <Icon name="lucide:youtube" class="w-6 h-6" />
        </a>
        <a
          href="mailto:meetabdisa@gmail.com"
          class="text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors transform hover:-translate-y-1"
        >
          <Icon name="lucide:mail" class="w-6 h-6" />
        </a>
      </div>

      <p class="text-gray-500 dark:text-gray-400 text-sm">
        &copy; {{ new Date().getFullYear() }} Abdisa Ketema. All rights
        reserved.
      </p>
      <p class="text-gray-400 dark:text-gray-600 text-xs mt-2">
        Built with Nuxt.js & Tailwind CSS
      </p>
    </div>
  </footer>
</template>
