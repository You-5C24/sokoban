import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it } from "vitest";
import { useTargetStore } from "../target";

describe("target", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("should clean all targets", () => {
    const { addTarget, createTarget, cleanAllTagets, targets } =
      useTargetStore();

    addTarget(createTarget({ x: 3, y: 1 }));
    addTarget(createTarget({ x: 2, y: 1 }));

    cleanAllTagets();

    expect(targets.length).toBe(0);
  });
});
