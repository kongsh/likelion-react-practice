import { tm } from '@/utils/tw-merge';
import Cell from './cell';
import { useState } from 'react';
import { type Cells, INITIAL_CELLS, PLAYER } from '../constants';

function Grid() {
  const [cells] = useState<Cells>(INITIAL_CELLS);

  const [order, setOrder] = useState<number>(0);

  const nextPlayer = order % 2 === 0 ? PLAYER.ONE : PLAYER.TWO;

  const handlePlay = (index: number) => {
    const nextOrder = order + 1;
    setOrder(nextOrder);
    console.log(index, 'click', nextPlayer);
  };

  return (
    <div className={tm('grid grid-cols-3 grid-rows-3 gap-1')}>
      {cells.map((_cell, index) => {
        return (
          <Cell key={index} onPlay={() => handlePlay(index)}>
            {index}
          </Cell>
        );
      })}
    </div>
  );
}

export default Grid;
