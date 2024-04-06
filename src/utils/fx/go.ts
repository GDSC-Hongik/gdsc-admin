import { reduce } from "./reduce";

export const go = <T>(...args: T[]) => reduce((a: any, f: (value: T) => any) => f(a), args);
