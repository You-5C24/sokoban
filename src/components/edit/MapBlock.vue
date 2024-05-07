<template>
  <div class="border border-white" @click="handleClick">
    <template v-if="map[props.y][props.x] === MapTile.WALL">
      <img :src="Wall" />
    </template>
    <template v-else-if="map[props.y][props.x] === MapTile.FLOOR">
      <img :src="Floor" />
    </template>
  </div>
</template>

<script setup lang="ts">
import { MapTile } from "@/store/map";
import Wall from "@/assets/wall.png";
import Floor from "@/assets/floor.png";
import { useMapEditStore } from "@/store/edit/mapEdit";
import { useEditElementStore } from "../../store/edit/editElement";

defineOptions({
  name: "MapBlock",
});

interface Props {
  x: number;
  y: number;
}

const props = defineProps<Props>();

const { map } = useMapEditStore();
const { getCurrentSelectedEditElement } = useEditElementStore();

function handleClick() {
  getCurrentSelectedEditElement().execute(props);
}
</script>

<style lang="scss" scoped></style>
