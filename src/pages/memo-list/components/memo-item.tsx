import { tm } from '@/utils/tw-merge';
import { EditOne, EditOneSolid, TrashOne } from '@mynaui/icons-react';
import {
  MemoItem as MemoItemType,
  MemoItemUpdate,
} from '../lib/supabase-client';
import { deleteMemoItem, editMemoItem } from '../lib/api';
import { useEffect, useRef, useState } from 'react';
import Loading from './loading';
import delay from '@/utils/delay';

interface MemoItemProps {
  item: MemoItemType;
}

function MemoItem({ item }: MemoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const editButtonLabel = isEditing ? '저장' : '수정';

  useEffect(() => {
    if (isEditing) {
      titleRef.current?.focus();
    }
  }, [isEditing]);

  const handleChangeEditMode = () => {
    setIsEditing(true);
  };

  const handleSaveMemo = async () => {
    await delay(900);
    const titleElement = titleRef.current!;
    const contentElement = contentRef.current!;
    const currentTime = new Date().toISOString();

    if (titleElement && contentElement) {
      const willEditMemoItem = {
        ...item,
        title: titleElement.textContent,
        content: contentElement.textContent,
        updated_at: currentTime,
      } as MemoItemUpdate;
      setIsSaving(true);
      await editMemoItem(willEditMemoItem);

      // 서버에 저장한 후 모드 변경
      setIsSaving(false);
      setIsEditing(false);
    }
  };

  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLParagraphElement>(null);

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
        { 'relative bg-react/70': isDeleting || isSaving }
      )}
    >
      {(isDeleting || isSaving) && (
        <Loading
          label={isSaving ? '저장 중...' : '삭제 중...'}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-10"
        />
      )}

      <h3
        ref={titleRef}
        contentEditable={isEditing}
        suppressContentEditableWarning
        className="font-light tracking-wide text-xl text-sky-500"
      >
        {item.title}
      </h3>
      <p
        ref={contentRef}
        contentEditable={isEditing}
        suppressContentEditableWarning
        className="text-sm text-slate-400 leading-relaxed"
      >
        {item.content}
      </p>
      <div role="group" className="flex gap-1">
        <button
          type="button"
          aria-label={editButtonLabel}
          title={editButtonLabel}
          onClick={!isEditing ? handleChangeEditMode : handleSaveMemo}
          className={tm(
            'cursor-pointer',
            'size-6 opacity-75 hover:opacity-100'
          )}
        >
          {!isEditing ? <EditOne size={20} /> : <EditOneSolid size={20} />}
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
