export const formatTableValue = <T extends unknown | null>(value: T) => {
  if (typeof value === "object") {
    return "미기입";
  }
  return value;
};
