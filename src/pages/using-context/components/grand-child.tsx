import { useContext } from 'react';
import { GreetingContext } from '../page';

function GrandChild() {
  const { message, setMessage } = useContext(GreetingContext);

  return (
    <div className="flex-1 flex flex-col gap-3 p-5 border-4 rounded-full justify-center items-center">
      {message}
      <button
        type="button"
        className="bg-react text-white p-2 text-sm rounded-full"
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
