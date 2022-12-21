<template>
  <main class="max-w-lg mx-auto">
    <section
      v-motion
      :initial="{ opacity: 0, y: 50 }"
      :enter="{
        opacity: 1,
        y: 0,
        transition: {
          type: 'spring',
          stiffness: 250,
          damping: 25,
          mass: 0.5,
        },
      }"
      :delay="200"
    >
      <h1 class="text-5xl font-black">Larra Su</h1>
      <h2 class="text-xl text-neutral-600 dark:text-neutral-500">
        Front-End Web Developer
      </h2>
    </section>

    <section
      v-motion
      :initial="{ opacity: 0, y: 100 }"
      :enter="{
        opacity: 1,
        y: 0,
        transition: {
          type: 'spring',
          stiffness: 250,
          damping: 25,
          mass: 0.5,
        },
      }"
      :delay="500"
      class="mt-10 space-y-5"
    >
      <p>
        Hi! I'm Larra Su, a front-end web developer based in the Philippines.
        Nuxt and Tailwind CSS are my holy grails to create amazing stuff for the
        web.
      </p>
      <p>
        When I'm not coding, I take care of
        <NuxtLink
          to="/babies"
          class="border-b-2 transition border-rose-400/50 hover:border-rose-300"
          >my furkids</NuxtLink
        >
        and my husband. I love playing video games (mostly management games),
        singing and watching movies.
      </p>
    </section>
  </main>
</template>
