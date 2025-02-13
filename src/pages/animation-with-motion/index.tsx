import { Box, Redo } from '@mynaui/icons-react';
import AnimationBox from './components/animation-box';
import { tm } from '@/utils/tw-merge';
import { useState } from 'react';
import StaggerAnimationList from './components/stagger-list';

function AnimationWithMotionPage() {
  const [replayKey, setReplayKey] = useState(0);

  const handleReplay = () => {
    setReplayKey((r) => r + 1);
  };

  return (
    <section className="flex flex-col gap-5 items-start">
      <h2 className="text-2xl font-medium">
        애니메이션 - Motion 라이브러리 활용
      </h2>

      <button
        type="button"
        className={tm(
          'flex items-center gap-1.5 px-3.5 py-2 rounded-lg',
          'bg-react text-white text-sm font-semibold uppercase',
          'cursor-pointer',
          'active:scale-95'
        )}
        onClick={handleReplay}
      >
        <Redo size={18} />
        Replay
      </button>

      <StaggerAnimationList />

      <AnimationBox key={replayKey}>
        <Box size={32} />
      </AnimationBox>
    </section>
  );
}

export default AnimationWithMotionPage;
