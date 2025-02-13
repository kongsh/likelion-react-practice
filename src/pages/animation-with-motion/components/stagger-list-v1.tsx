import { tm } from '@/utils/tw-merge';
import { animate } from 'motion';
import { useEffect, useRef } from 'react';

function StaggerAnimationList() {
  const itemMapRef = useRef<null | Map<number, HTMLLIElement>>(null);

  const getItemMap = () => {
    if (!itemMapRef.current) {
      itemMapRef.current = new Map();
    }
    return itemMapRef.current;
  };

  useEffect(() => {
    const itemMap = getItemMap();
    const items = Array.from(itemMap.values());

    items.forEach((item, index) => {
      // keyframes 애니메이션
      animate(
        item,
        { y: [100, 0, -50, 25, 5, 0], opacity: [0, 1] },
        { delay: 0.3 * index }
      );
    });
  }, []);

  return (
    <ul className={tm('flex gap-2.5')}>
      {Array(4)
        .fill(null)
        .map((_, index) => (
          <li
            key={index}
            className={tm(
              'flex justify-center items-center size-16 rounded-lg',
              'bg-react text-white text-lg font-medium'
            )}
            ref={(element) => {
              const itemMap = getItemMap();

              if (element) {
                itemMap.set(index, element);
              }

              return () => {
                itemMap.delete(index);
              };
            }}
          >
            {index + 1}
          </li>
        ))}
    </ul>
  );
}

export default StaggerAnimationList;
