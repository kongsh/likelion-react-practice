import { tm } from '@/utils/tw-merge';
import { useState } from 'react';

function AccordionItem({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [isVisible, setIsvisible] = useState(false);

  const handleToggle = () => setIsvisible((v) => !v);

  return (
    <div className="flex flex-col space-y-0.5">
      <button type="button" onClick={handleToggle}>
        {title}
      </button>
      <div className={tm({ hidden: !isVisible })}>{children}</div>
    </div>
  );
}

export default AccordionItem;
