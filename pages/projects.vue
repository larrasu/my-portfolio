<template>
  <main>
    <section>
      <h1 class="text-4xl font-black">Projects</h1>
      <p class="text-lg text-neutral-600 dark:text-neutral-500">
        Here are some of my projects.
      </p>
    </section>
    <section role="grid" class="projects">
      <div role="article" class="project" v-for="project of projects">
        <div class="project-image">
          <nuxt-img :src="project.image" :alt="project.title" />
        </div>
        <div class="project-info">
          <h2 class="text-xl font-bold">{{ project.title }}</h2>
          <p class="text-neutral-600 dark:text-neutral-500">
            {{ project.description }}
          </p>
          <div class="project-links">
            <a :href="project.link" class="btn btn-primary">View Project</a>
            <a :href="project.source" class="btn btn-secondary">View Source</a>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
const projects = [
  {
    title: "QR Code Component",
    description:
      "This is a solution to the QR code component challenge on Frontend Mentor.",
    image:
      "https://github.com/larrasu/fm-qr-code-component/raw/main/screenshots/desktop.png",
    link: "https://larrasu.github.io/fm-qr-code-component/",
    source: "https://github.com/larrasu/fm-qr-code-component",
  },
  {
    title: "E-commerce Product Page",
    description:
      "This is a solution to the E-commerce product page challenge on Frontend Mentor.",
    image:
      "https://github.com/larrasu/fm-ecommerce-product-page/raw/main/screenshots/desktop.gif",
    link: "https://larrasu-fm-ecommerce-product-page.vercel.app/",
    source: "https://github.com/larrasu/fm-ecommerce-product-page",
  },
  {
    title: "Sunnyside Agency Landing Page",
    description:
      "This is a solution to the Sunnyside agency landing page challenge on Frontend Mentor.",
    image:
      "https://github.com/larrasu/fm-sunnyside-agency-landing-page/raw/main/screenshots/desktop.png",
    link: "https://fm-sunnyside-agency-landing-page-hxhathwkf-larrasu.vercel.app/",
    source: "https://larrasu.github.io/fm-sunnyside-agency-landing-page/",
  },
  {
    title: "Product Preview Card Component",
    description:
      "This is a solution to the Product preview card component challenge on Frontend Mentor.",
    image:
      "https://github.com/larrasu/fm-product-preview-card-component/raw/main/screenshots/desktop.gif",
    link: "https://larrasu.github.io/fm-product-preview-card-component/",
    source: "https://larrasu.github.io/fm-product-preview-card-component/",
  },
  {
    title: "Multi-Step Form",
    description:
      "This is a solution to the Multi-step form challenge on Frontend Mentor.",
    image:
      "https://github.com/larrasu/fm-multi-step-form/raw/main/screenshots/desktop.gif",
    link: "http://fm-multi-step-form.vercel.app/",
    source: "https://larrasu.github.io/fm-multi-step-form/",
  },
];
</script>
