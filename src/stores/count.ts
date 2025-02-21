import { create } from 'zustand';
import {
  combine,
  devtools,
  persist,
  subscribeWithSelector,
} from 'zustand/middleware';

const initialState = {
  count: 1,
  step: 1,
  min: 1,
  max: 100,
};

const derivedState = {
  square: initialState.count ** 2,
};

export const useCountStore = create(
  subscribeWithSelector(
    persist(
      devtools(
        combine({ ...initialState, ...derivedState }, (set) => {
          return {
            increment: () =>
              set(
                ({ count, step, max }) => ({
                  count: count + step > max ? max : count + step,
                }),
                undefined,
                'increment'
              ),
            decrement: () =>
              set(
                ({ count, step, min }) => ({
                  count: count - step < min ? min : count - step,
                }),
                undefined,
                'decrement'
              ),
            reset: () => set(initialState, undefined, 'reset'),
            update: (value: number) =>
              set(
                ({ max, min }) => ({
                  count: value > max ? max : value < min ? min : value,
                }),
                undefined,
                'update'
              ),
          };
        })
      ),
      { name: 'store/counter' }
    )
  )
);

// 상태 변경 구독
useCountStore.subscribe(
  // 셀렉터
  (s) => s.count,
  // 리스너
  (count) => {
    useCountStore.setState({ square: count ** 2 });
  }
);
