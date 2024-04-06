type Curry = <T, U>(
  f: (arg: T, ...rest: any[]) => U,
) => (arg: T, ...rest: any[]) => U | ((...rest: any[]) => U);

export const curry: Curry =
  f =>
  (a, ...rest) =>
    rest.length ? f(a, ...rest) : (...rest) => f(a, ...rest);

export const reduce = curry(<T, U>(f: (acc: U, value: T) => U, acc: U, iter: Iterable<T> = []): U => {
  for (const a of iter) {
    acc = f(acc, a);
  }

  return acc;
});

export const go = <T>(...args: T[]) => reduce((a: any, f: (value: T) => any) => f(a), args);

export const map = curry(<T>(f: (...args: any[]) => any, iter: Iterable<T> = []) => {
  const res = [];

  for (const a of iter) {
    res.push(f(a));
  }

  return res;
});

export const filter = curry(<T>(f: (...args: any[]) => any, iter: Iterable<T> = []) => {
  const res = [];

  for (const a of iter) {
    if (f(a)) {
      res.push(a);
    }
  }

  return res;
});
