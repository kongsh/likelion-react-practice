import { tm } from '@/utils/tw-merge';
import { useRef, useState } from 'react';

function Counter() {
  const [count, setCount] = useState(9);

  const prevCountValueRef = useRef(count);

  // 현재 count 값을 prevCount 변수에 할당해도
  // 다음 렌더링에 prevCount 변수는 초기화 됨
  let prevCount = count;

  // 결과적으로 prevCount, count는 항상 값이 동일
  console.log('이전 count:', prevCount);
  console.log('현재 count:', count);

  const handleIncrease = () => {
    // 다음 렌더링에서 이전 count 값 기억 (실패)
    prevCount = count;

    prevCountValueRef.current = count;

    // 다음 렌더링에 사용될 상태 값 업데이트
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

      <dl className="border-4 rounded-md p-4 my-4 w-48 flex flex-col gap-2">
        <div className="flex justify-between">
          <dt className="text-slate-900">이전 count 값 (prevCount)</dt>
          <dd className="font-black">{prevCount}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-slate-900">
            이전 count 값 (prevCountValueRef.current)
          </dt>
          <dd className="font-black">{prevCountValueRef.current}</dd>
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
