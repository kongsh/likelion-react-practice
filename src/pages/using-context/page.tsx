import Title from '@/components/title';
import GrandParent from './components/grand-parent';
import { createContext, useState } from 'react';
import AnotherParent from './components/another-parent';

interface GreetingContextValue {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}

export const GreetingContext = createContext<GreetingContextValue>({
  message: '',
  setMessage() {
    console.log('초기 함수');
  },
});

function UsingContextPage() {
  const [message, setMessage] = useState('hello Grand Parent!');

  const value = { message, setMessage };

  return (
    <>
      <Title>컨텍스트를 활용한 상태 공유</Title>
      <section className="flex flex-col gap-2">
        <GreetingContext value={value}>
          <h2 className="text-2xl font-medium">컨텍스트 활용 (상태 공유)</h2>
          <h3 className="text-xl font-medium">컨텍스트 내부</h3>

          <GrandParent />
        </GreetingContext>
        <hr />
        <h3 className="text-xl font-medium">컨텍스트 외부</h3>
        <AnotherParent />
      </section>
    </>
  );
}

export default UsingContextPage;
