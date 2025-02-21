import { create } from 'zustand';
import { combine } from 'zustand/middleware';

const initialState = {
  count: 1,
  step: 1,
  min: 1,
  max: 100,
};

export const useCountStore = create(
  combine({ ...initialState }, (set) => {
    return {
      actions: {
        increment: () =>
          set(({ count, step, max }) => ({
            count: count + step > max ? max : count + step,
          })),
        decrement: () =>
          set(({ count, step, min }) => ({
            count: count - step < min ? min : count - step,
          })),
        reset: () => set(initialState),
      },
    };
  })
);
