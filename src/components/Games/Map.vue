<template>
  <div>
    <div v-for="(_, i) in map" class="flex">
      <div v-for="(_, j) in map[i]">
        <template v-if="map[i][j] === MapTile.WALL">
          <img :src="Floor" />
        </template>
        <template v-else-if="map[i][j] === MapTile.FLOOR">
          <img :src="Wall" />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Floor from "../../assets/floor.png";
import Wall from "../../assets/wall.png";
import { useMapStore, MapTile } from "../../store/map.ts";

defineOptions({
  name: "Map",
});

const { map } = useMapStore();
</script>

<style lang="scss" scoped>
img {
  width: 50px;
  height: 50px;
}
</style>
