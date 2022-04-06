<template>
  <div class="bg-slate-500">
    <h1 class="flex justify-center text-5xl">THIS IS THE ABOUT PAGE</h1>
    <div class="page-content" v-if="data">
      <div class="title text-center w-full">
        <h1 class="font-mono text-7xl text-orange-500">{{ data.companyname }}</h1>
        <h2 class="text-4xl text-orange-200">{{ data.subtitle }}</h2>
        <div
          class="
            grid grid-cols-1
            sm:grid-cols-1
            md:grid-cols-2
            lg:grid-cols-2
            xl:grid-cols-2
            gap-5
            w-4/5
            mx-auto
            my-10
          "
        >
          <div class="wrapper">
            <img :src="data.companyimage.filename" alt="" />
          </div>

          <div class="paragraph w-full my-auto mx-auto shadow-xl rounded ">
            <p class="text-2xl leading-normal text-lime-200 p-10">{{ data.description }}</p>
          </div>
        </div>
      </div>
      <!-- card-section -->
      <div
        class="
          card-section
          p-10
          grid grid-cols-1
          sm:grid-cols-1
          md:grid-cols-3
          lg:grid-cols-3
          xl:grid-cols-3
          gap-40
        "
      >
        <div class="card1 rounded overflow-hidden shadow-lg">
          <div class="image-warpper w-full max-h-60 overflow-hidden">
            <img class="w-full" :src="data.tm1photo.filename" alt="" />
          </div>
          <h2>{{ data.tm1name }}</h2>
          <p>{{ data.tm1info }}</p>
        </div>
        <div class="card2 rounded overflow-hidden shadow-lg">
          <div class="image-warpper w-full max-h-60 overflow-hidden">
            <img class="w-full" :src="data.tm2photo.filename" alt="" />
          </div>
          <h2>{{ data.tm2name }}</h2>
          <p>{{ data.tm2info }}</p>
        </div>
        <div class="card3 rounded overflow-hidden shadow-lg">
          <div class="image-warpper w-full max-h-60 overflow-hidden">
          <img class="w-full" :src="data.tm3photo.filename" alt="" />
          </div>
          <h2>{{ data.tm3name }}</h2>
          <p>{{ data.tm3info }}</p>
        </div>
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
