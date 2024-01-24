import { defineStore } from "pinia";
import { Position } from "../composables/usePostion";

export enum MapTile {
  WALL = 1,
  FLOOR = 2,
}

export const useMapStore = defineStore("map", () => {
  const map = [
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 1, 1, 1],
  ];

  function setupMap(val: MapTile[][]) {
    map.splice(0, map.length, ...val);
  }

  function isWall(position: Position) {
    return map[position.x][position.y] === MapTile.WALL;
  }

  return {
    map,
    setupMap,
    isWall,
  };
});
