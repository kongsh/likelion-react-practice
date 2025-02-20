import { memo, useState } from 'react';

interface CounterProps {
  messageElement?: React.ReactElement;
}

function Counter({ messageElement }: CounterProps) {
  const [count, setCount] = useState(0);
  const increment = () => setCount((c) => c + 1);

  return (
    <div>
      <button
        type="button"
        className="cursor-pointer bg-react text-white size-8"
        onClick={increment}
      >
        {count}
      </button>
      {messageElement}
    </div>
  );
}

export default memo(Counter);
