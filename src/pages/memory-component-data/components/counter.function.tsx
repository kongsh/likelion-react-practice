import usePrev from '@/hooks/use-prev';
import { tm } from '@/utils/tw-merge';
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(9);

  const prevCount = usePrev(count);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  return (
    <>
      <button
        type="button"
        onClick={handleIncrease}
        className={tm(
          'cursor-pointer opacity-90',
          'grid place-content-center',
          'bg-react text-white px-7 py-0.5 rounded-full font-semibold',
          'hover:opacity-100'
        )}
      >
        {count}
      </button>

      <dl className="border-4 rounded-md p-4 my-4 w-full flex flex-col gap-2">
        <div className="flex justify-between">
          <dt className="text-slate-900">이전 count 값 (prevCount)</dt>
          <dd className="font-black">{prevCount}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-slate-900">현재 count 값</dt>
          <dd className="font-black">{count}</dd>
        </div>
      </dl>
    </>
  );
}

export default Counter;
