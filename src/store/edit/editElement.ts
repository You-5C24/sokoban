import { Position } from "@/composables/usePostion";
import { defineStore } from "pinia";
import { useMapEditStore } from "./mapEdit";
import { MapTile } from "../map";
import Wall from "@/assets/wall.png";
import Floor from "@/assets/floor.png";

export interface EditElement {
  img: string;
  execute: (position: Position) => void;
}

export const wallEditElement: EditElement = {
  img: Wall,
  execute(position) {
    const { map } = useMapEditStore();
    map[position.y][position.x] = MapTile.WALL;
  },
};

export const floorEditElement: EditElement = {
  img: Floor,
  execute(position) {
    const { map } = useMapEditStore();
    map[position.y][position.x] = MapTile.FLOOR;
  },
};
export const useEditElementStore = defineStore("edit-element", () => {
  let currentSelectedEditElement: EditElement;

  function getCurrentSelectedEditElement() {
    return currentSelectedEditElement;
  }

  function setCurrentSelectedEditElement(editElement: EditElement) {
    currentSelectedEditElement = editElement;
  }

  return {
    getCurrentSelectedEditElement,
    setCurrentSelectedEditElement,
  };
});
