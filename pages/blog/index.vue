<template>
  <div class="bg-gray-800">
    <TheHero :hero-title="'Learn development with great articles.'">
      <template #hero-description>
        <p
          class="sm:text-2xl md:text-4xl text-gray-700 sm:px-10 sm:py-6 md:p-10"
        >
          Find the latest of my writing here.
        </p>
      </template>
      <template #hero-image>
        <img
          class="sm:w-screen md:w-3/5"
          src="https://res.cloudinary.com/kentcdodds-com/image/upload/w_550,q_auto,f_auto/kentcdodds.com/illustrations/skis_z5lkc3"
          alt="Blog Hero"
        />
      </template>
    </TheHero>
    <FeaturedCard
      :feature-title="'How to use React Context effectively'"
      :date="'June 5th, 2021 -- 11 min read'"
    >
      <template #feature-image>
        <img
          class="rounded-xl md:w-1/2"
          src="https://images.pexels.com/photos/4900909/pexels-photo-4900909.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="Featured Image"
        />
      </template>
    </FeaturedCard>
    <div
      class="flex sm:flex-col md:flex-row sm:gap-20 bg-gray-800 py-10 md:px-36 bg-gray-800"
    >
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
    <div
      class="flex sm:flex-col md:flex-row sm:gap-20 bg-gray-800 py-10 md:px-36 bg-gray-800"
    >
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
    <div
      class="flex sm:flex-col md:flex-row sm:gap-20 bg-gray-800 py-10 md:px-36 bg-gray-800"
    >
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
  </div>
</template>
