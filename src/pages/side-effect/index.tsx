import throttle from '@/utils/throttle';
import { useEffect, useState } from 'react';

function SideEffectDemo() {
  const [count, setCount] = useState(10);

  const doubleCount = count ** 2;

  const handleChangeCount = () => setCount((c) => c + 2);

  useEffect(() => {
    console.log({ updatedCountValue: count, doubleCount });
  }, [count, doubleCount]);

  // ------------------------

  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const mouseOver = mouse.x > window.innerWidth / 2;

  useEffect(() => {
    console.log(mouseOver);
  }, [mouseOver]);

  useEffect(() => {
    const handleMove = throttle((e: PointerEvent) => {
      setMouse({ x: +e.clientX.toFixed(0), y: +e.clientY.toFixed(0) });
    }, 200);

    globalThis.addEventListener('pointermove', handleMove);

    return () => {
      globalThis.removeEventListener('pointermove', handleMove);
    };
  }, []);

  return (
    <section className="*:text-slate-800 flex flex-col space-y-10">
      <h2 className="text-2xl font-medium mb-2">React.useEffect 훅 함수</h2>
      <button
        type="button"
        className="px-2 py-1 border text-xl"
        onClick={handleChangeCount}
      >
        {count}
      </button>
      <output className="inline-flex my-5 py-3 px-5 border-2 text-2xl">
        x = {mouse.x} / y = {mouse.y}
      </output>
    </section>
  );
}

export default SideEffectDemo;
