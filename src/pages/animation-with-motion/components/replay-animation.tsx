import { tm } from '@/utils/tw-merge';
import { Redo } from '@mynaui/icons-react';
import { useState } from 'react';

function ReplayAnimation({
  children,
  className,
  ...restProps
}: React.ComponentProps<'div'>) {
  const [replayKey, setReplayKey] = useState(0);

  const handleReplay = () => {
    setReplayKey((r) => r + 1);
  };

  return (
    <div
      key={replayKey}
      className={(tm('flex flex-col gap-4 items-start'), className)}
      {...restProps}
    >
      <button
        type="button"
        className={tm(
          'flex items-center gap-1.5 px-3.5 py-2 rounded-lg',
          'bg-react text-white text-sm font-semibold uppercase',
          'cursor-pointer',
          'active:scale-95'
        )}
        onClick={handleReplay}
      >
        <Redo size={18} />
        Replay
      </button>
      {children}
    </div>
  );
}

export default ReplayAnimation;
