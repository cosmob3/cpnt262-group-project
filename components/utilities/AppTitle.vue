<template>
  <div>
    <h3>{{ title }}</h3>
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
