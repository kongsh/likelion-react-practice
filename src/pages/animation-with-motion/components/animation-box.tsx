import { animate } from 'motion';
import { tm } from '@/utils/tw-merge';
import { useEffect, useRef } from 'react';

function AnimationBox({
  className,
  ...restProps
}: React.ComponentProps<'div'>) {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const boxElement = boxRef.current;
    if (boxElement) {
      animate(
        // 애니메이션 대상
        boxElement,
        // 애니메이션 속성
        {
          x: 240 /* 24px 만큼 이동 */,
          rotate: -360 /* -360deg 만큼 회전 */,
        },
        {
          type: 'spring',
          repeat: Infinity,
          repeatDelay: 0.2,
        }
      );
    }
  }, []);

  return (
    <div
      ref={boxRef}
      className={tm(
        'flex justify-center items-center',
        'bg-react text-white text-lg font-medium',
        'size-30 rounded-lg',
        className
      )}
      {...restProps}
    />
  );
}

export default AnimationBox;
