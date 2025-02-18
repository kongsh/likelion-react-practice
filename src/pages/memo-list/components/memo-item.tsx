import { tm } from '@/utils/tw-merge';
import { EditOne, TrashOne } from '@mynaui/icons-react';
import { MemoItem as MemoItemType } from '../lib/supabase-client';
import { deleteMemoItem } from '../lib/api';
import { useState } from 'react';
import Loading from './loading';

interface MemoItemProps {
  item: MemoItemType;
}

function MemoItem({ item }: MemoItemProps) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    await deleteMemoItem(item.id);
    setIsDeleting(false);
  };

  return (
    <li
      className={tm(
        'flex flex-col gap-1.5 p-4 bg-react text-white rounded-sm',
        { 'relative bg-react/70': isDeleting }
      )}
    >
      {isDeleting && (
        <Loading
          label="삭제 중..."
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-10"
        />
      )}
      <h3 className="font-light tracking-wide text-xl text-sky-500">
        {item.title}
      </h3>
      <p className="text-sm text-slate-400 leading-relaxed">{item.content}</p>
      <div role="group" className="flex gap-1">
        <button
          type="button"
          aria-label="수정"
          title="수정"
          className={tm(
            'cursor-pointer',
            'size-6 opacity-75 hover:opacity-100'
          )}
        >
          <EditOne size={20} />
        </button>
        <button
          type="button"
          aria-label="삭제"
          title="삭제"
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onClick={handleDelete}
          className={tm(
            'cursor-pointer',
            'size-6 opacity-75 hover:opacity-100'
          )}
        >
          <TrashOne size={20} />
        </button>
      </div>
    </li>
  );
}

export default MemoItem;
