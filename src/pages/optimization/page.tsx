import Section from '@/components/section';
import Heading from '@/components/heading';
import Counter from './components/counter';
import { useState } from 'react';
import Message from './components/message';

function OptimizationPage() {
  const [color] = useState('#dc362f');

  return (
    <Section level={2}>
      <Heading>성능 최적화</Heading>
      <hr className="my-8" />
      <Counter
        messageElement={
          <Message greeting="요소 최적화가 필요해요! 😳" color={color} />
        }
      />
    </Section>
  );
}

export default OptimizationPage;
