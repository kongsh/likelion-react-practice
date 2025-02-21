import { useCountStore } from '@/stores/count';
import { tm } from '@/utils/tw-merge';
import { Minus, Plus, Redo } from '@mynaui/icons-react';
import { memo } from 'react';

function CountControllers() {
  const increment = useCountStore(({ increment }) => increment);
  const decrement = useCountStore(({ decrement }) => decrement);
  const reset = useCountStore(({ reset }) => reset);
  const update = useCountStore(({ update }) => update);

  return (
    <div className="flex gap-1">
      <input
        type="number"
        aria-label="카운트 값"
        className="border"
        defaultValue={1}
        onChange={(e) => update(Number(e.currentTarget.value))}
      />
      <button
        type="button"
        className={tm(
          'cursor-pointer',
          'bg-react text-white font-black',
          'size-10 rounded-full flex justify-center items-center'
        )}
        onClick={increment}
      >
        <Plus size={24} />
      </button>
      <button
        type="button"
        className={tm(
          'cursor-pointer',
          'bg-react text-white font-black',
          'size-10 rounded-full flex justify-center items-center'
        )}
        onClick={decrement}
      >
        <Minus size={24} />
      </button>
      <button
        type="reset"
        className={tm(
          'cursor-pointer',
          'bg-react text-white font-black',
          'size-10 rounded-full flex justify-center items-center'
        )}
        onClick={reset}
      >
        <Redo size={24} />
      </button>
    </div>
  );
}

export default memo(CountControllers);
