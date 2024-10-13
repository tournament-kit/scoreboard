<script setup lang="ts">
import { Scoreboard } from '@scoreboard/components';

import s3 from '../img/s3.png';
import e3 from '../img/e3.png';
import a3 from '../img/a3.png';
import s2 from '../img/s2.png';
import y2 from '../img/y2.png';
import a2 from '../img/a2.png';

const params = new URLSearchParams(location.search);

const BACKGROUNDS = [s3, e3, a3, s2, y2, a2];

class GamePlayer {
    constructor(
        public name: string,
        public factionIndex: number,
        public score: number
    ) { }
}

interface IPlayerService {
    loadPlayers(): [GamePlayer, GamePlayer];
}

class URLPlayerService implements IPlayerService {
    loadPlayers(): [GamePlayer, GamePlayer] {
        var p1Name = params.get('player1_name') ?? 'Player 1';
        var p2Name = params.get('player2_name') ?? 'Player 2';
        var p1Score = params.get('player1_score') ? Number(params.get('player1_score')) : 0;
        var p2Score = params.get('player2_score') ? Number(params.get('player2_score')) : 0;
        var p1Faction = Number(params.get('player1_faction_index'));
        var p2Faction = Number(params.get('player2_faction_index'));

        return [
            new GamePlayer(p1Name, p1Faction, p1Score),
            new GamePlayer(p2Name, p2Faction, p2Score)
        ];
    }
}

const playerLoader: IPlayerService = new URLPlayerService();
const [player1, player2] = playerLoader.loadPlayers().map(({ factionIndex: faction, ...rest }) => ({
    ...rest,
    backgroundUrl: BACKGROUNDS[faction],
}));
const zoom = params.get('zoom') ? params.get('zoom') : '1';
</script>


<template>
    <div class="wrapper">
        <Scoreboard :player1="player1" :player2="player2" :style="{ zoom }" />
    </div>
</template>

<style scoped>
.wrapper {
    display: flex;
    justify-content: center;
}

.wrapper .scoreborad {
    margin-top: -18px;
}
</style>