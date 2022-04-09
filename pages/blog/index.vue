<template>
  <div class="bg-gray-800">
    <TheHero :hero-title="'Learn development with great articles.'">
      <template #hero-description>
        <p
          class="sm:text-2xl md:text-4xl text-gray-700 sm:px-10 sm:py-6 md:p-10"
        >
          Find the latest information about anything tech here.
        </p>
      </template>
      <template #hero-image>
        <div class="flex justify-center">
          <img
            class="sm:w-screen md:w-1/2"
            src="https://res.cloudinary.com/kentcdodds-com/image/upload/w_550,q_auto,f_auto/kentcdodds.com/illustrations/skis_z5lkc3"
            alt="Blog Hero"
          />
        </div>
      </template>
    </TheHero>
    <FeaturedCard
      :feature-title="'How to use React Context effectively'"
      :date="'June 5th, 2021 -- 11 min read'"
    >
      <template #feature-image>
        <img
          class="rounded-xl md:w-3/4"
          src="https://images.pexels.com/photos/5496461/pexels-photo-5496461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Featured Image"
        />
      </template>
    </FeaturedCard>
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
    <div
      class="flex sm:flex-col md:grid md:grid-cols-3 sm:gap-20 bg-gray-800 py-10 md:px-36 bg-gray-800"
    >
      <AppCard
        :date="' December 12th, 2019 -- 3 min read'"
        :articleTitle="'I need some water'"
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
        :date="'July 11th, 2020 -- 12 min read'"
        :articleTitle="'Something came over me'"
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
        :date="'May 2th, 2021 -- 10 min read'"
        :articleTitle="'Way too hot to simmer down'"
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
    <div
      class="flex sm:flex-col md:grid md:grid-cols-3 sm:gap-20 bg-gray-800 py-10 md:px-36 bg-gray-800"
    >
      <AppCard
        :date="'June 26th, 2021 -- 3 min read'"
        :articleTitle="'Might as well overheat'"
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
        :date="'February 3rd, 2022 -- 8 min read'"
        :articleTitle="'Too close to comfort'"
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
        :date="'January 5th, 2020 -- 20 min read'"
        :articleTitle="'As blood rush my favourite vein'"
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
