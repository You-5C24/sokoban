<template>
  <div>
    <div class="flex">
      <div class="w-4/6 bg-pink-300">
        <MapEdit />
      </div>
      <div>数据展示区</div>
    </div>
    <div>
      <EditElementView />
    </div>
  </div>
</template>

<script setup lang="ts">
import MapEdit from "@/components/edit/MapEdit.vue";
import EditElementView from "@/components/edit/EditElementView.vue";

defineOptions({
  name: "Edit",
});
</script>

<style lang="scss" scoped></style>
