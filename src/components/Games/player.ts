import { computed, onMounted, onUnmounted } from "vue";
import { usePlayerStore } from "../../store/player";

export function useMove() {
  const {
    movePlayerToLeft,
    movePlayerToRight,
    movePlayerToDown,
    movePlayerToUp,
  } = usePlayerStore();

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
  }

  onMounted(() => {
    window.addEventListener("keyup", handleMove);
  });

  onUnmounted(() => {
    window.removeEventListener("keyup", handleMove);
  });
}

export function usePosition() {
  const STEP = 50;
  const { player } = usePlayerStore();
  const position = computed(() => {
    return {
      left: `${STEP * player.x}px`,
      top: `${STEP * player.y}px`,
    };
  });

  return {
    position,
  };
}
