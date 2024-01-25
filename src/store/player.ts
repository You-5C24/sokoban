import { defineStore } from "pinia";
import { reactive } from "vue";
import { useMapStore } from "./map";
import { useCargoStore } from "./cargo";

export const usePlayerStore = defineStore("player", () => {
  const player = reactive({
    x: 2,
    y: 3,
  });

  function _move(dx: number, dy: number) {
    const { isWall } = useMapStore();

    if (isWall({ x: player.x + dx, y: player.y + dy })) return;

    const { cargos } = useCargoStore();

    const cargo = cargos.find(
      (c) => c.x === player.x + dx && c.y === player.y + dy
    );

    if (cargo) {
      cargo.x += dx;
      cargo.y += dy;
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
