<template>
  <div class="grid grid-cols-3 py-10 bg-gray-700">
    <div class="col-span-1 text-center m-6">
      <div class="flex flex-col py-10">
        <h1 class="text-6xl text-white m-6">{{ heroTitle }}</h1>
      </div>
      <div class="flex flex-col gap-10">
        <NuxtLink
          class="bg-white text-gray-900 rounded-3xl text-base text-center mx-40 p-6"
          to="/blog"
          >Read the Blog
        </NuxtLink>

        <NuxtLink
          class="bg-gray-900 text-white focus:border-blue-400 rounded-3xl text-base text-center mx-40 p-6"
          to="/about"
          >About us
        </NuxtLink>
      </div>
    </div>
    <div class="col-span-2">
      <img
        class="w-3/4"
        src="https://res.cloudinary.com/kentcdodds-com/image/upload/w_918,q_auto,f_auto/kentcdodds.com/illustrations/kody-flying_yellow"
        alt="Hero image"
      />
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
