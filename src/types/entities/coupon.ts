export type CouponInfoType = {
  name: string;
  discountAmount: null | number;
};

export type DetailCouponInfoType = {
  id: IssuedCouponType["issuedCouponId"];
  studentId: IssuedCouponType["member"]["studentId"];
  name: IssuedCouponType["member"]["name"];
  phone: IssuedCouponType["member"]["phone"];
  couponName: IssuedCouponType["couponName"];
  discountAmount: string;
  usedAt: string;
  isUsed: string;
};

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

export type CouponType = {
  couponId: number;
  name: string;
  discountAmount: number;
  createdAt: string;
};
