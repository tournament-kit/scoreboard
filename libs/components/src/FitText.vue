<script setup lang="ts">
import { onMounted, defineProps, ref, onUnmounted, onUpdated } from 'vue';
import { splitText } from './utils/splitText';


const { max, min, text } = defineProps({
  max: {
    type: Number,
    required: true,
  },
  min: {
    type: Number,
    default: 12,
  },
  text: {
    type: String,
    required: true,
  }
});

const maxLineCount = 1

const root = ref<HTMLSpanElement | null>(null)

const updateFontsize = (element: HTMLSpanElement) => {
  element.style.display = 'inline-block';
  element.style.wordBreak = 'break-all';
  element.style.lineHeight = '1px';
  element.style.whiteSpace = 'normal';

  // then keep trying untill it fits
  let fontSize = max;
  let stepSize = 1
  element.style.fontSize = fontSize + 'px';

  while (element.offsetHeight > maxLineCount && fontSize > min) {
    fontSize -= stepSize;
    element.style.fontSize = fontSize + 'px';
  }
  element.style.whiteSpace = 'pre';
  element.style.removeProperty('display');
  element.style.removeProperty('word-break');
  element.style.removeProperty('line-height');
}

const update  = () => {
  let element = root.value;

  if (!element) {
    return;
  }

  element && updateFontsize(element);
  element.innerHTML = '';

  splitText(text).forEach((line) => {
    const span = document.createElement('span');
    span.textContent = line;
    element.appendChild(span);
  });
}

const observer = new MutationObserver(update);
onMounted(() => {
  let element = root.value;

  if (!element) {
    return;
  }

  observer.observe(
    element,
    { subtree: true, characterData: true }
  );
  element.style.opacity = "0";
  setTimeout(() => {
    update();
    element.style.removeProperty('opacity');
  }, 1);
});

onUpdated(() => {
  update();
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
