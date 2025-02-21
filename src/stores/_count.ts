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
  setMin: (value: number) => void;
  setMax: (value: number) => void;
}

type Store = State & { actions: Actions };

export const useCountStore = create<Store>((set) => ({
  count: 0,
  step: 1,
  min: 1,
  max: 10,
  actions: {
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
    update: (value) => set({ count: value }),
    setStep: (value) => set({ step: value }),
    setMin: (value) => set({ min: value }),
    setMax: (value) => set({ max: value }),
    reset: () => set({ count: 0 }),
  },
}));
