import { create } from 'zustand';

interface State {
  count: number;
  step: number;
  min: number;
  max: number;
}

interface Actions {
  increment: () => void;
  decrement: () => void;
  update: (value: number) => void;
  reset: () => void;
  setStep: (value: number) => void;
}

type Store = State & Actions;

export const useCountStore = create<Store>((set) => {
  return {
    count: 0,
    step: 1,
    min: 1,
    max: 10,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
    update: (value) => set({ count: value }),
    setStep: (value) => set({ step: value }),
    reset: () => set({ count: 0 }),
  };
});
