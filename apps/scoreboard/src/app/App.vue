<script setup lang="ts">
import DemoScoreboard from './DemoScoreboard.vue';
import DebugSoreboard from './DemoScoreboard.vue';
import URLParamsScoreboard from './URLParamsScoreboard.vue';

const params = new URLSearchParams(location.search);
const mode = params.get('mode');
</script>


<template>
  <DemoScoreboard v-if="mode === 'demo'" />
  <DebugSoreboard v-if="mode === 'debug'" />
  <URLParamsScoreboard v-if="mode === 'manual'" />
</template>

<style>
html,
body {
  margin: 0;
}
</style>
