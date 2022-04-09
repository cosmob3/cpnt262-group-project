<template>
  <div class="bg-gray-800">
    <div class="page-content" v-if="data">
      <div class="title text-center w-full">
        <h1 class="font-mono text-7xl text-white">
          {{ data.companyname }}
        </h1>
        <h2 class="text-4xl text-gray-700 p-10">{{ data.subtitle }}</h2>
        <div
          class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5 w-4/5 mx-auto my-10"
        >
          <div class="wrapper">
            <img class="rounded-2xl" :src="data.companyimage.filename" alt="" />
          </div>

          <div
            class="paragraph w-full my-auto mx-auto shadow-xl rounded-xl border-solid border-neutral-100 border-2"
          >
            <p class="font-mono text-2xl leading-normal text-white p-10">
              {{ data.description }}
            </p>
          </div>
        </div>
      </div>
      <!-- card-section -->
      <div class="w-full mx-auto my-20 text-center text-white text-5xl">
        Team members
      </div>
      <div
        class="card-section p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-40 text-white text-xl"
      >
        <div
          class="card1 rounded overflow-hidden shadow-lg border-solid border-neutral-100 border-2"
        >
          <div class="image-warpper w-full max-h-80 overflow-hidden">
            <img class="object-cover" :src="data.tm1photo.filename" alt="" />
          </div>
          <h2>{{ data.tm1name }}</h2>
          <p>{{ data.tm1info }}</p>
        </div>
        <div
          class="card2 rounded overflow-hidden shadow-lg border-solid border-neutral-100 border-2"
        >
          <div class="image-warpper w-full max-h-80 overflow-hidden">
            <img class="w-full" :src="data.tm2photo.filename" alt="" />
          </div>
          <h2>{{ data.tm2name }}</h2>
          <p>{{ data.tm2info }}</p>
        </div>
        <div
          class="card3 rounded overflow-hidden shadow-lg border-solid border-neutral-100 border-2"
        >
          <div class="image-warpper w-full max-h-80 overflow-hidden">
            <img class="w-full" :src="data.tm3photo.filename" alt="" />
          </div>
          <h2>{{ data.tm3name }}</h2>
          <p>{{ data.tm3info }}</p>
        </div>
      </div>
      <!-- address cell email -->
      <div class="w-full mx-auto mt-20 text-center text-white text-5xl">
        Meet Us!
      </div>
      <div
        class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-40 py-40 mx-20"
      >
        <div class="address flex">
          <img
            class="w-1/5 rounded-xl"
            src="assets\images\addressimage.jpg"
            alt=""
          />
          <h1 class="text-white w-full m-auto px-8">{{ data.address }}</h1>
        </div>
        <div class="Tel flex">
          <img
            class="w-1/5 rounded-xl"
            src="assets\images\phonenumber.png"
            alt=""
          />
          <h1 class="text-white w-full m-auto px-8">{{ data.tel }}</h1>
        </div>
        <div class="email flex">
          <img class="w-1/5 rounded-xl" src="assets\images\email.png" alt="" />
          <h1 class="text-white w-full m-auto px-8">{{ data.email.email }}</h1>
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
