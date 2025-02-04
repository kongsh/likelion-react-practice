import { tm } from '@/utils/tw-merge';
import { useState } from 'react';

function StateManagement() {
  return (
    <section>
      <h2 className="sr-only">상태 관리</h2>
      <AccordionItem title="넷플릭스는 무엇인가요?">
        <p>넷플릭스는</p>
        <p>넷플릭스입니다.</p>
      </AccordionItem>
      <AccordionItem title="넷플릭스 요금은 얼마인가요?">
        <p>넷플릭스 요금은</p>
        <p>검색해보세요.</p>
      </AccordionItem>
    </section>
  );
}

export default StateManagement;

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
