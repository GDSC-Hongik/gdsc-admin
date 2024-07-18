import { MemberInfoType } from "./member";

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
  hasUsed: boolean;
  issuedAt: string;
  hasRevoked: boolean;
};

export type CouponType = {
  couponId: number;
  name: string;
  discountAmount: number;
  createdAt: string;
};

type CouponSearchVariantType = [
  "studentId",
  "memberName",
  "phone",
  "couponName",
  "hasUsed",
  "hasRevoked",
];

export type SearchVariantType = CouponSearchVariantType[number];

export type CouponInfoSelectMenuType = {
  value: string;
  name: string;
  type: SearchVariantType;
}[];

export type CouponSearchInfoContextType = {
  text: string;
  variant: SearchVariantType;
};

export type SelectedCouponProvisionMemberType = Pick<
  MemberInfoType,
  "studentId" | "name" | "phone" | "discordUsername" | "nickname"
> & { id: MemberInfoType["memberId"] };

export type SelectedCouponProvisionMemberListType = SelectedCouponProvisionMemberType[];

export type CreateCouponBodyType = { name: string; discountAmount: number | null };

export type IssueCouponBodyType = {
  couponId: number;
  memberIds: number[];
};
