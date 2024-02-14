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

defineOptions({
  name: "Game",
});

const { game } = useGameStore();

const { cargos, createCargo, addCargo } = useCargoStore();

addCargo(createCargo({ x: 3, y: 3, onTarget: false }));
addCargo(createCargo({ x: 4, y: 4, onTarget: false }));

const { targets, createTarget, addTarget } = useTargetStore();

addTarget(createTarget({ x: 1, y: 1 }));
addTarget(createTarget({ x: 5, y: 4 }));
</script>

<style lang="scss" scoped></style>
