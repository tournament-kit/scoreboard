<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink, RouterView, useRoute } from 'vue-router';

const route = useRoute();
const isHome = computed(() => route.path === '/');
</script>

<template>
  <header>
    <nav>
      <RouterLink v-if="!isHome" to="/">返回</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>

<style scoped lang="css">
header {
  line-height: 1.5;
  max-width: 100vw;
}

nav>a {
  padding-left: 1rem;
  padding-right: 1rem;
}

nav>a:hover {
  background-color: var(--color-primary);
}

@media (min-width: 768px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
    margin-left: auto;
    margin-right: auto;
    max-width: 768px;
  }

  nav {
    text-align: left;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
