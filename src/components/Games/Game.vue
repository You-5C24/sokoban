<template>
  <div class="relative">
    <template v-for="target in targets">
      <Target :x="target.x" :y="target.y" />
    </template>
    <Map />
    <Player />
    <template v-for="cargo in cargos">
      <Cargo :cargo="cargo" />
    </template>
    <div v-if="game.isCompleted">
      <Button>next</Button>
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
import { levelGameData } from "../../game/gameData";

defineOptions({
  name: "Game",
});

const { game, setupGame } = useGameStore();
const { targets } = useTargetStore();
const { cargos } = useCargoStore();

setupGame(levelGameData);
</script>

<style lang="scss" scoped></style>
