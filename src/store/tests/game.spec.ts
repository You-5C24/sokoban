import { createPinia, setActivePinia } from "pinia";
import { it, expect, describe, beforeEach } from "vitest";
import { useCargoStore } from "../cargo";
import { useTargetStore } from "../target";
import { useGameStore } from "../game";

describe("game", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("game completed", () => {
    const { createCargo, addCargo, moveCargo } = useCargoStore();
    const cargo = createCargo({ x: 2, y: 1, onTarget: false });
    addCargo(cargo);

    const { createTarget, addTarget } = useTargetStore();
    addTarget(createTarget({ x: 1, y: 1 }));

    moveCargo(cargo, -1, 0);

    const { game, detectionGameCompleted } = useGameStore();

    detectionGameCompleted();
    expect(game.isCompleted).toBe(true);
  });

  it("game not completed", () => {
    const { createCargo, addCargo, moveCargo } = useCargoStore();
    const cargo = createCargo({ x: 3, y: 1, onTarget: false });
    addCargo(cargo);

    const { createTarget, addTarget } = useTargetStore();
    addTarget(createTarget({ x: 2, y: 1 }));

    moveCargo(cargo, -1, 0);
    moveCargo(cargo, -1, 0);

    const { game, detectionGameCompleted } = useGameStore();

    detectionGameCompleted();
    expect(game.isCompleted).toBe(false);
  });
});
