<template>
  <NuxtLink to="/blog">
    <div>
      <slot name="card-image"></slot>
    </div>
    <div>
      <p class="sm:text-2xl md:text-4xl text-gray-700 sm:px-10 sm:py-6 md:p-10">
        {{ date }}
      </p>
      <h4 class="sm:text-3xl md:text-6xl text-white sm:px-10 sm:py-2 md:p-10">
        {{ articleTitle }}
      </h4>
    </div>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  date: {
    type: String,
    default: "Date Posted",
  },
  articleTitle: {
    type: String,
    default: "Article Title",
  },
});
</script>
