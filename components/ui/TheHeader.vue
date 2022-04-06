<template>
  <div class="flex justify-around p-10 bg-gray-700">
    <div>
      <a href="/"
        ><img class="text-white text-4xl" src="" alt="W.E.B. Inc."
      /></a>
    </div>
    <div class="sm:flex sm:flex-col">
      <nav class="flex sm:flex-col md:flex-row justify-around md:gap-36">
        <NuxtLink class="text-gray-500 text-2xl hover:text-white" to="/about"
          >About</NuxtLink
        >
        <NuxtLink class="text-gray-500 text-2xl hover:text-white" to="/blog"
          >Blog</NuxtLink
        >
        <NuxtLink class="text-gray-500 text-2xl hover:text-white" to="/contact"
          >Contact</NuxtLink
        >
      </nav>
    </div>
  </div>
</template>

<script setup></script>
