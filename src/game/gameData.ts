import { MapTile } from "../store/map";

export interface LevelGameData {
  player: {
    x: number;
    y: number;
  };
  map: MapTile[][];
  cargos: {
    x: number;
    y: number;
  }[];
  targets: {
    x: number;
    y: number;
  }[];
}

export type GameData = LevelGameData[];

export const levelGameData = {
  player: {
    x: 1,
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
    { x: 2, y: 1 },
    { x: 5, y: 5 },
  ],
};

export const gameData: GameData = [
  levelGameData,
  {
    player: {
      x: 1,
      y: 2,
    },
    map: [
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 2, 2, 2, 2, 2, 1, 1],
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
      { x: 2, y: 1 },
      { x: 5, y: 5 },
    ],
  },
];
