import { defineStore } from "pinia";
import { reactive } from "vue";
import { useCargoStore } from "./cargo";
import { useMapStore } from "./map";
import { usePlayerStore } from "./player";
import { useTargetStore } from "./target";
import { GameData } from "../game/gameData";

interface Game {
  isCompleted: boolean;
  level: number;
}

export const useGameStore = defineStore("game", () => {
  const game = reactive<Game>({
    isCompleted: false,
    level: 1,
  });

  let _gameData: GameData;

  function detectionGameCompleted() {
    const { cargos } = useCargoStore();

    game.isCompleted = cargos.every((cargo) => cargo.onTarget);
  }

  function setupGame(gameData: GameData) {
    _gameData = gameData;

    setupLevel();
  }

  function toNextLevel() {
    game.level += 1;
    game.isCompleted = false;

    setupLevel();
  }

  function setupLevel() {
    const levelGameData = _gameData[game.level - 1];

    const { player } = usePlayerStore();
    player.x = levelGameData.player.x;
    player.y = levelGameData.player.y;

    const { setupMap } = useMapStore();
    setupMap(levelGameData.map);

    const { createCargo, addCargo, cleanAllCargos } = useCargoStore();

    cleanAllCargos();

    levelGameData.cargos.forEach((cargo) => {
      addCargo(createCargo({ x: cargo.x, y: cargo.y, onTarget: false }));
    });

    const { createTarget, addTarget, cleanAllTagets } = useTargetStore();

    cleanAllTagets();

    levelGameData.targets.forEach((target) => {
      addTarget(createTarget({ x: target.x, y: target.y }));
    });
  }

  return {
    toNextLevel,
    game,
    detectionGameCompleted,
    setupGame,
  };
});
