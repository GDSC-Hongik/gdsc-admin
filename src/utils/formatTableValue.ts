export const formatTableValue = <T extends unknown | null>(value: T) => {
  if (typeof value === "object") {
    return "-";
  }
  return value;
};
