import { tm } from '@/utils/tw-merge';

interface StatusProps {
  message: string;
  onReGame?: () => void;
}

function Status({ message, onReGame }: StatusProps) {
  const isComplete = !message.includes('다음 플레이어');

  const handleReGame = () => {
    onReGame?.();
  };

  return (
    <div className={tm('flex justify-between w-full px-4')}>
      <p>{message}</p>
      {isComplete && (
        <button
          type="button"
          className={tm(
            'cursor-pointer',
            'px-1.5 py-1 border-1 border-slate-400 rounded-sm',
            'font-semibold  text-xs',
            'hover:bg-slate-800/10'
          )}
          onClick={handleReGame}
        >
          다시하기
        </button>
      )}
    </div>
  );
}

export default Status;
