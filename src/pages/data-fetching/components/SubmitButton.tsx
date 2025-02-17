import { PlusSolid, Spinner } from '@mynaui/icons-react';
import { useFormStatus } from 'react-dom';

function SubmitButton({ size = 24, ...restProps }: { size?: number }) {
  const { pending } = useFormStatus();

  const label = pending ? '대기...' : '추가';

  return (
    <button
      type="submit"
      className="px-2 py-1 bg-react text-white my-1 cursor-pointer"
      aria-label={label}
      title={label}
      {...restProps}
    >
      {pending ? (
        <Spinner size={size} className="animate-spin opacity-50" />
      ) : (
        <PlusSolid size={size} />
      )}
    </button>
  );
}

export default SubmitButton;
