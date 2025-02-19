import { tm } from '@/utils/tw-merge';
import Cell from './cell';
import { useContext } from 'react';
import { TicTacToeContext } from '../contexts/tic-tac-toe';

function Grid() {
  const { currentCells: cells, winner } = useContext(TicTacToeContext);

  return (
    <div className={tm('grid grid-rows-3 grid-cols-3 gap-1')}>
      {cells.map((cell, index) => {
        let winnerClasses = '';

        // 승리자가 있다면?
        if (winner) {
          // 승리 패턴(공식)에 해당하는 말판에 색칠 공부하기!!
          const [x, y, z] = winner.condition;
          if (index === x || index === y || index === z) {
            winnerClasses = 'outline-2 outline-indigo-500 bg-indigo-500/30';
          }
        }

        return (
          <Cell key={index} className={winnerClasses} index={index}>
            {cell}
          </Cell>
        );
      })}
    </div>
  );
}

export default Grid;
