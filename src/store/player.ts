import { defineStore } from "pinia";
import { reactive } from "vue";
import { useMapStore } from "./map";

export const usePlayerStore = defineStore("player", () => {
  const player = reactive({
    x: 2,
    y: 3,
  });

  function movePlayerToLeft() {
    const { isWall } = useMapStore();

    if (isWall({ x: player.x - 1, y: player.y })) return;

    player.x -= 1;
  }

  function movePlayerToRight() {
    const { isWall } = useMapStore();

    if (isWall({ x: player.x + 1, y: player.y })) return;

    player.x += 1;
  }

  function movePlayerToDown() {
    const { isWall } = useMapStore();

    if (isWall({ x: player.x, y: player.y + 1 })) return;

    player.y += 1;
  }

  function movePlayerToUp() {
    const { isWall } = useMapStore();

    if (isWall({ x: player.x, y: player.y - 1 })) return;

    player.y -= 1;
  }

  return {
    player,
    movePlayerToLeft,
    movePlayerToRight,
    movePlayerToDown,
    movePlayerToUp,
  };
});
