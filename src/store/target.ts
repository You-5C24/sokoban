import { defineStore } from "pinia";
import { reactive } from "vue";

interface Target {
  x: number;
  y: number;
}

export const useTargetStore = defineStore("target", () => {
  const targets: Target[] = reactive([
    { x: 2, y: 1 },
    { x: 4, y: 6 },
  ]);

  return {
    targets,
  };
});
