import { it, expect, describe, beforeEach } from "vitest";
import { usePlayerStore } from "../player";
import { setActivePinia, createPinia } from "pinia";
import { useMapStore } from "../map";
import { useCargoStore } from "../cargo";

describe("player", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  describe("normal move", () => {
    beforeEach(() => {
      const { setupMap } = useMapStore();
      setupMap([
        [2, 2, 2, 2],
        [2, 2, 2, 2],
        [2, 2, 2, 2],
        [2, 2, 2, 2],
      ]);
    });

    it("should move to left", () => {
      const { player, movePlayerToLeft } = usePlayerStore();
      player.x = 1;
      player.y = 1;

      movePlayerToLeft();

      expect(player.x).toBe(0);
    });

    it("should move to right", () => {
      const { player, movePlayerToRight } = usePlayerStore();
      player.x = 1;
      player.y = 1;

      movePlayerToRight();

      expect(player.x).toBe(2);
    });

    it("should move to down", () => {
      const { player, movePlayerToDown } = usePlayerStore();
      player.x = 1;
      player.y = 1;

      movePlayerToDown();

      expect(player.y).toBe(2);
    });

    it("should move to up", () => {
      const { player, movePlayerToUp } = usePlayerStore();
      player.x = 1;
      player.y = 1;

      movePlayerToUp();

      expect(player.y).toBe(0);
    });
  });

  describe("collision wall", () => {
    beforeEach(() => {
      const { setupMap } = useMapStore();
      setupMap([
        [1, 1, 1, 1],
        [1, 2, 2, 1],
        [1, 2, 2, 1],
        [1, 1, 1, 1],
      ]);
    });

    it("should move to left while collision wall", () => {
      const { player, movePlayerToLeft } = usePlayerStore();
      player.x = 1;
      player.y = 1;

      movePlayerToLeft();

      expect(player.x).toBe(1);
    });

    it("should move to right while collision wall", () => {
      const { player, movePlayerToRight } = usePlayerStore();
      player.x = 2;
      player.y = 1;

      movePlayerToRight();

      expect(player.x).toBe(2);
    });

    it("should move to down while collision wall", () => {
      const { player, movePlayerToDown } = usePlayerStore();
      player.x = 1;
      player.y = 2;

      movePlayerToDown();

      expect(player.y).toBe(2);
    });

    it("should move to up while collision wall", () => {
      const { player, movePlayerToUp } = usePlayerStore();
      player.x = 1;
      player.y = 1;

      movePlayerToUp();

      expect(player.y).toBe(1);
    });
  });

  describe("move cargo", () => {
    beforeEach(() => {
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

    it("move cargo to left", () => {
      const { createCargo, addCargo } = useCargoStore();
      const cargo = createCargo({ x: 2, y: 1 });
      addCargo(cargo);

      const { player, movePlayerToLeft } = usePlayerStore();
      player.x = 3;
      player.y = 1;

      movePlayerToLeft();

      expect(player.x).toBe(2);
      expect(cargo.x).toBe(1);
    });

    it("move cargo to right", () => {
      const { createCargo, addCargo } = useCargoStore();
      const cargo = createCargo({ x: 4, y: 1 });
      addCargo(cargo);

      const { player, movePlayerToRight } = usePlayerStore();
      player.x = 3;
      player.y = 1;

      movePlayerToRight();

      expect(player.x).toBe(4);
      expect(cargo.x).toBe(5);
    });

    it("move cargo to down", () => {
      const { createCargo, addCargo } = useCargoStore();
      const cargo = createCargo({ x: 3, y: 2 });
      addCargo(cargo);

      const { player, movePlayerToDown } = usePlayerStore();
      player.x = 3;
      player.y = 1;

      movePlayerToDown();

      expect(player.y).toBe(2);
      expect(cargo.y).toBe(3);
    });

    it("move cargo to up", () => {
      const { createCargo, addCargo } = useCargoStore();
      const cargo = createCargo({ x: 3, y: 2 });
      addCargo(cargo);

      const { player, movePlayerToUp } = usePlayerStore();
      player.x = 3;
      player.y = 3;

      movePlayerToUp();

      expect(player.y).toBe(2);
      expect(cargo.y).toBe(1);
    });

    it("can not move cargo when hit the wall", () => {
      const { createCargo, addCargo } = useCargoStore();
      const cargo = createCargo({ x: 1, y: 1 });
      addCargo(cargo);

      const { player, movePlayerToLeft } = usePlayerStore();
      player.x = 2;
      player.y = 1;

      movePlayerToLeft();

      expect(player.x).toBe(2);
    });

    it("can not move cargo when hit the other wall", () => {
      const { createCargo, addCargo } = useCargoStore();
      addCargo(createCargo({ x: 1, y: 1 }));
      addCargo(createCargo({ x: 2, y: 1 }));

      const { player, movePlayerToLeft } = usePlayerStore();
      player.x = 3;
      player.y = 1;

      movePlayerToLeft();

      expect(player.x).toBe(3);
    });
  });
});
