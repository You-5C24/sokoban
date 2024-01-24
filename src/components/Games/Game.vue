<template>
  <div class="relative">
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
import { useCargoStore } from "../../store/cargo";

defineOptions({
  name: "Game",
});

const { cargos } = useCargoStore();
</script>

<style lang="scss" scoped></style>
