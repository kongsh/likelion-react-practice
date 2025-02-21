import { create } from 'zustand';
import { combine, devtools, persist } from 'zustand/middleware';

const initialState = {
  count: 1,
  step: 1,
  min: 1,
  max: 100,
};

export const useCountStore = create(
  // 개발 도구 미들웨어
  persist(
    devtools(
      combine({ ...initialState }, (set) => {
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
);
