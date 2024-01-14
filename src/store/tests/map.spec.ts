import { it, expect, describe, beforeEach } from "vitest";
import { useMapStore } from "../map";
import { setActivePinia, createPinia } from "pinia";

describe("map", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("should", () => {
    expect(true).toBe(true);
  });

  it("setup map", () => {
    const { setupMap, map } = useMapStore();
    const newMap = [
      [1, 1, 1],
      [1, 1, 1],
    ];

    setupMap(newMap);

    expect(map).toEqual(newMap);
  });
});
