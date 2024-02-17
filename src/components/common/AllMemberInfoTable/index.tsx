import AllMemberInfoTableHeader from "./AllMemberInfoTableHeader";
import AllMemberInfoTableBody from "./AllMemberInfoTableBody";
import { Grid, TablePagination } from "@mui/material";
import { useState } from "react";
import styled from "@emotion/styled";

const mockMemberInfoList = [
  {
    memberId: "1",
    studentId: "C123123",
    name: "홍서현",
    phone: "01012341234",
    department: "컴퓨터공학전공",
    email: "123123123@naver.com",
    discordUsername: "ghdtjgus76",
    nickname: "ghdtjgus76",
  },
  {
    memberId: "1",
    studentId: "C123123",
    name: "홍서현",
    phone: "01012341234",
    department: "컴퓨터공학전공",
    email: "123123123@naver.com",
    discordUsername: "ghdtjgus76",
    nickname: "ghdtjgus76",
  },
];

export default function AllMemberInfoTable() {
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

  const getMemberInfoDataList = () => {
    return rowsPerPage > 0
      ? mockMemberInfoList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      : mockMemberInfoList;
  };

  const memberInfoDataList = getMemberInfoDataList();

  return (
    <Grid container direction={"row"}>
      <AllMemberInfoTableHeader />
      <AllMemberInfoTableBody dataList={memberInfoDataList} />
      <InfoTablePagination
        count={mockMemberInfoList.length}
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
