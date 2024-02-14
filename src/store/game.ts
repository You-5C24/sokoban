import { defineStore } from "pinia";
import { reactive } from "vue";
import { useCargoStore } from "./cargo";
import { useMapStore } from "./map";
import { usePlayerStore } from "./player";
import { useTargetStore } from "./target";
import { LevelGameData } from "../game/gameData";

interface Game {
  isCompleted: boolean;
}

export const useGameStore = defineStore("game", () => {
  const game = reactive<Game>({
    isCompleted: false,
  });

  function detectionGameCompleted() {
    const { cargos } = useCargoStore();

    game.isCompleted = cargos.every((cargo) => cargo.onTarget);
  }

  function setupGame(levelGameData: LevelGameData) {
    const { player } = usePlayerStore();
    player.x = levelGameData.player.x;
    player.y = levelGameData.player.y;

    const { setupMap } = useMapStore();
    setupMap(levelGameData.map);

    const { createCargo, addCargo } = useCargoStore();
    levelGameData.cargos.forEach((cargo) => {
      addCargo(createCargo({ x: cargo.x, y: cargo.y, onTarget: false }));
    });

    const { createTarget, addTarget } = useTargetStore();
    levelGameData.targets.forEach((target) => {
      addTarget(createTarget({ x: target.x, y: target.y }));
    });
  }

  return {
    game,
    detectionGameCompleted,
    setupGame,
  };
});
