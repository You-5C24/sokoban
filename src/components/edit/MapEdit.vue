<template>
  <div>
    <div v-for="(_, i) in map" class="flex">
      <div v-for="(_, j) in map[i]">
        <MapBlock :y="i" :x="j" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMapEditStore } from "@/store/edit/mapEdit";
import MapBlock from "./MapBlock.vue";

defineOptions({
  name: "MapEdit",
});

const { map } = useMapEditStore();
</script>

<style lang="scss" scoped></style>
