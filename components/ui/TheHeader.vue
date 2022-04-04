<template>
  <div class="flex justify-around p-10 bg-orange-600">
    <div>
      <a href="/"><img class="hover:text-white" src="" alt="W.E.B. Inc." /></a>
    </div>
    <div>
      <nav class="flex justify-around gap-36">
        <NuxtLink class="hover:text-white" to="/about">About</NuxtLink>
        <NuxtLink class="hover:text-white" to="/blog">Blog</NuxtLink>
        <NuxtLink class="hover:text-white" to="/contact">Contact</NuxtLink>
      </nav>
    </div>
  </div>
</template>

<script setup></script>
