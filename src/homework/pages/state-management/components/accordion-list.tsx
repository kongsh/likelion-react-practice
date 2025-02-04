import { tm } from '@/utils/tw-merge';
import AccordionItem, { AccordionItemType } from './accordion-item';
import { AccordionOpendedCount } from './accordion-opened-count';
import { useState } from 'react';

interface AccordionListProps {
  title: string;
}

const INITIAL_ACCORDION_ITEMS: AccordionItemType[] = [
  {
    id: 'item-1',
    title: '넷플릭스는 무엇인가요?',
    children: (
      <>
        <p>넷플릭스는</p>
        <p>넷플릭스입니다.</p>
      </>
    ),
    open: false,
  },
  {
    id: 'item-2',
    title: '넷플릭스 요금은 얼마인가요?',
    children: (
      <>
        <p>넷플릭스 요금은</p>
        <p>검색해보세요.</p>
      </>
    ),
    open: false,
  },
];

function AccordionList({ title }: AccordionListProps) {
  const [items, setItems] = useState<AccordionItemType[]>(
    INITIAL_ACCORDION_ITEMS
  );

  const generateSubcstiveHandler = (index: number) => {
    return (nextIsVisible: boolean) => {
      const nextItems = items.map((item, i) => {
        return index !== i ? item : { ...item, open: nextIsVisible };
      });
      setItems(nextItems);
    };
  };

  return (
    <article className={tm('flex flex-col space-y-2 items-center', 'mt-10')}>
      <h3 className="sr-only">{title}</h3>
      <AccordionOpendedCount />
      {items.map((item, index) => (
        <AccordionItem
          title={item.title}
          key={item.id}
          open={item.open}
          onSubscribe={generateSubcstiveHandler(index)}
        >
          {item.children}
        </AccordionItem>
      ))}
    </article>
  );
}

export default AccordionList;
