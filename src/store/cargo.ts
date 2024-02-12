import { defineStore } from "pinia";
import { reactive } from "vue";
import { useMapStore } from "./map";
import { Position } from "../composables/usePostion";

interface Cargo {
  x: number;
  y: number;
}
export const useCargoStore = defineStore("cargo", () => {
  const cargos: Cargo[] = reactive([]);
  const { isWall } = useMapStore();

  function createCargo({ x, y }: Cargo): Cargo {
    return {
      x,
      y,
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
    return true;
  }

  return {
    cargos,
    createCargo,
    addCargo,
    findCargo,
    moveCargo,
  };
});
