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
    <AbooutCard
      :about-title="`Hi, I'm Kent C. Dodds. I help people make the world better through quality software.`"
      :about-description="`I'm also a big extreme sports enthusiast. When I'm not hanging out with my family or at the computer you can find me cruising around on my onewheel or hitting the slopes on my snowboard when it's cold. `"
    >
      <template #about-image>
        <p class="text-white">HELLO WORLD</p>
      </template>
    </AbooutCard>
  </div>
</template>
