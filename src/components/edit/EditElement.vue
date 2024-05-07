<template>
  <div @click="handleClick">
    <img :src="editElement.img" />
  </div>
</template>

<script setup lang="ts">
import { useEditElementStore, EditElement } from "../../store/edit/editElement";

defineOptions({
  name: "EditElement",
});

interface Props {
  editElement: EditElement;
}

const props = defineProps<Props>();

const { setCurrentSelectedEditElement } = useEditElementStore();

function handleClick() {
  setCurrentSelectedEditElement(props.editElement);
}
</script>

<style lang="scss" scoped></style>
