<template>
  <div class="absolute" :style="position">
    <img :src="CargoImg" />
  </div>
</template>

<script setup lang="ts">
import CargoImg from "../../assets/cargo.png";
import { usePosition } from "../../composables/usePostion";

defineOptions({
  name: "Cargo",
});

interface Props {
  x: number;
  y: number;
}

const props = defineProps<Props>();

const { position } = usePosition(props);
</script>

<style lang="scss" scoped>
img {
  width: 50px;
  height: 50px;
}
</style>
