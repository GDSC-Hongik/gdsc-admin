export const allMemberTableTitle = [
  {
    value: "1",
    name: "학번",
    type: "studentId",
  },
  {
    value: "2",
    name: "이름",
    type: "name",
  },
  {
    value: "3",
    name: "전화번호",
    type: "phone",
  },
  {
    value: "4",
    name: "소속 학과",
    type: "department",
  },
  {
    value: "5",
    name: "이메일",
    type: "email",
  },
  {
    value: "6",
    name: "디스코드 사용자명",
    type: "discordUsername",
  },
  {
    value: "7",
    name: "디스코드 닉네임",
    type: "nickname",
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
    value: "1",
    name: "학번",
    type: "studentId",
  },
  {
    value: "2",
    name: "이름",
    type: "name",
  },
  {
    value: "3",
    name: "전화번호",
    type: "phone",
  },
  {
    value: "4",
    name: "디스코드 사용자명",
    type: "discordUsername",
  },
  {
    value: "5",
    name: "디스코드 닉네임",
    type: "nickname",
  },
  {
    value: "6",
    name: "회비 납부 여부",
    type: "paymentStatus",
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

export const grantableStatusTableTitle = allMemberTableTitle;

export const grantableMemberTableWidthRatio = allMemberTableWidthRatio;

export const paymentStatusTableSelectOptionList = [
  {
    value: 1,
    name: "전체",
  },
  {
    value: 2,
    name: "납부 완료",
  },
  {
    value: 3,
    name: "납부 미완료",
  },
];

export const paymentStatusTableTitle = [
  {
    value: "1",
    name: "학번",
    type: "studentId"
  },
  {
    value: "2",
    name: "이름",
    type: "name"
  },
  {
    value: "3",
    name: "전화번호",
    type: "phone"
  },
  {
    value: "4",
    name: "디스코드 사용자명",
    type: "discordUsername"
  },
  {
    value: "5",
    name: "디스코드 닉네임",
    type: "nickname"
  },
];

export const paymentStatusTableWidthRatio = {
  title: {
    학번: 1.5,
    이름: 1.5,
    전화번호: 1.5,
    default: 1.9,
  },
  cell: {
    studentId: 1.5,
    name: 1.5,
    phone: 1.5,
    default: 1.9,
  },
};

export const paymentStatusFieldMapping = {
  VERIFIED: "완료",
  PENDING: "미완료",
};
