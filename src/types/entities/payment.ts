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
