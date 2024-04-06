import { curry } from "./curry";

export const filter = curry(<T>(f: (...args: any[]) => any, iter: Iterable<T> = []) => {
  const res = [];

  for (const a of iter) {
    if (f(a)) {
      res.push(a);
    }
  }

  return res;
});
