import { defineStore } from "pinia";
import { Position } from "../composables/usePostion";
import { reactive } from "vue";

export enum MapTile {
  WALL = 1,
  FLOOR = 2,
}

export const useMapStore = defineStore("map", () => {
  const map = reactive<MapTile[][]>([]);

  function setupMap(val: MapTile[][]) {
    map.splice(0, map.length, ...val);
  }

  function isWall(position: Position) {
    return map[position.y][position.x] === MapTile.WALL;
  }

  return {
    map,
    setupMap,
    isWall,
  };
});
