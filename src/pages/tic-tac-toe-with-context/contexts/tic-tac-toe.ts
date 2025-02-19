import { createContext } from 'react';
import { type Cells, PLAYER, Winner } from '../constants';

export interface TicTacToeContextValue {
  gameHistory: Cells[] | undefined;
  currentCells: Cells;
  setGameHistory: React.Dispatch<React.SetStateAction<Cells[] | undefined>>;
  gameOrder: number | undefined;
  setGameOrder: React.Dispatch<React.SetStateAction<number | undefined>>;
  nextPlayer: PLAYER;
  winner: Winner;
  statusMessage: string;
  playGame: (index: number) => void;
  restartGame: () => void;
  jumpGame: (travelIndex: number) => void;
}

export const TicTacToeContext = createContext<TicTacToeContextValue>({
  gameHistory: [],
  currentCells: [],
  setGameHistory: () => {
    /* ... */
  },
  gameOrder: 0,
  setGameOrder: () => {
    /* ... */
  },
  nextPlayer: PLAYER.ONE,
  winner: null,
  statusMessage: '',
  playGame: () => {
    /* ... */
  },
  restartGame: () => {
    /* ... */
  },
  jumpGame: () => {
    /* ... */
  },
});
