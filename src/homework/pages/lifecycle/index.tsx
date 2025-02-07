import { tm } from '@/utils/tw-merge';
import Counter from './components/counter';

function LifeCycleDemo() {
  return (
    <section className={tm()}>
      <h2 className={tm('text-2xl')}>생명주기(Lifecycles)</h2>
      <Counter></Counter>
    </section>
  );
}

export default LifeCycleDemo;
