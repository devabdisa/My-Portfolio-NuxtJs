<script setup lang="ts">
const isOpen = ref(false);
</script>

<template>
  <nav
    class="fixed top-0 w-full z-50 glass transition-all duration-300 border-b border-white/5"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-20 items-center">
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center">
          <NuxtLink
            to="/"
            class="font-display font-bold text-2xl tracking-tighter text-white"
          >
            Abdisa<span class="text-primary-500">.</span>
          </NuxtLink>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex space-x-10 items-center">
          <NuxtLink to="/" class="nav-link">Home</NuxtLink>
          <NuxtLink to="/projects" class="nav-link">Projects</NuxtLink>
          <NuxtLink to="/contact" class="nav-link">Contact</NuxtLink>

          <div
            class="flex items-center space-x-5 pl-8 border-l border-white/10"
          >
            <a
              href="https://github.com/devabdisa"
              target="_blank"
              class="text-gray-400 hover:text-primary-400 transition-all transform hover:scale-110"
            >
              <Icon name="lucide:github" class="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/abdisa-ketema/"
              target="_blank"
              class="text-gray-400 hover:text-primary-400 transition-all transform hover:scale-110"
            >
              <Icon name="lucide:linkedin" class="w-6 h-6" />
            </a>
          </div>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden flex items-center">
          <button
            @click="isOpen = !isOpen"
            class="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline-none p-2"
          >
            <Icon :name="isOpen ? 'lucide:x' : 'lucide:menu'" class="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      v-show="isOpen"
      class="md:hidden glass border-t border-gray-200 dark:border-gray-800 absolute w-full left-0"
    >
      <div class="px-4 pt-2 pb-6 space-y-1">
        <NuxtLink to="/" class="mobile-nav-link" @click="isOpen = false"
          >Home</NuxtLink
        >
        <NuxtLink to="/projects" class="mobile-nav-link" @click="isOpen = false"
          >Projects</NuxtLink
        >
        <NuxtLink to="/contact" class="mobile-nav-link" @click="isOpen = false"
          >Contact</NuxtLink
        >

        <div
          class="flex space-x-6 pt-4 mt-4 border-t border-gray-100 dark:border-gray-800 px-3"
        >
          <a
            href="https://github.com/devabdisa"
            target="_blank"
            class="text-gray-500 hover:text-primary-600 transition-colors"
          >
            <Icon name="lucide:github" class="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/abdisa-ketema/"
            target="_blank"
            class="text-gray-500 hover:text-primary-600 transition-colors"
          >
            <Icon name="lucide:linkedin" class="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav-link {
  @apply text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors relative py-1;
}
.nav-link::after {
  content: "";
  @apply absolute bottom-0 left-0 w-full h-0.5 bg-primary-500 scale-x-0 transition-transform duration-300 origin-right;
}
.nav-link:hover::after {
  @apply scale-x-100 origin-left;
}
.router-link-active {
  @apply text-primary-600 dark:text-primary-400;
}
.router-link-active::after {
  @apply scale-x-100;
}

.mobile-nav-link {
  @apply block px-3 py-3 rounded-lg text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary-600 dark:hover:text-primary-400 transition-colors;
}
</style>
