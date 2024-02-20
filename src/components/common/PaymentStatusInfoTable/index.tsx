import { PaymentStatusInfoType } from "@types/entities/member";
import PaymentStatusInfoTableHeader from "./PaymentStatusInfoTableHeader";
import PaymentStatusInfoTableBody from "./PaymentStatusInfoTableBody";
import { Grid, TablePagination } from "@mui/material";
import styled from "@emotion/styled";
import { useState } from "react";

const mockDataList: PaymentStatusInfoType[] = [
  {
    memberId: 1,
    studentId: "C123123",
    name: "홍서현",
    phone: "01012341234",
    discordUsername: "ghdtjgus76",
    nickname: "ghdtjgus76",
    paymentStatus: "VERIFIED",
  },
  {
    memberId: 2,
    studentId: "C123123",
    name: "홍서현",
    phone: "01012341234",
    discordUsername: "ghdtjgus76",
    nickname: "ghdtjgus76",
    paymentStatus: "VERIFIED",
  },
  {
    memberId: 3,
    studentId: "C123123",
    name: "홍서현",
    phone: "01012341234",
    discordUsername: "ghdtjgus76",
    nickname: "ghdtjgus76",
    paymentStatus: "VERIFIED",
  },
  {
    memberId: 4,
    studentId: "C123123",
    name: "홍서현",
    phone: "01012341234",
    discordUsername: "ghdtjgus76",
    nickname: "ghdtjgus76",
    paymentStatus: "VERIFIED",
  },
  {
    memberId: 5,
    studentId: "C123123",
    name: "홍서현",
    phone: "01012341234",
    discordUsername: "ghdtjgus76",
    nickname: "ghdtjgus76",
    paymentStatus: "VERIFIED",
  },
  {
    memberId: 6,
    studentId: "C123123",
    name: "홍서현",
    phone: "01012341234",
    discordUsername: "ghdtjgus76",
    nickname: "ghdtjgus76",
    paymentStatus: "VERIFIED",
  },
  {
    memberId: 7,
    studentId: "C123123",
    name: "홍서현",
    phone: "01012341234",
    discordUsername: "ghdtjgus76",
    nickname: "ghdtjgus76",
    paymentStatus: "VERIFIED",
  },
  {
    memberId: 8,
    studentId: "C123123",
    name: "홍서현",
    phone: "01012341234",
    discordUsername: "ghdtjgus76",
    nickname: "ghdtjgus76",
    paymentStatus: "VERIFIED",
  },
  {
    memberId: 9,
    studentId: "C123123",
    name: "홍서현",
    phone: "01012341234",
    discordUsername: "ghdtjgus76",
    nickname: "ghdtjgus76",
    paymentStatus: "VERIFIED",
  },
  {
    memberId: 10,
    studentId: "C123123",
    name: "홍서현",
    phone: "01012341234",
    discordUsername: "ghdtjgus76",
    nickname: "ghdtjgus76",
    paymentStatus: "VERIFIED",
  },
  {
    memberId: 11,
    studentId: "C123123",
    name: "홍서현",
    phone: "01012341234",
    discordUsername: "ghdtjgus76",
    nickname: "ghdtjgus76",
    paymentStatus: "VERIFIED",
  },
];

export default function PaymentStatusInfoTable() {
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

  const getAllMemberInfoDataList = (dataList: PaymentStatusInfoType[]) => {
    return rowsPerPage > 0
      ? dataList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      : dataList;
  };

  const paymentStatusInfoDataList = getAllMemberInfoDataList(mockDataList);

  return (
    <Grid container style={{ border: "1px solid red" }}>
      <PaymentStatusInfoTableHeader />
      <PaymentStatusInfoTableBody dataList={paymentStatusInfoDataList} />
      <InfoTablePagination
        count={mockDataList.length}
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
