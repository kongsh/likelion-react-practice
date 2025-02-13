import { tm } from '@/utils/tw-merge';
import { motion } from 'motion/react';
import { useState } from 'react';

function MotionComponent() {
  // [상태 선언] 애니메이션 속성 객체
  const [options, setOptions] = useState({
    scale: 1,
    rotate: 0,
    x: 0,
    y: 0,
  });

  const handleChangeOptions = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    setOptions((options) => ({
      ...options,
      [name]: Number(value),
    }));
  };

  return (
    <div lang="en" className="flex gap-10 p-2">
      <motion.div
        animate={options}
        transition={{ delay: 0.2, duration: 0.4 }}
        className={tm(
          'order-1',
          'w-42 h-24.5 p-4',
          ' bg-react text-white font-thin tracking-wide text-2xl'
        )}
      >
        Motion for React
      </motion.div>

      <form className="order-0 flex flex-col gap-0.5 w-60">
        <div className="grid grid-cols-[60px_1fr_30px]">
          <label htmlFor="options-x" className="font-medium">
            X
          </label>
          <input
            id="options-x"
            type="range"
            name="x"
            min={-30}
            max={30}
            value={options.x}
            onChange={handleChangeOptions}
          />
          <output className="place-self-end">{options.x}</output>
        </div>
        <div className="grid grid-cols-[60px_1fr_30px]">
          <label htmlFor="options-y" className="font-medium">
            Y
          </label>
          <input
            id="options-y"
            type="range"
            name="y"
            min={-30}
            max={30}
            value={options.y}
            onChange={handleChangeOptions}
          />
          <output className="place-self-end">{options.y}</output>
        </div>
        <div className="grid grid-cols-[60px_1fr_30px]">
          <label htmlFor="options-scale" className="font-medium">
            Scale
          </label>
          <input
            id="options-scale"
            type="range"
            name="scale"
            min={0.5}
            max={1.5}
            step={0.5}
            value={options.scale}
            onChange={handleChangeOptions}
          />
          <output className="place-self-end">{options.scale}</output>
        </div>
        <div className="grid grid-cols-[60px_1fr_30px]">
          <label htmlFor="options-rotate" className="font-medium">
            Rotate
          </label>
          <input
            id="options-rotate"
            type="range"
            name="rotate"
            min={-360}
            max={360}
            step={45}
            value={options.rotate}
            onChange={handleChangeOptions}
          />
          <output className="place-self-end">{options.rotate}</output>
        </div>
      </form>
    </div>
  );
}

export default MotionComponent;
