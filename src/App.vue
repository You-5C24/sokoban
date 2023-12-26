<template>
  <div class="bg-pink-500">sokoban{{ map }}</div>
</template>

<script setup lang="ts">
import { useMapStore } from "./store/map.ts";

const { map } = useMapStore();
</script>
