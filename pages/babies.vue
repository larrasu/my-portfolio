<template>
  <main class="my-10">
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
      <h1 class="text-4xl font-black">My Furbabies</h1>
      <p>This is why we don't need kids.</p>
    </section>
    <section class="md:grid-cols-3 grid gap-10 mt-10">
      <div
        v-for="baby of babies"
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
        :delay="baby.delay"
        class="group flex flex-col gap-4"
      >
        <img
          :src="baby.image"
          :alt="baby.name"
          loading="lazy"
          class="lg:w-80 h-80 rounded-2xl object-cover"
        />
        <div class="flex-1">
          <h1 class="text-4xl font-black">{{ baby.name }}</h1>
          <p>
            {{ baby.breed }} -
            <Icon
              :name="
                baby.gender == 'm'
                  ? 'ph:gender-male-bold'
                  : 'ph:gender-female-bold'
              "
              :class="baby.gender == 'm' ? 'text-blue-400' : 'text-pink-400'"
            />
          </p>
          <p class="text-neutral-600 dark:text-neutral-500 text-lg">
            {{ baby.desc }}
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
const babies = [
  {
    name: "Coco",
    image: "images/coco.jpeg",
    gender: "m",
    breed: "Pomeranian",
    desc: "Squeaky toy lover. Cuddles enthusiast. Doesn't really like new people.",
    delay: 400,
  },
  {
    name: "Melon",
    image: "images/melon.jpeg",
    gender: "f",
    breed: "Pomeranian",
    desc: '"I love chicken and beef. And I\'m very protective of mommy."',
    delay: 600,
  },
  {
    name: "Ebi",
    image: "images/ebi.jpeg",
    gender: "m",
    breed: "Pomeranian",
    desc: "Fluffiness and chonkiness - 10/10 (rated by mommy)",
    delay: 800,
  },
];
</script>
