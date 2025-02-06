import { useState } from 'react';
import { tm } from '@/utils/tw-merge';
import { getWinner, INITIAL_CELLS, PLAYER, type Cells } from '../constants';
import Cell from './cell';

function Grid() {
  const [cells, setCells] = useState<Cells>(INITIAL_CELLS);
  const [order, setOrder] = useState<number>(0);

  const nextPlayer = order % 2 === 0 ? PLAYER.ONE : PLAYER.TWO;

  const winner = getWinner(cells);

  console.log(winner);

  const handlePlay = (index: number) => {
    if (winner) {
      alert(`GAME OVER! Winner ${winner.player}`);
      return;
    }

    const nextOrder = order + 1;
    setOrder(nextOrder);

    const nextCells = cells.map((cell, i) => (index !== i ? cell : nextPlayer));
    setCells(nextCells);
  };

  return (
    <div className={tm('grid grid-rows-3 grid-cols-3 gap-1')}>
      {cells.map((cell, index) => {
        let winnerClasses = '';

        if (winner) {
          const [x, y, z] = winner.condition;
          if (index === x || index === y || index === z) {
            winnerClasses = 'outline-2 outline-amber-500';
          }
        }
        return (
          <Cell
            key={index}
            className={winnerClasses}
            onPlay={() => handlePlay(index)}
          >
            {cell}
          </Cell>
        );
      })}
    </div>
  );
}

export default Grid;
