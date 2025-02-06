import { tm } from '@/utils/tw-merge';

type CellProps = Omit<React.ComponentProps<'button'>, 'onClick'> & {
  onPlay: () => void;
};

function Cell({ children, className = '', onPlay, ...restProps }: CellProps) {
  const hasChildren = !!children;

  const handlePlay = () => {
    if (hasChildren) return;

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
        { 'cursor-not-allowed bg-black/10': hasChildren },
        { 'hover:border-black hover:bg-slate-200/60': !hasChildren },
        className
      )}
      onClick={handlePlay}
      aria-disabled={hasChildren}
      {...restProps}
    >
      {children}
    </button>
  );
}

export default Cell;
