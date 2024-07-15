import { MemberInfoSelectMenuType, MemberTypeSelectMenuType } from "@/types/entities/member";

export const memberInfoSelectMenu: MemberInfoSelectMenuType = [
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

export const memberTypeSelectMenu: MemberTypeSelectMenuType = [
  {
    value: "1",
    name: "준회원",
    type: "ASSOCIATE",
  },
  {
    value: "2",
    name: "게스트",
    type: "GUEST",
  },
];

export const emailSelectMenu = ["gmail.com", "naver.com", "g.hongik.ac.kr", "daum.net"];
