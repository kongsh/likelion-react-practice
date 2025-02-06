// 게임 상수

export const INITIAL_CELLS = Array(9).fill(null);

export const enum PLAYER {
  ONE = '😀',
  TWO = '😈',
}

export type Cells = (PLAYER | null)[];

const WIN_CONDITIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 5, 8],
];

export type Winner = {
  player: PLAYER;
  condition: [number, number, number];
} | null;

export const getWinner = (cells: Cells): Winner => {
  let winner = null;

  for (const [x, y, z] of WIN_CONDITIONS) {
    const player = cells[x];
    if (player && cells[y] === player && cells[z] === player) {
      winner = {
        player,
        condition: [x, y, z],
      };
      break;
    }
  }

  return winner as Winner;
};
