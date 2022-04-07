<template>
  <div
    class="sm:flex sm:flex-col-reverse md:grid md:grid-cols-3 py-10 bg-gray-700"
  >
    <div class="col-span-1 text-center m-6">
      <div class="flex flex-col py-10">
        <h1 class="sm:text-3xl md:text-6xl text-white m-6">{{ heroTitle }}</h1>
        <slot name="hero-description"></slot>
      </div>
      <div class="flex flex-col justify-between gap-10">
        <NuxtLink
          class="bg-white text-gray-900 rounded-full text-base text-center sm:mx-20 md:mx-40 p-6"
          to="/blog"
          >Read the Blog
        </NuxtLink>

        <NuxtLink
          class="bg-gray-900 text-white focus:border-blue-400 rounded-full text-base text-center sm:mx-20 md:mx-40 p-6"
          to="/about"
          >About us
        </NuxtLink>
      </div>
    </div>
    <div class="col-span-2">
      <slot name="hero-image"></slot>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  heroTitle: {
    type: String,
    default: "Hero Title",
  },
});
</script>
