import { IssuedCouponType } from "../dtos/coupon";

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
