import { tm } from '@/utils/tw-merge';

type HistoryItemProps = React.ComponentProps<'button'>;

function HistoryItem({
  children,
  className = '',
  ...restProps
}: HistoryItemProps) {
  return (
    <button
      type="button"
      className={tm(
        'cursor-pointer',
        'flex place-content-center px-2.5 py-1.5',
        'rounded-md',
        'bg-slate-800 text-white',
        'text-xs',
        'hover:bg-black',
        className
      )}
      {...restProps}
    >
      {children}
    </button>
  );
}

export default HistoryItem;
