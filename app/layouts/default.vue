<template>
  <div class="flex flex-col min-h-screen">
    <Navbar />
    <main class="flex-grow pt-16">
      <slot />
    </main>
    <Footer />
  </div>
</template>
