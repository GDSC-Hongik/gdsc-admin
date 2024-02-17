import { PendingMemberInfoType } from "@types/entities/member";
import PendingMemberInfoTableHeader from "./PendingMemberInfoTableHeader";
import PendingMemberInfoTableBody from "./PendingMemberInfoTableBody";
import { Grid } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

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
    memberId: 2,
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

export type PendingMemberInfoTableProps = {
  setSelectedMemberList: Dispatch<SetStateAction<PendingMemberInfoType[]>>;
  selectedMemberList: PendingMemberInfoType[];
};

export default function PendingMemberInfoTable({
  setSelectedMemberList,
  selectedMemberList,
}: PendingMemberInfoTableProps) {
  return (
    <Grid container style={{ border: "1px solid red" }}>
      <PendingMemberInfoTableHeader
        dataList={mockPendingMemberInfoList}
        setSelectedMemberList={setSelectedMemberList}
      />
      <PendingMemberInfoTableBody
        dataList={mockPendingMemberInfoList}
        setSelectedMemberList={setSelectedMemberList}
        selectedMemberList={selectedMemberList}
      />
    </Grid>
  );
}
