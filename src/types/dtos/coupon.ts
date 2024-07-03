type CouponType = {
  couponId: number;
  name: string;
  discountAmount: number;
  createdAt: string;
};

export type CouponListResponseDtoType = CouponType[];

export type IssuedCouponType = {
  issuedCouponId: number;
  member: {
    memberId: number;
    studentId: string;
    name: string;
    email: string;
    phone: string;
  };
  couponName: string;
  discountAmount: number;
  usedAt: string;
  isUsed: boolean;
};

export type IssuedCouponListResponseDtoType = IssuedCouponType[];
