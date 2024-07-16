<<<<<<< HEAD
<<<<<<<< HEAD:src/constants/member.ts
import { MemberInfoSelectMenuType, MemberTypeSelectMenuType } from "@/types/entities/member";

export const memberInfoSelectMenu: MemberInfoSelectMenuType = [
========
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
>>>>>>>> 574595522036d9e24e9fcef5d0198ecc1512440d:src/constants/table.ts
=======
import { MemberInfoSelectMenuType, MemberTypeSelectMenuType } from "@/types/entities/member";

export const memberInfoSelectMenu: MemberInfoSelectMenuType = [
>>>>>>> 574595522036d9e24e9fcef5d0198ecc1512440d
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
<<<<<<< HEAD
<<<<<<<< HEAD:src/constants/member.ts
=======
>>>>>>> 574595522036d9e24e9fcef5d0198ecc1512440d
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
<<<<<<< HEAD
========
>>>>>>>> 574595522036d9e24e9fcef5d0198ecc1512440d:src/constants/table.ts
=======
>>>>>>> 574595522036d9e24e9fcef5d0198ecc1512440d
    name: "디스코드 사용자명",
    type: "discordUsername",
  },
  {
<<<<<<< HEAD
<<<<<<<< HEAD:src/constants/member.ts
    value: "7",
========
    value: "5",
>>>>>>>> 574595522036d9e24e9fcef5d0198ecc1512440d:src/constants/table.ts
=======
    value: "7",
>>>>>>> 574595522036d9e24e9fcef5d0198ecc1512440d
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