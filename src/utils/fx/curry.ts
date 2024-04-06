type Curry = <T, U>(
  f: (arg: T, ...rest: any[]) => U,
) => (arg: T, ...rest: any[]) => U | ((...rest: any[]) => U);

export const curry: Curry =
  f =>
  (a, ...rest) =>
    rest.length ? f(a, ...rest) : (...rest) => f(a, ...rest);
