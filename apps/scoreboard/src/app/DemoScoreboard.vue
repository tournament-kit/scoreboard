<script setup lang="ts">
import { PLAYER_NAMES } from '../constants';
import { Scoreboard } from '@scoreboard/components';

let playerNames = PLAYER_NAMES;
playerNames = playerNames.sort((a: string, b: string) => {
  return a.length - b.length;
});
const players = [];
for (let index = 0; index < playerNames.length; index += 2) {
  players.push(
    [
      {
        name: playerNames[index],
        backgroundUrl: 'img/s3.png',
        score: 0,
      },
      {
        name: playerNames[playerNames.length - index - 1],
        backgroundUrl: 'img/e3.png',
        score: 0,
      }
    ]
  );
}
</script>


<template>
  <Scoreboard v-for="[player1, player2] in players" :key="player1.name + player2.name" :player1="player1"
    :player2="player2" />
</template>
