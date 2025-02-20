import Heading from '@/components/heading';
import Section from '@/components/section';
import { createContext, useMemo, useState } from 'react';
import Counter from './components/counter';
import Message from './components/message';
import Title from '@/components/title';

export const ColorContext = createContext('#000');

function OptimizationPage() {
  const [color] = useState('#000');

  const [stars, setStars] = useState('⭐️');
  const handleAddStar = () => setStars((s) => s + '⭐️');

  const messageElement = useMemo(
    () => <Message greeting="요소 최적화가 필요해요! 😳" />,
    []
  );

  return (
    <>
      <Title>리액트 앱 성능 최적화</Title>
      <Section level={2}>
        <Heading>성능 최적화</Heading>
        <hr className="my-8" />

        <div className="flex gap-5">
          <button type="button" onClick={handleAddStar}>
            ⭐️ 추가
          </button>

          <output>{stars}</output>
        </div>

        <hr className="my-8" />
        <ColorContext value={color}>
          <Counter messageElement={messageElement} />
        </ColorContext>
      </Section>
    </>
  );
}

export default OptimizationPage;
