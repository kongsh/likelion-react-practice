import { tm } from '@/utils/tw-merge';
import { useContext } from 'react';
import { TicTacToeContext } from '../contexts/tic-tac-toe';

type CellProps = React.ComponentProps<'button'> & {
  index: number;
};

function Cell({ children, className = '', index, ...restProps }: CellProps) {
  const { playGame } = useContext(TicTacToeContext);

  const hasChildren = !!children;

  const handlePlay = () => {
    // 화면에 표시한 플레이어(콘텐츠)가 있다면? (함수 종료)
    if (hasChildren) return;
    // 화면에 표시한 플레이어(콘텐츠)가 없다면? (onPlay 함수 실행)
    playGame(index);
  };

  return (
    <button
      type="button"
      onClick={handlePlay}
      aria-disabled={hasChildren}
      className={tm(
        'cursor-pointer',
        'size-16 border rounded-md',
        'text-2xl font-semibold',
        'border-black/50',
        { 'hover:border-black hover:bg-slate-100/60': !hasChildren },
        { 'cursor-not-allowed bg-black/10': hasChildren },
        className
      )}
      {...restProps}
    >
      {children}
    </button>
  );
}

export default Cell;
