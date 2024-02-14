import { defineStore } from "pinia";
import { reactive } from "vue";
import { useMapStore } from "./map";
import { Position } from "../composables/usePostion";
import { useTargetStore } from "./target";

export interface Cargo {
  x: number;
  y: number;
  onTarget: boolean;
}
export const useCargoStore = defineStore("cargo", () => {
  const cargos: Cargo[] = reactive([]);
  const { isWall } = useMapStore();

  function createCargo({ x, y, onTarget }: Cargo): Cargo {
    return {
      x,
      y,
      onTarget,
    };
  }

  function addCargo(cargo: Cargo) {
    cargos.push(cargo);
  }

  function findCargo(position: Position) {
    return cargos.find((c) => c.x === position.x && c.y === position.y);
  }

  function moveCargo(cargo: Cargo, dx: number, dy: number) {
    const position = { x: cargo.x + dx, y: cargo.y + dy };
    if (isWall(position)) return false;

    if (findCargo(position)) return false;

    cargo.x += dx;
    cargo.y += dy;

    detectionTarget(cargo);

    return true;
  }

  function detectionTarget(cargo: Cargo) {
    const { findTarget } = useTargetStore();

    cargo.onTarget = !!findTarget(cargo);
  }

  return {
    cargos,
    createCargo,
    addCargo,
    findCargo,
    moveCargo,
  };
});
