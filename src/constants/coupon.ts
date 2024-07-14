import { CouponInfoSelectMenuType } from "@/types/entities/coupon";

export const issuedCouponInfoSelectMenu: CouponInfoSelectMenuType = [
  {
    value: "1",
    name: "학번",
    type: "studentId",
  },
  {
    value: "2",
    name: "이름",
    type: "memberName",
  },
  {
    value: "3",
    name: "전화번호",
    type: "phone",
  },
  {
    value: "4",
    name: "쿠폰명",
    type: "couponName",
  },
  {
    value: "5",
    name: "사용여부",
    type: "hasUsed",
  },
  {
    value: "6",
    name: "회수여부",
    type: "hasRevoked",
  },
];

export const couponStatusSelectMenu = [
  {
    value: "1",
    name: "O",
    type: "true",
  },
  {
    value: "2",
    name: "X",
    type: "false",
  },
];
