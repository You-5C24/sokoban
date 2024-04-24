<template>
  <div class="relative">
    <template v-for="target in targets">
      <Target :x="target.x" :y="target.y" />
    </template>
    <Map />
    <Player />
    <template v-for="cargo in cargos" :key="cargo.id">
      <Cargo :cargo="cargo" />
    </template>
    <div v-if="game.isCompleted">
      <Button @click="handleToNextLevel">next</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Map from "./Map.vue";
import Player from "./Player.vue";
import Cargo from "./Cargo.vue";
import Target from "./Target.vue";
import { useCargoStore } from "../../store/cargo";
import { useTargetStore } from "../../store/target";
import { useGameStore } from "../../store/game";
import { gameData } from "../../game/gameData";

defineOptions({
  name: "Game",
});

const { game, setupGame, toNextLevel } = useGameStore();
const { targets } = useTargetStore();
const { cargos } = useCargoStore();

setupGame(gameData);

function handleToNextLevel() {
  toNextLevel();
}
</script>

<style lang="scss" scoped></style>
