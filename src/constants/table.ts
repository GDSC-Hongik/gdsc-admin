export const allMemberTableTitle = [
  {
    value: 1,
    name: "학번",
  },
  {
    value: 2,
    name: "이름",
  },
  {
    value: 3,
    name: "전화번호",
  },
  {
    value: 4,
    name: "소속 학과",
  },
  {
    value: 5,
    name: "이메일",
  },
  {
    value: 6,
    name: "디스코드 사용자명",
  },
  {
    value: 7,
    name: "디스코드 닉네임",
  },
];

export const allMemberTableWidthRatio = {
  title: {
    학번: 0.8,
    이름: 0.8,
    전화번호: 1.1,
    default: 1.9,
  },
  cell: {
    studentId: 0.8,
    name: 0.8,
    phone: 1.1,
    default: 1.9,
  },
};

export const pendingMemberTableTitle = [
  {
    value: 1,
    name: "학번",
  },
  {
    value: 2,
    name: "이름",
  },
  {
    value: 3,
    name: "전화번호",
  },
  {
    value: 4,
    name: "디스코드 사용자명",
  },
  {
    value: 5,
    name: "디스코드 닉네임",
  },
  {
    value: 6,
    name: "회비 납부 여부",
  },
];

export const pendingMemberTableWidthRatio = {
  title: {
    학번: 1.1,
    이름: 1.1,
    전화번호: 1.1,
    default: 1.9,
  },
  cell: {
    studentId: 1.1,
    name: 1.1,
    phone: 1.1,
    default: 1.9,
  },
};

export const pendingMemberModalWidthRatio = {
  title: {
    학번: 1,
    이름: 1,
    default: 2,
  },
  cell: {
    studentId: 1,
    name: 1,
    default: 2,
  },
};

export const paymentStatusTableSelectOptionList = [
  {
    value: 1,
    name: "전체",
  },
  {
    value: 2,
    name: "납입",
  },
  {
    value: 3,
    name: "미납입",
  },
];

export const paymentStatusTableTitle = [
  {
    value: 1,
    name: "학번",
  },
  {
    value: 2,
    name: "이름",
  },
  {
    value: 3,
    name: "전화번호",
  },
  {
    value: 4,
    name: "디스코드 핸들명",
  },
  {
    value: 5,
    name: "디스코드 닉네임",
  },
  {
    value: 6,
    name: "납부 상태",
  },
];

export const paymentStatusTableWidthRatio = {
  title: {
    학번: 1.1,
    이름: 1.1,
    전화번호: 1.1,
    ["납부 상태"]: 1.4,
    default: 1.9,
  },
  cell: {
    studentId: 0.8,
    name: 0.8,
    phone: 1.1,
    default: 1.9,
  },
};

export const paymentStatusFieldMapping = {
  VERIFIED: "완료",
  PENDING: "미완료",
};
