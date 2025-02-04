import { tm } from '@/utils/tw-merge';

type CellProps = Omit<React.ComponentProps<'button'>, 'onClick'> & {
  onPlay: () => void;
};

function Cell({ children, className = '', onPlay, ...restProps }: CellProps) {
  const handlePlay = () => {
    onPlay();
  };

  return (
    <button
      type="button"
      className={tm(
        'cursor-pointer',
        'size-16 border rounded-md',
        'border-black/50',
        'text-2xl font-semibold',
        'hover:border-black hover:bg-slate-200/60',
        className
      )}
      onClick={handlePlay}
      {...restProps}
    >
      {children}
    </button>
  );
}

export default Cell;
