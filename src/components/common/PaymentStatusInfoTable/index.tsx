import { PaymentStatusInfoType } from "@types/entities/member";
import useGetPaymentStatusMemberListQuery from "@hooks/queries/useGetPaymentStatusMemberListQuery";
import PaymentStatusInfoTableHeader from "./PaymentStatusInfoTableHeader";
import PaymentStatusInfoTableBody from "./PaymentStatusInfoTableBody";
import { Grid, TablePagination } from "@mui/material";
import styled from "@emotion/styled";
import { useState } from "react";

export default function PaymentStatusInfoTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const { paymentStatusMemberList } = useGetPaymentStatusMemberListQuery(page, rowsPerPage);

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

  const paymentStatusInfoDataList = getAllMemberInfoDataList(paymentStatusMemberList);

  return (
    <Grid container>
      <PaymentStatusInfoTableHeader />
      <PaymentStatusInfoTableBody dataList={paymentStatusInfoDataList} />
      <InfoTablePagination
        count={paymentStatusMemberList.length}
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
