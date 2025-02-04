import AccordionItem from './accordion-item';
import { AccordionOpendedCount } from './accordion-opened-count';

interface AccordionListProps {
  title: string;
}

function AccordionList({ title }: AccordionListProps) {
  return (
    <article>
      <h3 className="sr-only">{title}</h3>
      <AccordionOpendedCount />
      <AccordionItem title="넷플릭스는 무엇인가요?">
        <p>넷플릭스는</p>
        <p>넷플릭스입니다.</p>
      </AccordionItem>
      <AccordionItem title="넷플릭스 요금은 얼마인가요?">
        <p>넷플릭스 요금은</p>
        <p>검색해보세요.</p>
      </AccordionItem>
    </article>
  );
}

export default AccordionList;
