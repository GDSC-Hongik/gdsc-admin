import { curry } from "./curry";

export const map = curry(<T>(f: (...args: any[]) => any, iter: Iterable<T> = []) => {
  const res = [];

  for (const a of iter) {
    res.push(f(a));
  }

  return res;
});
