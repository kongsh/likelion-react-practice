import { tm } from '@/utils/tw-merge';
import Cell from './cell';
import { Cells, Winner } from '../constants';

interface GridProps {
  cells: Cells;
  winner: Winner;
  onPlay: (cellIndex: number) => void;
}

function Grid({ cells, winner, onPlay }: GridProps) {
  return (
    <div className={tm('grid grid-rows-3 grid-cols-3 gap-1')}>
      {cells.map((cell, index) => {
        let winnerClasses = '';

        if (winner) {
          const [x, y, z] = winner.condition;
          if (index === x || index === y || index === z) {
            winnerClasses = 'outline-2 outline-indigo-500 bg-indigo-500/30';
          }
        }
        return (
          <Cell
            key={index}
            className={winnerClasses}
            onPlay={() => onPlay(index)}
          >
            {cell}
          </Cell>
        );
      })}
    </div>
  );
}

export default Grid;
