<script setup lang="ts">
import { onMounted, defineProps, ref, onUnmounted } from 'vue';
import { splitText } from '../utils/splitText';


const { max, min, text } = defineProps({
  max: {
    type: Number,
    required: true,
  },
  min: {
    type: Number,
    default: 20,
  },
  text: {
    type: String,
    required: true,
  }
});

const maxLineCount = 1

const root = ref()

const updateFontsize = () => {
  let element: HTMLSpanElement = root.value;
  element.style.display = 'inline-block';
  element.style.wordBreak = 'break-all';
  element.style.lineHeight = '1px';

  // then keep trying untill it fits
  let fontSize = max;
  let stepSize = 1
  element.style.fontSize = fontSize + 'px';

  while (element.offsetHeight > maxLineCount && fontSize > min) {
    fontSize -= stepSize;
    element.style.fontSize = fontSize + 'px';
  }
  element.style.display = null;
  element.style.lineHeight = null;
  element.style.wordBreak = null;
}

const update  = () => {
  let element: HTMLSpanElement = root.value;
  updateFontsize();
  element.innerHTML = '';

  splitText(text).forEach((line) => {
    const span = document.createElement('span');
    span.textContent = line;
    element.appendChild(span);
  });
}

const observer = new MutationObserver(update);
onMounted(() => {
  observer.observe(
    root.value,
    { subtree: true, characterData: true }
  );
  root.value.style.opacity = 0;
  setTimeout(() => {
    update();
    root.value.style.opacity = null;
  }, 1);
});

onUnmounted(() => {
  observer.disconnect();
});


</script>

<template>
  <span
    ref="root"
    class="fit-text"
  >
    {{ text }}
  </span>
</template>

<style scoped>
.fit-text {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
