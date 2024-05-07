<template>
  <div class="absolute" :style="position">
    <img :src="TargetImg" />
  </div>
</template>

<script setup lang="ts">
import TargetImg from "../../assets/target.png";
import { usePosition } from "../../composables/usePostion";

defineOptions({
  name: "Target",
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
