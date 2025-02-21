import { memo } from 'react';
import CountDisplay from './count-display';
import CountControllers from './count-controllers';
import { useCountStore } from '@/stores/count';

function Counter() {
  const { min, max, count, update } = useCountStore();

  return (
    <div className="flex flex-col gap-2 items-center">
      <CountDisplay />
      <input
        type="number"
        aria-label="카운트 값"
        className="border"
        min={min}
        max={max}
        value={count}
        onChange={(e) => update(Number(e.currentTarget.value))}
      />
      <CountControllers />
    </div>
  );
}

export default memo(Counter);
