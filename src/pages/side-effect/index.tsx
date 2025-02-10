import { useEffect, useState } from 'react';

function SideEffectDemo() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: PointerEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };

    globalThis.addEventListener('pointermove', handleMove);

    return () => {
      globalThis.removeEventListener('pointermove', handleMove);
    };
  }, []);

  return (
    <section className="*:text-slate-800">
      <h2 className="text-2xl font-medium mb-2">React.useEffect 훅 함수</h2>
      <output className="inline-flex my-5 py-3 px-5 border-2 text-2xl">
        x = {mouse.x} / y = {mouse.y}
      </output>
    </section>
  );
}

export default SideEffectDemo;
