import { tm } from '@/utils/tw-merge';
import { animate, stagger } from 'motion';
import { useEffect, useRef } from 'react';

function StaggerAnimationList() {
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const listElement = listRef.current;

    if (listElement) {
      const listItems = listElement.querySelectorAll('li');
      animate(
        listItems,
        { y: [100, 0], opacity: [0, 1] },
        { delay: stagger(0.3) }
      );
    }
  }, []);

  return (
    <ul ref={listRef} className={tm('flex gap-2.5')}>
      {Array(4)
        .fill(null)
        .map((_, index) => (
          <li
            key={index}
            className={tm(
              'flex justify-center items-center size-16 rounded-lg',
              'bg-react text-white text-lg font-medium'
            )}
          >
            {index + 1}
          </li>
        ))}
    </ul>
  );
}

export default StaggerAnimationList;
