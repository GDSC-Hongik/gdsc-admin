type IssuedCouponType = {
  couponId: number;
  name: string;
  discountAmount: number;
  createdAt: string;
};

export type IssuedCouponListResponseDtoType = IssuedCouponType[];
