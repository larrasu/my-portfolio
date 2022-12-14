<template>
  <header>
    <div class="header">
      <div role="img">
        <Icon name="heroicons:heart" class="w-8 h-8 text-rose-400" />
      </div>
      <nav>
        <ul class="menu">
          <li v-for="item of menu">
            <NuxtLink :to="item.link" class="menu-item">
              {{ item.name }}
            </NuxtLink>
          </li>
          <li>
            <button class="btn-icon" @click="toggleDark()">
              <Icon
                :name="isDark ? 'heroicons:sun' : 'heroicons:moon'"
                class="w-5 h-5 menu-item"
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

const menu = [
  {
    name: "Home",
    link: "/",
  },
  // {
  //   name: "About",
  //   link: "/about",
  // },
  // {
  //   name: "Works",
  //   link: "/works",
  // },
  {
    name: "Projects",
    link: "/projects",
  },
  // {
  //   name: "Contact",
  //   link: "/contact",
  // },
];
</script>
