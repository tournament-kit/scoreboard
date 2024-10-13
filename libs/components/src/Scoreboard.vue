<script setup lang="ts">
// import background from "./assets/img/background.png";
import { onBeforeUpdate, onMounted, onUpdated, PropType, ref, watch } from 'vue';
import fontUrlfrom from './assets/fonts/Xolonium-Regular.otf';
import FitText from './FitText.vue';

export type ScoreboardPlayer = {
  name: string;
  backgroundUrl: string;
  score: number;
}

const MAX_PLAYER_NAME_SIZE = 42;
const MIN_PLAYER_NAME_SIZE = 20;

const { player1, player2 } = defineProps({
  title: {
    type: String,
    required: false,
  },
  player1: {
    type: Object as PropType<ScoreboardPlayer>,
    required: true,
  },
  player2: {
    type: Object as PropType<ScoreboardPlayer>,
    required: true,
  },
});

const fontReady = ref(false);
const root = ref<HTMLDivElement | null>(null);
const player1ScoreElement = ref<HTMLDivElement | null>(null);
const player2ScoreElement = ref<HTMLDivElement | null>(null);

onMounted(async () => {
  const font = new FontFace("Xolonium", `url(${fontUrlfrom})`);
  // wait for font to be loaded
  await font.load()
  // add font to document
  document.fonts.add(font);
  fontReady.value = true;
});

const flashElement = (element?: HTMLElement | null, time = 2000) => {
  if (!element) {
    return;
  }
  element.classList.add('animation-flash');
  setTimeout(() => {
    element.classList.remove('animation-flash');
  }, time);
}

watch(() => [player1.score, player2.score], (
  [player1Score, player2Score],
  [prevPlayer1Score, prevPlayer2Score]
) => {
  if (player1Score !== prevPlayer1Score) {
    flashElement(player1ScoreElement.value);
  }
  if (player2Score !== prevPlayer2Score) {
    flashElement(player2ScoreElement.value);
  }
});
</script>

<template>
  <div ref="root" :class="['scoreborad', { hidden: !fontReady }]">
    <div v-if="title" class="title">{{ title }}</div>
    <!--Splitter -->
    <div class="splitter">
      -
    </div>

    <!-- Faction -->
    <div class="player1-background">
      <img :src="player1.backgroundUrl" class="value">
    </div>
    <div class="player2-background">
      <img :src="player2.backgroundUrl" class="value">
    </div>
    <div class="faction-mask" />

    <!-- Name -->
    <div class="player1-name">
      <FitText class="value" :min="MIN_PLAYER_NAME_SIZE" :max="MAX_PLAYER_NAME_SIZE" :text="player1.name" />
    </div>
    <div class="player2-name">
      <FitText class="value" :min="MIN_PLAYER_NAME_SIZE" :max="MAX_PLAYER_NAME_SIZE" :text="player2.name" />
    </div>

    <!-- Score -->
    <div class="player1-score" ref="player1ScoreElement">
      <div class="value">
        {{ player1.score }}
      </div>
    </div>
    <div class="player2-score" ref="player2ScoreElement">
      <div class="value">
        {{ player2.score }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.faction-mask.hidden {
  display: none;
}

@font-face {
  font-family: 'Xolonium';
  src: url(./assets/fonts/Xolonium-Regular.otf) format('opentype');
  font-weight: normal;
  font-style: italic;
}

.scoreborad {
  width: 526px;
  min-width: 526px;
  height: 110px;
  background: url(./assets/img/background.png) no-repeat center;
  font-family: 'Xolonium';
  transition: transform ease-out 1s, opacity ease-out 1s;
  transform: translateY(0);
  opacity: 1;
  overflow: hidden;
}

.scoreborad:after {
  position: absolute;
  top: 6px;
  width: 100%;
  height: 100%;
  display: block;
  content: ' ';
  background: url(./assets/img/foreground.png) no-repeat center;
  pointer-events: none;
  opacity: 0.9;
}

.scoreborad.hidden {
  transition: transform ease-in-out 1s,
    opacity ease-in-out 1s;
  transform: translateY(-270px);
  opacity: 0;
}

.title {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 18px;
  color: #fff;
  text-shadow: 0 1px 2px #000;
  padding: 8px;
  opacity: 0.9;
}

.player1-name,
.player2-name {
  position: absolute;
  display: flex;
  width: 125px;
  height: 80px;
  line-height: 1;
  top: 18px;
  text-align: center;
  color: #fff;
  text-shadow: 0 1px 2px #000;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  padding: 0 8px;
  opacity: 0.9;
  overflow: hidden;
}

.player1-name {
  left: 40px;
}

.player2-name {
  right: 40px;
}

.player1-score,
.player2-score,
.splitter {
  color: #ffed0d;
}

.player1-score .value,
.player2-score .value,
.splitter {
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}

.player1-score,
.player2-score {
  position: absolute;
  top: 12px;
  width: 80px;
  height: 80px;
  line-height: 80px;
  font-size: 50px;
  text-align: center;
}

.player1-score {
  left: 177px;
}

.player2-score {
  right: 177px;
}

.player1-background,
.player2-background {
  width: 125px;
  height: 76px;
  position: absolute;
  top: 20px;
  overflow: hidden;
}

.player1-background img.value,
.player2-background img.value {
  width: 125px;
  height: 76px;
  border-bottom-left-radius: 34px;
  border-bottom-right-radius: 34px;
  transition: opacity ease-out 1s, transform ease-out 1s;
  opacity: .5;
}

.player1-background img.value {
  transition-delay: 0.4s;
}

.player2-background img.value {
  transition-delay: 0.6s;
}

.player1-background img.hidden,
.player2-background img.hidden {
  transition: opacity ease-in 1s, transform ease-in 1s;
  opacity: 0;
}

.player1-background img.hidden {
  transform: translateY(-100px);
}

.player2-background img.hidden {
  transform: translateY(100px);

}

.player1-background {
  left: 45px;
}

.player2-background {
  right: 45px;
}

.faction-mask {
  position: absolute;
  top: 18px;
  left: 5px;
  width: 516px;
  height: 85px;
  background-image: url(./assets/img/mask.png);
}

.splitter {
  position: absolute;
  top: 12px;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 42px;
  height: 80px;
  line-height: 80px;
}


@keyframes flash {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.animation-flash {
  animation: flash 400ms infinite;
}
</style>
