<template>
  <div class="rounded-3xl text-base text-center my-5 mx-10 p-6">
    <NuxtLink to="props.btnUrl">{{ btnText }}</NuxtLink>
  </div>
</template>

<script setup>
const props = defineProps({
  btnText: {
    type: String,
    default: "Card Title",
  },
  btnUrl: {
    type: Object,
    default: "/",
  },
});
</script>
