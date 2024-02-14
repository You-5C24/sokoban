import { defineStore } from "pinia";
import { reactive } from "vue";
import { useMapStore } from "./map";
import { useCargoStore } from "./cargo";

export const usePlayerStore = defineStore("player", () => {
  const player = reactive({
    x: 0,
    y: 0,
  });

  function _move(dx: number, dy: number) {
    const { isWall } = useMapStore();

    if (isWall({ x: player.x + dx, y: player.y + dy })) return;

    const { moveCargo, findCargo } = useCargoStore();

    const cargo = findCargo({ x: player.x + dx, y: player.y + dy });

    if (cargo) {
      const isMoveCargo = moveCargo(cargo, dx, dy);

      if (!isMoveCargo) return;
    }

    player.x += dx;
    player.y += dy;
  }

  function movePlayerToLeft() {
    _move(-1, 0);
  }

  function movePlayerToRight() {
    _move(1, 0);
  }

  function movePlayerToDown() {
    _move(0, 1);
  }

  function movePlayerToUp() {
    _move(0, -1);
  }

  return {
    player,
    movePlayerToLeft,
    movePlayerToRight,
    movePlayerToDown,
    movePlayerToUp,
  };
});
