<template>
  <div class="grid grid-cols-4 gap-x-4 pb-6 pt-14 bg-gray-800">
    <a
      class="md:flex col-span-full bg-gray-700 rounded-xl sm:m-12 md:m-60"
      href="#"
    >
      <div class="flex flex-col sm:gap-y-8">
        <h3
          class="sm:text-xl md:text-2xl text-white px-4 md:px-10 md:m-20 sm:p-6"
        >
          Featured article
        </h3>
        <div class="gap-24">
          <h2
            class="sm:text-3xl md:text-5xl text-white sm:px-4 pb-8 md:px-10 md:m-20"
          >
            {{ featureTitle }}
          </h2>
          <p
            class="sm:text-2xl md:text-3xl text-gray-500 px-4 pb-4 md:px-10 md:m-20"
          >
            {{ date }}
          </p>
        </div>
      </div>
      <div class="flex gap-y-10 self-center justify-center">
        <slot name="feature-image"></slot>
      </div>
    </a>
  </div>
</template>

<script setup>
const props = defineProps({
  featureTitle: {
    type: String,
    default: "Feature Title",
  },
  date: {
    type: String,
    default: "date posted & read time",
  },
});
</script>
