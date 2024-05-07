<template>
  <div class="absolute" :style="position">
    <img :src="Keeper" />
  </div>
</template>

<script setup lang="ts">
import Keeper from "../../assets/keeper.png";
import { usePosition } from "../../composables/usePostion";
import { usePlayerStore } from "../../store/player";
import { useMove } from "./player";

defineOptions({
  name: "Player",
});

const { player } = usePlayerStore();

useMove();
const { position } = usePosition(player);
</script>

<style lang="scss" scoped>
img {
  width: 50px;
  height: 50px;
}
</style>
