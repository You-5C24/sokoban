<template>
  <div class="relative">
    <template v-for="target in targets">
      <Target :x="target.x" :y="target.y" />
    </template>
    <Map />
    <Player />
    <template v-for="cargo in cargos">
      <Cargo :x="cargo.x" :y="cargo.y" />
    </template>
  </div>
</template>

<script setup lang="ts">
import Map from "./Map.vue";
import Player from "./Player.vue";
import Cargo from "./Cargo.vue";
import Target from "./Target.vue";
import { useCargoStore } from "../../store/cargo";
import { useTargetStore } from "../../store/target";

defineOptions({
  name: "Game",
});

const { cargos, createCargo, addCargo } = useCargoStore();

addCargo(createCargo({ x: 3, y: 3 }));
addCargo(createCargo({ x: 4, y: 4 }));

const { targets } = useTargetStore();
</script>

<style lang="scss" scoped></style>
