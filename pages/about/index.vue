<template>
  <div>
    <h1 class="flex justify-center text-5xl">THIS IS THE ABOUT PAGE</h1>
    <div class="page-content" v-if="data">
      <div class="title">
        <!-- <h1>{{ data.companyname }}</h1> -->
        <h2>{{ data.subtitle }}</h2>
        <p>{{ data.description }}</p>
      </div>
      <img :src="data.companyimage.filename" alt="" />
    <div class="card1">
      <img :src="data.tm1photo.filename" alt="">
      <h2>{{data.tm1name}}</h2>
      <p>{{data.tm1info}}</p>
    </div>
    <div class="card2">
      <img :src="data.tm2photo.filename" alt="">
      <h2>{{data.tm2name}}</h2>
      <p>{{data.tm2info}}</p>
    </div>
    <div class="card3">
      <img :src="data.tm3photo.filename" alt="">
      <h2>{{data.tm3name}}</h2>
      <p>{{data.tm3info}}</p>
    </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
// fetch data from storyblok
  const data = ref(null);
  onMounted(async () => {
    data.value = await fetch(
      "https://api.storyblok.com/v2/cdn/stories/api-content?version=draft&token=OrQeGQgBRjqxzzvELiOSFAtt&cv=1649094285"
    )
      .then((response) => response.json())
      .then(({ story }) => story.content);
  });
  </script>
