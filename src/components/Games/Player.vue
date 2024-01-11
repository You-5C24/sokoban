<template>
  <div>
    <img :src="Keeper" />
  </div>
</template>

<script setup lang="ts">
import Keeper from "../../assets/keeper.png";

defineOptions({
  name: "Player",
});
</script>

<style lang="scss" scoped>
img {
  width: 50px;
  height: 50px;
}
</style>
