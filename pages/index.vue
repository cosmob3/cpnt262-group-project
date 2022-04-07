<template>
  <div class="h-full">
    <TheHero
      :hero-title="'Helping people make the world a better place through quality software.'"
    >
      <template #hero-image>
        <img
          class="sm:w-screen md:w-3/4"
          src="https://res.cloudinary.com/kentcdodds-com/image/upload/w_918,q_auto,f_auto/kentcdodds.com/illustrations/kody-flying_yellow"
          alt="Hero Image"
        />
      </template>
    </TheHero>
  </div>
</template>
