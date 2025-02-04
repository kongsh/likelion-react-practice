import { tm } from '@/utils/tw-merge';

export function AccordionOpendedCount({
  className = '',
  children,
}: React.ComponentProps<'output'>) {
  return (
    <output className={tm('text-6xl font-normal text-slate-700', className)}>
      {children}
    </output>
  );
}
