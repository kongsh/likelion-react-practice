import { useState } from 'react';
import type { ChipList as ChipListType } from '@/types/chip';
import ChipList from '@/components/chip-list';

function Playground() {
  const [chipData] = useState<ChipListType>([
    {
      id: 1,
      label: '전체',
    },
    {
      id: 2,
      label: '아우터',
    },
    {
      id: 3,
      label: '바지',
    },
    {
      id: 4,
      label: '티셔츠',
    },
    {
      id: 5,
      label: '점퍼',
    },
    {
      id: 6,
      label: '원피스',
    },
  ]);

  return (
    <div
      className="playground"
      style={{
        marginInline: 40,
      }}
    >
      <h1>playground</h1>
      <div
        style={{
          inlineSize: 240,
          blockSize: 640,
          border: '4px solid rgba(0 0 0 / 10%)',
          borderRadius: 12,
          padding: 8,
        }}
      >
        <ChipList items={chipData}></ChipList>
      </div>
    </div>
  );
}

export default Playground;
