<template>
  <a href="#">
    <div>
      <h3>Featured article</h3>
      <h2>{{ featureTitle }}</h2>
      <p>{{ date }}</p>
    </div>
  </a>
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
