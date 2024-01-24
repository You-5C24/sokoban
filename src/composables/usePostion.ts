import { computed } from "vue";

export interface Position {
  x: number;
  y: number;
}

export function usePosition(pos: Position) {
  const STEP = 50;
  const position = computed(() => {
    return {
      left: `${STEP * pos.x}px`,
      top: `${STEP * pos.y}px`,
    };
  });

  return {
    position,
  };
}
