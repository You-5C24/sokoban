<template>
  <div class="absolute" :style="position">
    <img :src="cargo.onTarget ? CargoOnTargetImg : CargoImg" />
  </div>
</template>

<script setup lang="ts">
import CargoImg from "../../assets/cargo.png";
import CargoOnTargetImg from "../../assets/cargo_on_target.png";
import { usePosition } from "../../composables/usePostion";
import { Cargo } from "../../store/cargo";

defineOptions({
  name: "Cargo",
});

interface Props {
  cargo: Cargo;
}

const props = defineProps<Props>();

const { position } = usePosition(props.cargo);
</script>

<style lang="scss" scoped>
img {
  width: 50px;
  height: 50px;
}
</style>
