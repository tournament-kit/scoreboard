<script setup lang="ts">
import { onMounted, ref, } from 'vue';
import { getCanvasFont, getTextSize, splitText } from '@scoreboard/components';

const text = "a11";


const parts = splitText(text);
const textEl = ref();
const canvasEl = ref();
const textSize = ref({
  width: 0,
  height: 0,
});
const canvasTextSize = ref({
  width: 0,
  height: 0,
});

function initHighDIPCanvas(canvas) {
  const ratio = window.devicePixelRatio;
  canvas.style.width = canvas.width + "px";
  canvas.style.height = canvas.height + "px";
  canvas.width = canvas.width * ratio;
  canvas.height = canvas.height * ratio;
  canvas.getContext("2d").scale(ratio, ratio)
}



onMounted(async () => {
  initHighDIPCanvas(canvasEl.value);

  const ctx = canvasEl.value.getContext("2d");
  canvasEl.value.getContext("2d").font = getCanvasFont(textEl.value);
  console.log(getCanvasFont(textEl.value))
  ctx.textBaseline = "top";
  ctx.fillText(text, 0, 0);

  textSize.value = {
    width: textEl.value.getBoundingClientRect().width,
    height: textEl.value.getBoundingClientRect().height,
  };
  console.log(getTextSize(text, textEl.value))
  canvasTextSize.value = {
    width: getTextSize(text, textEl.value).width,
    height: getTextSize(text, textEl.value).actualBoundingBoxAscent,
  }
  // console.log(textRef.value.offsetWidth)
});

</script>

<template>
  <div class="debug">
    <div>
      <span ref="textEl">{{ text }}</span>
    </div>
    <div class="parts">
      <span v-for="part in parts" :key="part">{{ part }}</span>
    </div>
    <canvas ref="canvasEl" width="200" height="50" style="display: block;" />
    <div>Width: {{ textSize }}</div>
    <div>Canvas Width: {{ canvasTextSize }}</div>
  </div>
</template>


<style scoped>
.debug {
  background-color: aliceblue;
}

span {
  font-family: 'Xolonium';
}

.parts {
  display: flex;
  flex-wrap: wrap;
}
</style>
