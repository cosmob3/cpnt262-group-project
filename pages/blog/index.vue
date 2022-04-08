<template>
  <div>
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
  </div>
</template>
