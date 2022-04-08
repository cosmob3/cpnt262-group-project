<template>
  <div class="h-screen">
    <TheHero :hero-title="'Send us an email!'">
      <template #hero-description>
        <p
          class="sm:text-2xl md:text-4xl text-gray-700 sm:px-10 sm:py-6 md:p-10"
        >
          Like in the old days
        </p>
      </template>
      <template #hero-image>
        <div class="flex justify-center">
          <img
            class="sm:w-screen md:w-3/5 rounded-3xl"
            src="https://images.pexels.com/photos/5605061/pexels-photo-5605061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="image for contact page"
          />
        </div>
      </template>
    </TheHero>
    <AppForm></AppForm>
  </div>
</template>
