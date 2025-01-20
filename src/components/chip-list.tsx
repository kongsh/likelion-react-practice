import './chip-list.css';
import type { ChipList as ChipListType } from '@/types/chip';
import Chip from './chip';
import { useState } from 'react';

interface ChipListProps {
  items: ChipListType;
}

function ChipList({ items }: ChipListProps) {
  const [pressedIndex, updatePressedIndex] = useState<number>(0);

  const handleToggle = (willChangePressedIndex: number) => {
    updatePressedIndex(willChangePressedIndex);
  };

  return (
    <ul className="chip-list">
      {items.map((item, index) => {
        const isPressed = index === pressedIndex;

        return (
          <li key={item.id}>
            <Chip
              item={item}
              pressed={isPressed}
              index={index}
              onToggle={handleToggle}
            ></Chip>
          </li>
        );
      })}
    </ul>
  );
}

export default ChipList;
