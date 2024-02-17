import { PendingMemberInfoType } from "@types/entities/member";
import PendingMemberInfoTableHeader from "./PendingMemberInfoTableHeader";
import PendingMemberInfoTableBody from "./PendingMemberInfoTableBody";
import { Grid } from "@mui/material";

const mockPendingMemberInfoList: PendingMemberInfoType[] = [
  {
    memberId: 1,
    studentId: "C123123",
    name: "홍서현",
    phone: "01012341234",
    department: "컴퓨터공학전공",
    email: "123123123@naver.com",
    discordUsername: "ghdtjgus76",
    nickname: "ghdtjgus76",
    requirement: {
      univStatus: "PENDING",
      discordStatus: "PENDING",
      paymentStatus: "PENDING",
      univPending: true,
    },
  },
  {
    memberId: 1,
    studentId: "C123123",
    name: "홍서현",
    phone: "01012341234",
    department: "컴퓨터공학전공",
    email: "123123123@naver.com",
    discordUsername: "ghdtjgus76",
    nickname: "ghdtjgus76",
    requirement: {
      univStatus: "PENDING",
      discordStatus: "PENDING",
      paymentStatus: "PENDING",
      univPending: true,
    },
  },
];

export default function PendingMemberInfoTable() {
  return (
    <Grid container style={{ border: "1px solid red" }}>
      <PendingMemberInfoTableHeader />
      <PendingMemberInfoTableBody dataList={mockPendingMemberInfoList} />
    </Grid>
  );
}
