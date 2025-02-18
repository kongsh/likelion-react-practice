import { tm } from '@/utils/tw-merge';
import { SendSolid } from '@mynaui/icons-react';
import { useFormStatus } from 'react-dom';
import Loading from './loading';

function SendButton() {
  const { pending } = useFormStatus();

  const buttonLabel = pending ? '작성 중...' : '작성';

  return (
    <button
      type="submit"
      aria-label={buttonLabel}
      title={buttonLabel}
      className={tm(
        'cursor-pointer self-start',
        'p-1 bg-react text-white/80 rounded-sm',
        'hover:text-sky-600'
      )}
    >
      {pending ? <Loading size={20} /> : <SendSolid size={20} />}
    </button>
  );
}

export default SendButton;
