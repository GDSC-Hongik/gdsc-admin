export const formatNullableValue = <T extends unknown | null>(value: T) => {
  if (typeof value === "object") {
    return "-";
  }
  return value;
};
