import { defineStore } from "pinia";
import { reactive } from "vue";
import { useCargoStore } from "./cargo";

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

  return {
    game,
    detectionGameCompleted,
  };
});
