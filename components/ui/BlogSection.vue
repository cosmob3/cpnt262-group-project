<template>
  <div class="bg-gray-800">
    <div class="pt-32 md:flex md:justify-between">
      <div>
        <AppTitle :title="'Blog Recommendations'">
          <template #text>
            <p
              class="sm:text-3xl md:text-5xl text-gray-700 sm:px-10 sm:py-2 md:px-10"
            >
              Prepared especially for you.
            </p>
          </template>
        </AppTitle>
      </div>
      <slot name="links"></slot>
    </div>
    <div
      class="flex sm:flex-col md:grid md:grid-cols-3 sm:gap-20 bg-gray-800 py-10 md:px-36 bg-gray-800"
    >
      <AppCard
        :date="'November 30th, 2020 -- 3 min read'"
        :articleTitle="'useEffect vs useLayoutEffect'"
      >
        <template #card-image>
          <img
            class="rounded-xl"
            src="https://images.pexels.com/photos/3861976/pexels-photo-3861976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Card Image"
          />
        </template>
      </AppCard>
      <AppCard
        :date="'July 19th, 2020 -- 8 min read'"
        :articleTitle="'Security 101'"
      >
        <template #card-image>
          <img
            class="rounded-xl"
            src="https://images.pexels.com/photos/5935791/pexels-photo-5935791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Card Image"
          />
        </template>
      </AppCard>
      <AppCard
        :date="'June 6th, 2020 -- 10 min read'"
        :articleTitle="'Why error handling can save you time'"
      >
        <template #card-image>
          <img
            class="rounded-xl"
            src="https://images.pexels.com/photos/5240544/pexels-photo-5240544.jpeg"
            alt="Card Image"
          />
        </template>
      </AppCard>
    </div>
  </div>
</template>
