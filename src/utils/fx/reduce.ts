import { curry } from "./curry";

export const reduce = curry(
  <T, U>(f: (acc: U, value: T) => U, acc: U, iter: Iterable<T> = []): U => {
    for (const a of iter) {
      acc = f(acc, a);
    }

    return acc;
  },
);
