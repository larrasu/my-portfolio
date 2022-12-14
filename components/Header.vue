<template>
  <header>
    <div class="flex items-center justify-between py-4">
      <div role="img">
        <Icon name="heroicons:heart" class="w-8 h-8 text-rose-400" />
      </div>
      <nav>
        <ul class="flex items-center space-x-4">
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about">About</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/works">Works</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/projects">Projects</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact">Contact</NuxtLink>
          </li>
          <li>
            <button
              class="flex items-center justify-center w-8 h-8 rounded-full"
              @click="toggleDark"
            >
              <Icon
                :name="isDark ? 'heroicons:sun' : 'heroicons:moon'"
                class="w-5 h-5 text-neutral-500"
              />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>
