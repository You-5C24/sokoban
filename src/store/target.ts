import { defineStore } from "pinia";
import { reactive } from "vue";
import { Position } from "../composables/usePostion";

interface Target {
  x: number;
  y: number;
}

export const useTargetStore = defineStore("target", () => {
  const targets = reactive<Target[]>([]);

  function createTarget({ x, y }: Target): Target {
    return {
      x,
      y,
    };
  }

  function addTarget(target: Target) {
    targets.push(target);
  }

  function findTarget(position: Position) {
    return targets.find((c) => c.x === position.x && c.y === position.y);
  }

  function cleanAllTagets() {
    targets.splice(0, targets.length);
  }

  return {
    cleanAllTagets,
    targets,
    createTarget,
    addTarget,
    findTarget,
  };
});
