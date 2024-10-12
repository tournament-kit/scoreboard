<script setup lang="ts">
import Debug from './Debug.vue';
import Demo from './Demo.vue';
import Scoreboard from './Scoreboard.vue';

const params = new URLSearchParams(location.search);
const mode = params.get('mode');

class GamePlayer {
  constructor(
    public name: string,
    public faction: string,
    public score: number
  ) {}
}

interface IPlayerService{
  loadPlayers(): [GamePlayer, GamePlayer];
}

class URLPlayerService implements IPlayerService{
  loadPlayers(): [GamePlayer, GamePlayer] {
    var p1Name = params.get('player1_name') ?? 'Player 1';
    var p2Name = params.get('player2_name') ?? 'Player 2';
    var p1Score = params.get('player1_score') ? Number(params.get('player1_score')) : 0;
    var p2Score = params.get('player2_score') ? Number(params.get('player2_score')) : 0;
    var p1Faction = params.get('player1_faction')?? 's3'
    var p2Faction = params.get('player2_faction')?? 'e3'

    return [
      new GamePlayer(p1Name, p1Faction, p1Score),
      new GamePlayer(p2Name, p2Faction, p2Score)
    ];
  }
}

const playerLoader: IPlayerService = new URLPlayerService();
const [player1, player2] = playerLoader.loadPlayers().map(({faction, ...rest}) => ({
  ...rest,
  backgroundUrl: `img/${faction}.png`,
}));
</script>


<template>
  <Demo v-if="mode==='demo'" />
  <Debug v-if="mode==='debug'" />
  <Scoreboard
    v-else
    :player1="player1"
    :player2="player2"
  />
</template>

<style>
html, body {
  margin: 0;
}
</style>
