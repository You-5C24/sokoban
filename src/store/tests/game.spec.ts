import { createPinia, setActivePinia } from "pinia";
import { it, expect, describe, beforeEach } from "vitest";
import { useCargoStore } from "../cargo";
import { useTargetStore } from "../target";
import { useGameStore } from "../game";
import { useMapStore } from "../map";
import { usePlayerStore } from "../player";

describe("game", () => {
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

  it("setup game", () => {
    const levelGameData = {
      player: {
        x: 2,
        y: 2,
      },
      map: [
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 2, 2, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 2, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
      ],
      cargos: [
        { x: 3, y: 3 },
        { x: 4, y: 4 },
      ],
      targets: [
        { x: 1, y: 1 },
        { x: 5, y: 5 },
      ],
    };

    const { setupGame } = useGameStore();
    const { player } = usePlayerStore();
    const { map } = useMapStore();
    const { cargos } = useCargoStore();
    const { targets } = useTargetStore();

    setupGame(levelGameData);

    expect(player.x).toBe(levelGameData.player.x);
    expect(player.y).toBe(levelGameData.player.y);
    expect(map).toEqual(levelGameData.map);
    expect(cargos.length).toBe(levelGameData.cargos.length);
    expect(targets.length).toBe(levelGameData.targets.length);
  });
});
