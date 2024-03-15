export const memberInfoValidation = {
  studentId: {
    regExp: "^[A-C]{1}[0-9]{6}$",
    errorText: "올바르지 않은 학번입니다.",
  },
  email: {
    regExp: "^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$",
    errorText: "올바르지 않은 이메일입니다.",
  },
  phone: {
    regExp: "^010[0-9]{8}$",
    errorText: "올바르지 않은 전화번호입니다.",
  },
  nickname: {
    regExp: "[ㄱ-ㅣ가-힣]{1,6}$",
    errorText: "올바르지 않은 디스코드 닉네임입니다.",
  },
};
