import { tm } from '@/utils/tw-merge';
import Status from './status';
import Grid from './grid';
import { useState } from 'react';
import { Cells, getWinner, INITIAL_CELLS, PLAYER } from '../constants';

function Board() {
  const [cells, setCells] = useState<Cells>(INITIAL_CELLS);
  const [order, setOrder] = useState<number>(0);

  const nextPlayer = order % 2 === 0 ? PLAYER.ONE : PLAYER.TWO;

  const winner = getWinner(cells);

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

  const statusMessage = `다음 플레이어 ${nextPlayer}`;

  return (
    <section className={tm('flex flex-col space-y-2 items-center', 'w-60')}>
      <h3 className="sr-only">게임 보드</h3>
      <Status message={statusMessage} />
      <Grid cells={cells} winner={winner} onPlay={handlePlay} />
    </section>
  );
}

export default Board;
