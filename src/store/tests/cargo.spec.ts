import { it, expect, describe, beforeEach } from "vitest";
import { useCargoStore } from "../cargo";
import { createPinia, setActivePinia } from "pinia";

describe("cargo", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("add new cargo", () => {
    const { cargos, createCargo, addCargo } = useCargoStore();

    addCargo(createCargo({ x: 1, y: 1 }));

    expect(cargos).toEqual([{ x: 1, y: 1 }]);
  });
});
