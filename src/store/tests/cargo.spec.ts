import { it, expect, describe, beforeEach } from "vitest";
import { useCargoStore } from "../cargo";
import { createPinia, setActivePinia } from "pinia";
import { useTargetStore } from "../target";
import { useMapStore } from "../map";

describe("cargo", () => {
  beforeEach(() => {
    setActivePinia(createPinia());

    const { setupMap } = useMapStore();
    setupMap([
      [1, 1, 1, 1, 1, 1, 1],
      [1, 2, 2, 2, 2, 2, 1],
      [1, 2, 2, 2, 2, 2, 1],
      [1, 2, 2, 2, 2, 2, 1],
      [1, 2, 2, 2, 2, 2, 1],
      [1, 2, 2, 2, 2, 2, 1],
      [1, 1, 1, 1, 2, 2, 1],
    ]);
  });

  it("add new cargo", () => {
    const { cargos, createCargo, addCargo } = useCargoStore();

    addCargo(createCargo({ id: 1, x: 1, y: 1, onTarget: false }));

    expect(cargos).toEqual([{ id: 1, x: 1, y: 1, onTarget: false }]);
  });

  describe("on target", () => {
    it("shift in", () => {
      const { createCargo, addCargo, moveCargo } = useCargoStore();
      const cargo = createCargo({ id: 1, x: 2, y: 1, onTarget: false });
      addCargo(cargo);

      const { createTarget, addTarget } = useTargetStore();
      addTarget(createTarget({ x: 1, y: 1 }));

      moveCargo(cargo, -1, 0);

      expect(cargo.onTarget).toBe(true);
    });

    it("shift out", () => {
      const { createCargo, addCargo, moveCargo } = useCargoStore();
      const cargo = createCargo({ id: 1, x: 3, y: 1, onTarget: false });
      addCargo(cargo);

      const { createTarget, addTarget } = useTargetStore();
      addTarget(createTarget({ x: 2, y: 1 }));

      moveCargo(cargo, -1, 0);
      moveCargo(cargo, -1, 0);

      expect(cargo.onTarget).toBe(false);
    });

    it("should clean all cargos", () => {
      const { createCargo, addCargo, cleanAllCargos, cargos } = useCargoStore();
      addCargo(createCargo({ id: 1, x: 2, y: 1, onTarget: false }));
      addCargo(createCargo({ id: 2, x: 3, y: 1, onTarget: false }));

      cleanAllCargos();

      expect(cargos.length).toBe(0);
    });
  });
});
