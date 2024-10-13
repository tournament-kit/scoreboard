<script setup lang="ts">
import { ref, reactive, computed } from 'vue';
import { Scoreboard } from '@scoreboard/components';
import type { ScoreboardPlayer } from '@scoreboard/components';
import s3 from '../img/s3.png';
import e3 from '../img/e3.png';
import a3 from '../img/a3.png';
import s2 from '../img/s2.png';
import y2 from '../img/y2.png';
import a2 from '../img/a2.png';

const BACKGROUNDS = [[s3, e3, a3], [s2, y2, a2]];

const player1 = reactive({
  name: "Player 1",
  backgroundUrl: s3,
  score: 0
});

const player2 = reactive({
  name: "Player 2",
  backgroundUrl: e3,
  score: 0
});


const scoreboardURL = computed(() => {
  const params = new URLSearchParams();
  params.set('player1_name', player1.name);
  params.set('player2_name', player2.name);
  params.set('player1_score', player1.score.toString());
  params.set('player2_score', player2.score.toString());
  params.set('player1_faction_index', BACKGROUNDS.flat().indexOf(player1.backgroundUrl).toString());
  params.set('player2_faction_index', BACKGROUNDS.flat().indexOf(player2.backgroundUrl).toString());
  params.set('mode', 'manual');
  return `${import.meta.env.VITE_SCOREBOARD_BASEURL}?${params.toString()}`;
});

const clearScores = () => {
  player1.score = 0;
  player2.score = 0;
}

const increaseScore = (player: ScoreboardPlayer) => {
  player.score++;
}

const decreaseScore = (player: ScoreboardPlayer) => {
  player.score = Math.max(0, player.score - 1);
}

const setBackground = (player: ScoreboardPlayer, url: string) => {
  player.backgroundUrl = url;
}

const copy = (text: string) => {
  navigator.clipboard.writeText(text);
  copyTip.value = '已复制';
  setTimeout(() => {
    copyTip.value = '复制链接';
  }, 2000);
}

const open = (url: string) => {
  window.open(url);
}

const copyTip = ref('复制链接');
const openTip = ref('在浏览器中打开');

</script>

<template>
  <main>
    <div>
      <div class="control-group" id="copy_url">
        <input type="text" v-model="scoreboardURL" readonly />
        <button @click="copy(scoreboardURL)" v-tooltip="copyTip">
          <img src="../img/clippy.svg" />
        </button>
        <button @click="open(scoreboardURL)" v-tooltip="openTip">
          <img src="../img/eye.svg" />
        </button>
      </div>
    </div>
    <div style="overflow: hidden;">
      <Scoreboard :player1="player1" :player2="player2" />
    </div>
    <div>
      <button @click="clearScores">重置比分</button>
    </div>
    <div class="setup-panel">
      <div class="setup-panel-player">
        <div class="control-group">
          <button @click="decreaseScore(player1)" :disabled="player1.score === 0" v-tooltip="`减一分`">-1</button>
          <input type="text" v-model="player1.name" />
          <button @click="increaseScore(player1)" v-tooltip="`加一分`">+1</button>
        </div>
        <div class="control-group" v-for="backgrounds in BACKGROUNDS">
          <button v-for="background in backgrounds" class="background-option"
            @click="setBackground(player1, background)">
            <img :src="background" />
          </button>
        </div>
      </div>
      <div class="setup-panel-player">
        <div class="control-group">
          <button @click="decreaseScore(player2)" :disabled="player2.score === 0" v-tooltip="`减一分`">-1</button>
          <input type="text" v-model="player2.name" />
          <button @click="increaseScore(player2)" v-tooltip="`加一分`">+1</button>
        </div>
        <div class="control-group" v-for="backgrounds in BACKGROUNDS">
          <button v-for="background in backgrounds" class="background-option"
            @click="setBackground(player2, background)">
            <img :src="background" />
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding: 32px;
}

.setup-panel {
  display: flex;
  justify-content: space-around;
  gap: 32px;
}

.setup-panel-player {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.control-group {
  display: flex;
  align-items: center;
  justify-content: center;
}

.control-group>* {
  font-size: 1rem;
  line-height: 22px;
}

.control-group *:first-child {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right: none;
}

.control-group *:not(:first-child):not(:last-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}


.control-group *:last-child {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-left: none;
}

.control-group input[type="text"] {
  flex: 1;
}



input[type="text"] {
  min-width: 150px;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  text-align: center;
}

input[type="text"]:focus {
  outline: none;
}

input[type="number"] {
  width: 50px;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
}


button {
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  background-color: #f0f0f0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  user-select: none;
}

button:disabled {
  pointer-events: none;
}

button:hover {
  background-color: #e0e0e0;
}

button:active {
  background-color: #d0d0d0;
}

button.background-option {
  padding: 0;
  border: none;
  background-color: transparent;
}

.background-option img {
  user-select: none;
  width: 45px;
  pointer-events: none;
}

button.background-option:hover {
  opacity: 0.8;
}

.input-group {
  display: flex;
}

#copy_url {
  width: 500px;
}

#copy_url img {
  width: 1.2rem;
  height: 22px;
}
</style>