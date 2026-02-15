<script setup lang="ts">
useHead({
  title: "Contact | Abdisa Ketema",
  meta: [
    {
      name: "description",
      content: "Get in touch with Abdisa Ketema for web development projects.",
    },
  ],
});

const form = reactive({
  name: "",
  email: "",
  message: "",
});

const isSubmitting = ref(false);
const showSuccess = ref(false);

const handleSubmit = async () => {
  isSubmitting.value = true;
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1500));
  isSubmitting.value = false;
  showSuccess.value = true;

  // Reset form after delay
  setTimeout(() => {
    form.name = "";
    form.email = "";
    form.message = "";
    showSuccess.value = false;
  }, 3000);
};
</script>

<template>
  <div
    class="min-h-screen py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex items-center justify-center"
  >
    <div
      class="w-full max-w-4xl grid md:grid-cols-2 gap-0 bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700"
    >
      <!-- Contact Info / Visual Side -->
      <div
        class="bg-gradient-to-br from-gray-900 to-gray-800 p-10 text-white flex flex-col justify-between relative overflow-hidden"
      >
        <div
          class="absolute top-0 right-0 w-64 h-64 bg-primary-500 opacity-20 rounded-full -mr-32 -mt-32 blur-3xl"
        ></div>
        <div
          class="absolute bottom-0 left-0 w-64 h-64 bg-secondary-500 opacity-20 rounded-full -ml-32 -mb-32 blur-3xl"
        ></div>

        <div class="relative z-10">
          <h2 class="font-display text-3xl font-bold mb-6">
            Let's start a conversation
          </h2>
          <p class="text-gray-300 mb-8 leading-relaxed">
            Interested in working together? Have a question? Fill out the form
            and I'll get back to you as soon as possible.
          </p>

          <div class="space-y-6">
            <div class="flex items-center space-x-4">
              <div class="p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                <Icon name="lucide:mail" class="w-6 h-6 text-primary-400" />
              </div>
              <div>
                <p class="text-sm text-gray-400">Email me at</p>
                <a
                  href="mailto:meetabdisa@gmail.com"
                  class="font-medium hover:text-primary-400 transition-colors"
                  >meetabdisa@gmail.com</a
                >
              </div>
            </div>

            <div class="flex items-center space-x-4">
              <div class="p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                <Icon name="lucide:map-pin" class="w-6 h-6 text-primary-400" />
              </div>
              <div>
                <p class="text-sm text-gray-400">Location</p>
                <p class="font-medium">Ethiopia</p>
              </div>
            </div>
          </div>
        </div>

        <div class="relative z-10 mt-12 flex space-x-4">
          <a
            href="https://github.com/devabdisa"
            target="_blank"
            class="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            <Icon name="lucide:github" class="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/abdisa-ketema/"
            target="_blank"
            class="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            <Icon name="lucide:linkedin" class="w-5 h-5" />
          </a>
          <a
            href="https://www.youtube.com/@ethiopandatech"
            target="_blank"
            class="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            <Icon name="lucide:youtube" class="w-5 h-5" />
          </a>
        </div>
      </div>

      <!-- Form Side -->
      <div class="p-10 relative bg-white dark:bg-gray-900">
        <div
          v-if="showSuccess"
          class="absolute inset-0 bg-white dark:bg-gray-900 flex flex-col items-center justify-center z-20 animate-fade-in text-center p-8"
        >
          <div
            class="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4 text-green-500"
          >
            <Icon name="lucide:check" class="w-8 h-8" />
          </div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Message Sent!
          </h3>
          <p class="text-gray-600 dark:text-gray-400">
            Thanks for reaching out. I'll be in touch shortly.
          </p>
        </div>

        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div>
            <label
              for="name"
              class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >Name</label
            >
            <input
              v-model="form.name"
              type="text"
              id="name"
              required
              class="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all placeholder:text-gray-400"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label
              for="email"
              class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >Email</label
            >
            <input
              v-model="form.email"
              type="email"
              id="email"
              required
              class="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all placeholder:text-gray-400"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label
              for="message"
              class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >Message</label
            >
            <textarea
              v-model="form.message"
              id="message"
              rows="4"
              required
              class="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all placeholder:text-gray-400"
              placeholder="Tell me about your project..."
            ></textarea>
          </div>

          <button
            type="submit"
            :disabled="isSubmitting"
            class="w-full py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold rounded-lg hover:opacity-90 transition-all shadow-lg shadow-gray-500/20 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed text-lg"
          >
            <Icon
              v-if="isSubmitting"
              name="lucide:loader-2"
              class="w-5 h-5 mr-2 animate-spin"
            />
            <span>{{ isSubmitting ? "Sending..." : "Send Message" }}</span>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
