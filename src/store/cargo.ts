import { defineStore } from "pinia";
import { reactive } from "vue";

interface Cargo {
  x: number;
  y: number;
}
export const useCargoStore = defineStore("cargo", () => {
  const cargos: Cargo[] = reactive([]);

  function createCargo({ x, y }: Cargo): Cargo {
    return {
      x,
      y,
    };
  }

  function addCargo(cargo: Cargo) {
    cargos.push(cargo);
  }

  return {
    cargos,
    createCargo,
    addCargo,
  };
});
