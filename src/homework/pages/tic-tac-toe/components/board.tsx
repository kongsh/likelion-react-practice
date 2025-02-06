import { tm } from '@/utils/tw-merge';
import Status from './status';
import Grid from './grid';
import { Cells, Winner } from '../constants';

interface BoardProps {
  statusMessage: string;
  cells: Cells;
  winner: Winner;
  onPlayGame: (cellIndex: number) => void;
  onReGame?: () => void;
}

function Board({
  statusMessage,
  cells,
  winner,
  onPlayGame,
  onReGame,
}: BoardProps) {
  return (
    <section className={tm('flex flex-col space-y-2 items-center', 'w-60')}>
      <h3 className="sr-only">게임 보드</h3>
      <Status message={statusMessage} onReGame={onReGame} />
      <Grid cells={cells} winner={winner} onPlay={onPlayGame} />
    </section>
  );
}

export default Board;
