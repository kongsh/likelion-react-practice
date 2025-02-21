import { memo } from 'react';
import CountDisplay from './countDisplay';
import CountControllers from './count-controllers';

function Counter() {
  return (
    <div className="flex flex-col gap-2 items-center">
      <CountDisplay />

      <CountControllers />
    </div>
  );
}

export default memo(Counter);
