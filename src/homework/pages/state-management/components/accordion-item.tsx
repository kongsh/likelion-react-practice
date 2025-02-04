import { tm } from '@/utils/tw-merge';

export interface AccordionItemType {
  id: string;
  title: string;
  children: React.ReactNode;
  open?: boolean;
}

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  open?: boolean;
  onUpdate?: () => void;
}

function AccordionItem({
  title,
  children,
  open = false,
  onUpdate,
}: AccordionItemProps) {
  const handleToggle = () => {
    console.log('toggled');
    onUpdate?.();
  };

  return (
    <div className={tm('flex flex-col space-y-2 w-full', 'mb-8')}>
      <button
        type="button"
        className={tm(
          'text-xl font-medium text-slate-800',
          'flex-1',
          'cursor-pointer',
          'hover:text-primary-700'
        )}
        onClick={handleToggle}
      >
        {title}
      </button>
      <div
        className={tm(
          { hidden: !open },
          'text-sm text-slate-800 leading-[1.5]',
          '*:mb-3',
          // [from]
          'opacity-50 -translate-y-2 h-0',
          // start
          'starting:opacity-0 starting:-translate-y-2 starting:h-0',
          // 전환
          'transition-all transition-discrete duration-700 delay-200',
          // [to]
          { 'opacity-100 translate-y-0 h-30': open }
        )}
      >
        {children}
      </div>
    </div>
  );
}

export default AccordionItem;
