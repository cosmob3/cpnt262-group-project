<template>
  <div class="pb-12">
    <h3 class="sm:text-3xl md:text-6xl text-white sm:px-10 sm:py-2 md:p-10">
      {{ title }}
    </h3>
    <slot name="text"></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "Default Title",
  },
});
</script>
