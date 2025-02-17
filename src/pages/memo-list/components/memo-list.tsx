import { MemoItem } from '../types';

interface MemoListProps {
  items: MemoItem[];
}

function MemoList({ items }: MemoListProps) {
  return (
    <article>
      <h2>메모 리스트</h2>
      <pre>{JSON.stringify(items, null, 2)}</pre>
    </article>
  );
}

export default MemoList;
