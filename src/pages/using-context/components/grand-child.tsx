import { useContext } from 'react';
import { GreetingContext } from '../page';
import { tm } from '@/utils/tw-merge';
import { useTheme } from '@/contexts/theme';

function GrandChild() {
  const { mode } = useTheme();

  const isDarkMode = mode.includes('dark');

  const { message, setMessage } = useContext(GreetingContext);

  return (
    <div
      className={tm(
        'flex-1 flex flex-col gap-3 p-5 border-4 rounded-full justify-center items-center',
        {
          'bg-black border-white text-white': isDarkMode,
        }
      )}
    >
      {message}
      <button
        type="button"
        className={tm('bg-react text-white p-2 text-sm rounded-full', {
          'bg-white border-white text-black': isDarkMode,
        })}
        onClick={() => {
          setMessage('반갑습니다!');
        }}
      >
        Page 컴포넌트에 인사하기
      </button>
    </div>
  );
}

export default GrandChild;
