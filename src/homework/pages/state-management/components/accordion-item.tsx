import { tm } from '@/utils/tw-merge';
import { useState } from 'react';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
}

function AccordionItem({ title, children }: AccordionItemProps) {
  const [isVisible, setIsvisible] = useState(false);

  const handleToggle = () => setIsvisible((v) => !v);

  return (
    <div className={tm('flex flex-col space-y-2', 'mb-8')}>
      <button
        type="button"
        className={tm(
          'text-xl font-medium text-primary-500',
          'cursor-pointer',
          'hover:text-primary-700'
        )}
        onClick={handleToggle}
      >
        {title}
      </button>
      <div
        className={tm(
          { hidden: !isVisible },
          'text-sm text-slate-800 leading-[1.5]',
          '*:mb-3',
          // [from]
          'opacity-50 -translate-y-2',
          // start
          'starting:opacity-0 starting:-translate-y-2',
          // 전환
          'transition-all transition-discrete duration-500',
          // [to]
          { 'opacity-100 translate-y-0': isVisible }
        )}
      >
        {children}
      </div>
    </div>
  );
}

export default AccordionItem;
