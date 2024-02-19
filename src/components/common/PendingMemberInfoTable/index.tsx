import { PendingMemberInfoType } from "@types/entities/member";
import PendingMemberInfoTableHeader from "./PendingMemberInfoTableHeader";
import PendingMemberInfoTableBody from "./PendingMemberInfoTableBody";
import { Grid, TablePagination } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import styled from "@emotion/styled";

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
  {
    memberId: 3,
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
    memberId: 4,
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
    memberId: 5,
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
    memberId: 6,
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
    memberId: 7,
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
    memberId: 8,
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
    memberId: 9,
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
    memberId: 10,
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
    memberId: 11,
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
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (
    _event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const getPendingMemberInfoDataList = (dataList: PendingMemberInfoType[]) => {
    return rowsPerPage > 0
      ? dataList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      : dataList;
  };

  const pendingMemberInfoDataList = getPendingMemberInfoDataList(mockPendingMemberInfoList);

  return (
    <Grid container>
      <PendingMemberInfoTableHeader
        dataList={pendingMemberInfoDataList}
        selectedMemberList={selectedMemberList}
        setSelectedMemberList={setSelectedMemberList}
      />
      <PendingMemberInfoTableBody
        dataList={pendingMemberInfoDataList}
        setSelectedMemberList={setSelectedMemberList}
        selectedMemberList={selectedMemberList}
      />
      <InfoTablePagination
        count={mockPendingMemberInfoList.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Grid>
  );
}

const InfoTablePagination = styled(TablePagination)({
  marginLeft: "auto",
  border: "transparent",
});
