<template>
  <div class="relative">
    <Map />
    <Player class="absolute" :style="position" />
  </div>
</template>

<script setup lang="ts">
import Map from "./Map.vue";
import Player from "./Player.vue";
import { useMove, usePosition } from "./player";

defineOptions({
  name: "Game",
});

useMove();
const { position } = usePosition();
</script>

<style lang="scss" scoped></style>
