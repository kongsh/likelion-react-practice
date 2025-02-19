import { Box } from '@mynaui/icons-react';
import AnimationBox from './components/animation-box';
import StaggerAnimationList from './components/stagger-list';
import ReplayAnimation from './components/replay-animation';
import MotionComponent from './components/declarative-animation';

function AnimationWithMotionPage() {
  return (
    <>
      <title>Motion 라이브러리 활용 | 리액트 플레이그라운드</title>
      <section className="flex flex-col gap-5 items-start">
        <h2 className="text-2xl font-medium">
          애니메이션 - Motion 라이브러리 활용
        </h2>

        <ReplayAnimation>
          <MotionComponent />
        </ReplayAnimation>

        <ReplayAnimation>
          <AnimationBox>
            <Box size={32} />
          </AnimationBox>
        </ReplayAnimation>

        <ReplayAnimation>
          <StaggerAnimationList />
        </ReplayAnimation>
      </section>
    </>
  );
}

export default AnimationWithMotionPage;
