import { formatPhoneNumber } from "./formatPhoneNumber";

export const memberInfoValidation = {
  studentId: {
    regExp: "^[A-C]{1}[0-9]{6}$",
    errorText: "올바르지 않은 학번입니다.",
    isError: (studentId: string) =>
      studentId?.length > 0 && !RegExp(memberInfoValidation.studentId.regExp).test(studentId),
    helperText: (studentId: string) =>
      studentId?.length > 0 && !RegExp(memberInfoValidation.studentId.regExp).test(studentId)
        ? memberInfoValidation.studentId.errorText
        : "",
  },
  email: {
    regExp: "^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$",
    errorText: "올바르지 않은 이메일입니다.",
    isError: (email: string) =>
      email?.length > 0 && !RegExp(memberInfoValidation.email.regExp).test(email),
    helperText: (email: string) =>
      email?.length > 0 && !RegExp(memberInfoValidation.email.regExp).test(email)
        ? memberInfoValidation.email.errorText
        : "",
  },
  phone: {
    regExp: "^010[0-9]{8}$",
    errorText: "올바르지 않은 전화번호입니다.",
    isError: (phone: string) =>
      phone?.length > 0 &&
      !RegExp(memberInfoValidation.phone.regExp).test(formatPhoneNumber(phone)),
    helperText: (phone: string) =>
      phone?.length > 0 && !RegExp(memberInfoValidation.phone.regExp).test(formatPhoneNumber(phone))
        ? memberInfoValidation.phone.errorText
        : "",
  },
  nickname: {
    regExp: "[ㄱ-ㅣ가-힣]{1,6}$",
    errorText: "올바르지 않은 디스코드 닉네임입니다.",
    isError: (nickname: string | null) =>
      nickname ? !RegExp(memberInfoValidation.nickname.regExp).test(nickname) : undefined,
    helperText: (nickname: string | null) => nickname && !RegExp(memberInfoValidation.nickname.regExp).test(nickname)
    ? memberInfoValidation.nickname.errorText
    : ""
  },
};
