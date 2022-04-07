<template>
  <section class="grid grid-cols-3 bg-gray-700">
    <div class="col-span-1">
      <slot name="aboutImage"></slot>
    </div>
    <div class="grid grid-cols-1 gap-10 col-span-2">
      <h2 class="sm:text-xl md:text-5xl text-white mx-8 px-72">
        {{ aboutTitle }}
      </h2>
      <p class="sm:text-lg md:text-2xl text-gray-900 mx-8 px-72">
        {{ aboutDescription }}
      </p>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  aboutTitle: {
    type: String,
    default: "About Card Title",
  },
  aboutDescription: {
    type: String,
    default: "About Card Description",
  },
});
</script>
