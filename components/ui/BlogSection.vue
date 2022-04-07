<template>
  <div class="bg-gray-800 pt-32">
    <AppTitle :title="'Blog Recommendations'">
      <template #text>
        <p
          class="sm:text-3xl md:text-6xl text-gray-700 sm:px-10 sm:py-2 md:p-10"
        >
          Prepared especially for you.
        </p>
      </template>
    </AppTitle>
    <slot name="links"></slot>
  </div>
  <div class="bg-gray-800 pt-10">
    <AppCard
      :date="'November 30th, 2020 -- 3 min read'"
      :articleTitle="'useEffect vs useLayoutEffect'"
    >
      <template #card-image>
        <img
          class="rounded-xl"
          src="https://images.pexels.com/photos/11625055/pexels-photo-11625055.jpeg?cs=srgb&dl=pexels-alexander-kozlov-11625055.jpg&fm=jpg"
          alt="Card Image"
        />
      </template>
    </AppCard>
    <AppCard
      :date="'July 19th, 2020 -- 8 min read'"
      :articleTitle="'useEffect vs useLayoutEffect'"
    >
      <template #card-image>
        <img
          class="rounded-xl"
          src="https://images.pexels.com/photos/11625055/pexels-photo-11625055.jpeg?cs=srgb&dl=pexels-alexander-kozlov-11625055.jpg&fm=jpg"
          alt="Card Image"
        />
      </template>
    </AppCard>
  </div>
</template>
