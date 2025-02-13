import { BookHome, Box } from '@mynaui/icons-react';
import AnimationBox from './components/animation-box';

function AnimationWithMotionPage() {
  return (
    <section className="flex flex-col gap-5">
      <h2 className="text-2xl font-medium">
        애니메이션 - Motion 라이브러리 활용
      </h2>

      <AnimationBox>
        <Box size={32} />
      </AnimationBox>
      <AnimationBox>
        <BookHome size={32} />
      </AnimationBox>
    </section>
  );
}

export default AnimationWithMotionPage;
