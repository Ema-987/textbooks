
import {BLUE, GREEN, GREY, LIME, RED, YELLOW} from '../shared/constants';

export type VoxelData = {
  locs: Array<[number, number, number]>,
  color: string
};

export const layers: VoxelData[] = [
  {locs: [], color: ''},
  {
    locs: [
      [-1, -2, -2], [0, -2, -2], [1, -2, -2], [2, -2, -2],
      [-2, -2, -2], [-2, -1, -2], [-2, 0, -2], [-2, 1, -2],
      [-2, 2, -2], [-1, -1, -2], [-1, 0, -2], [-1, 1, -2],
      [-1, 2, -2], [0, -1, -2], [0, 0, -2], [0, 1, -2],
      [0, 2, -2], [1, -1, -2], [1, 0, -2], [1, 1, -2],
      [1, 2, -2], [2, -1, -2], [2, 0, -2], [2, 1, -2],
      [2, 2, -2]
    ],
    color: BLUE
  },
  {
    locs: [
      [-1, -2, -1], [0, -2, -1], [1, -2, -1], [2, -2, -1],
      [-2, -2, -1], [-2, -1, -1], [-2, 0, -1], [-2, 1, -1],
      [-2, 2, -1], [-1, -1, -1], [-1, 0, -1], [-1, 1, -1],
      [-1, 2, -1], [0, -1, -1], [0, 0, -1], [0, 1, -1],
      [0, 2, -1], [1, -1, -1], [1, 0, -1], [1, 1, -1],
      [1, 2, -1], [2, -1, -1], [2, 0, -1], [2, 1, -1],
      [2, 2, -1]
    ],
    color: GREEN
  },
  {
    locs: [
      [-1, -2, 0], [0, -2, 0], [1, -2, 0], [2, -2, 0],
      [-2, -2, 0], [-2, -1, 0], [-2, 0, 0], [-2, 1, 0],
      [-2, 2, 0], [-1, -1, 0], [-1, 0, 0], [-1, 1, 0],
      [-1, 2, 0], [0, -1, 0], [0, 0, 0], [0, 1, 0],
      [0, 2, 0], [1, -1, 0], [1, 0, 0], [1, 1, 0],
      [1, 2, 0], [2, -1, 0], [2, 0, 0], [2, 1, 0],
      [2, 2, 0]
    ],
    color: YELLOW
  },
  {
    locs: [
      [-1, -2, 1], [0, -2, 1], [1, -2, 1], [2, -2, 1],
      [-2, -2, 1], [-2, -1, 1], [-2, 0, 1], [-2, 1, 1],
      [-2, 2, 1], [-1, -1, 1], [-1, 0, 1], [-1, 1, 1],
      [-1, 2, 1], [0, -1, 1], [0, 0, 1], [0, 1, 1],
      [0, 2, 1], [1, -1, 1], [1, 0, 1], [1, 1, 1],
      [1, 2, 1], [2, -1, 1], [2, 0, 1], [2, 1, 1],
      [2, 2, 1]
    ],
    color: RED
  },
  {
    locs: [
      [-1, -2, 2], [0, -2, 2], [1, -2, 2], [2, -2, 2],
      [-2, -2, 2], [-2, -1, 2], [-2, 0, 2], [-2, 1, 2],
      [-2, 2, 2], [-1, -1, 2], [-1, 0, 2], [-1, 1, 2],
      [-1, 2, 2], [0, -1, 2], [0, 0, 2], [0, 1, 2],
      [0, 2, 2], [1, -1, 2], [1, 0, 2], [1, 1, 2],
      [1, 2, 2], [2, -1, 2], [2, 0, 2], [2, 1, 2],
      [2, 2, 2]
    ],
    color: LIME
  }
];

export const templeParts: VoxelData[] = [
  { // Floor
    locs: [
      [-1, -2, -2], [0, -2, -2], [1, -2, -2], [2, -2, -2],
      [-2, -2, -2], [-2, -1, -2], [-2, 0, -2], [-2, 1, -2],
      [-2, 2, -2], [-1, -1, -2], [-1, 0, -2], [-1, 1, -2],
      [-1, 2, -2], [0, -1, -2], [0, 0, -2], [0, 1, -2],
      [0, 2, -2], [1, -1, -2], [1, 0, -2], [1, 1, -2],
      [1, 2, -2], [2, -1, -2], [2, 0, -2], [2, 1, -2],
      [2, 2, -2]
    ],
    color: BLUE
  },
  { // Pillars
    locs: [
      [2, -2, 0], [-2, -2, 0], [-2, 2, 0], [2, -2, -1],
      [-2, -2, -1], [-2, 2, -1], [2, -2, 1], [-2, -2, 1],
      [-2, 2, 1]
    ],
    color: GREY
  },
  { // Top
    locs: [
      [-1, -2, 2], [0, -2, 2], [1, -2, 2], [2, -2, 2],
      [-2, -2, 2], [-2, -1, 2], [-2, 0, 2], [-2, 1, 2],
      [-2, 2, 2]
    ],
    color: YELLOW
  }
];
