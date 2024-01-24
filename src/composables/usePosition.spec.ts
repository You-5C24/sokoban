import { it, expect, describe } from "vitest";
import { usePosition } from "./usePostion";
import { reactive } from "vue";

describe("usePosition", () => {
  it("should return position", () => {
    const pos = {
      x: 1,
      y: 1,
    };

    const { position } = usePosition(pos);

    expect(position.value).toEqual({ left: "50px", top: "50px" });
  });

  it("should update position when reactive data changed", () => {
    const pos = reactive({
      x: 1,
      y: 1,
    });

    const { position } = usePosition(pos);

    pos.x = 2;

    expect(position.value).toEqual({ left: "100px", top: "50px" });
  });
});
