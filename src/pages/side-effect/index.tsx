import { useEffect, useId, useState } from 'react';
import throttle from '@/utils/throttle';
import { tm } from '@/utils/tw-merge';
import debounce from '@/utils/debounce';

function SideEffectDemo() {
  const throttleTimeId = useId();
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [throttleTime, setThrottleTime] = useState(200);

  // JSX에 연결되는 이벤트 핸들러의 경우 throttle/debounce를 사용
  // 이벤트 발생 빈도 조절 -> defaultValue 속성 사용
  const handleChangeThrottleTime = debounce(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const nextThrottleTime = Number(e.target.value);
      setThrottleTime(nextThrottleTime);
    },
    300
  );

  useEffect(() => {
    const handleMove = throttle((e: PointerEvent) => {
      setMouse({ x: +e.clientX.toFixed(0), y: +e.clientY.toFixed(0) });
    }, throttleTime);

    globalThis.addEventListener('pointermove', handleMove);

    return () => {
      globalThis.removeEventListener('pointermove', handleMove);
    };
  }, [throttleTime]);

  return (
    <section className="flex flex-col items-start">
      <h2 className="text-2xl font-medium">마우스 포인터 움직임 조절</h2>

      <div className="mt-5 mb-1">
        <label htmlFor={throttleTimeId}>이벤트 발생 빈도 조절</label>
        <div className={tm('flex gap-1')}>
          <input
            type="range"
            id={throttleTimeId}
            min={10}
            max={1000}
            defaultValue={throttleTime}
            step={10}
            className="accent-black"
            onChange={handleChangeThrottleTime}
          />
          <output>{throttleTime / 1000}s</output>
        </div>
      </div>

      <output
        className={tm(
          'inline-flex justify-center',
          'my-5 py-3 px-7 rounded-full',
          'bg-black text-white text-2xl'
        )}
      >
        x <span className="font-thin mx-3">=</span> {mouse.x}{' '}
        <span className="font-thin mx-3">/</span> y{' '}
        <span className="font-thin mx-3">=</span> {mouse.y}
      </output>
    </section>
  );
}

export default SideEffectDemo;
