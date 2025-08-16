import { atom, selector } from "recoil";

export const counterState = atom({
  key: "counterState",
  default: 0,
});

// Selector for Even/Odd
export const evenSelector = selector({
  key: "evenSelector",
  get: ({ get }) => {
    const count = get(counterState);
    return count % 2 === 0 ? "Even" : "Odd";
  },
});
