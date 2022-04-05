<template>
  <div v-if="data">
    <h1 class="flex justify-center text-5xl">THIS IS THE ABOUT PAGE</h1>
    <div class="page-content">
      <div class="title">
        <h1>{{ data.companyname }}</h1>
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
