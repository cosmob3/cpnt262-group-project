<template>
  <div class="h-full">
    <TheHero :hero-title="'Welcome to your No. 1 stop for all your tech needs'">
      <template #hero-image>
        <div class="flex justify-center">
          <img
            class="sm:w-screen md:w-3/4"
            src="https://res.cloudinary.com/kentcdodds-com/image/upload/w_918,q_auto,f_auto/kentcdodds.com/illustrations/kody-flying_yellow"
            alt="Hero Image"
          />
        </div>
      </template>
      <template #links>
        <NuxtLink
          class="bg-white hover:bg-slate-300 text-gray-700 rounded-full text-base text-center sm:mx-20 md:mx-40 p-6"
          to="/blog"
          >Read the Blog
        </NuxtLink>

        <NuxtLink
          class="bg-gray-700 hover:bg-gray-900 text-white focus:border-blue-400 rounded-full text-base text-center sm:mx-20 md:mx-40 p-6"
          to="/about"
          >About us
        </NuxtLink>
      </template>
    </TheHero>
    <AbooutCard
      :about-title="`Hi, we are W.E.B. Inc. and we are here to solve all of you technology related needs`"
      :about-description="`We are a team of junior developers with expertise in different areas of this industry. Whatever we don't know, we can learn and work with you to make sure everyone involve leaves satisfied.`"
    >
      <template #about-image>
        <img
          class="w-10/12 self-center rounded-xl"
          src="https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="image"
        />
      </template>
      <template #links>
        <NuxtLink
          class="px-10 sm:pt-10 hover:text-black text-white md:text-3xl sm:text-xl"
          to="/about"
          >Learn more about us --></NuxtLink
        >
      </template>
    </AbooutCard>
    <BlogSection>
      <template #links
        ><NuxtLink
          class="flex flex-col justify-center px-10 hover:text-black text-white md:text-3xl sm:text-xl"
          to="/blog"
          >See the full blog --></NuxtLink
        ></template
      >
    </BlogSection>
  </div>
</template>
