import { curry } from "./curry";

export const reduce = curry(
  <T, U>(f: (acc: U, value: T) => U, acc: any, iter: IterableIterator<T>): U => {
    if (!iter) {
      iter = acc[Symbol.iterator]();
      acc = iter.next().value;
    }

    for (const a of iter) {
      acc = f(acc, a);
    }

    return acc;
  },
);
