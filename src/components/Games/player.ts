import { onMounted, onUnmounted } from "vue";
import { usePlayerStore } from "../../store/player";
import { useGameStore } from "../../store/game";

export function useMove() {
  const {
    movePlayerToLeft,
    movePlayerToRight,
    movePlayerToDown,
    movePlayerToUp,
  } = usePlayerStore();

  const { detectionGameCompleted } = useGameStore();

  function handleMove(e: KeyboardEvent) {
    switch (e.code) {
      case "ArrowLeft":
        movePlayerToLeft();
        break;
      case "ArrowRight":
        movePlayerToRight();
        break;
      case "ArrowDown":
        movePlayerToDown();
        break;
      case "ArrowUp":
        movePlayerToUp();
        break;
    }
    detectionGameCompleted();
  }

  onMounted(() => {
    window.addEventListener("keyup", handleMove);
  });

  onUnmounted(() => {
    window.removeEventListener("keyup", handleMove);
  });
}
