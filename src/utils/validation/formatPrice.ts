export const formatPrice = (price: number | string) => {
  if (typeof price === "string") {
    return `${Number(price).toLocaleString()}원`;
  }
  return `${price.toLocaleString()}원`;
};
