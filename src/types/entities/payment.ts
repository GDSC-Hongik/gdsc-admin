export type PaymentType = {
  orderId: number;
  semester: string;
  memberName: string;
  status: "PENDING" | "COMPLETED" | "CANCELED";
  studentId: string;
  nanoId: string;
  paymentKey: string;
  totalAmount: string;
  discountAmount: string;
  finalPaymentAmount: string;
  approvedAt: string;
};

export type PaymentListType = PaymentType[];

type PaymentSearchVariantType = [
  "studentId",
  "memberName",
  "nanoId",
  "orderId",
  "semester",
  "approvedDate",
];

export type SearchVariantType = PaymentSearchVariantType[number] | null;

export type SearchInfoType = {
  text: string;
  variant: SearchVariantType;
};
