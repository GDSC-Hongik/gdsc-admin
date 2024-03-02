import { useState } from "react";
import styled from "@emotion/styled";
import { Grid, TablePagination } from "@mui/material";
import PaymentStatusInfoTableBody from "./PaymentStatusInfoTableBody";
import PaymentStatusInfoTableHeader from "./PaymentStatusInfoTableHeader";
import useGetPaymentStatusMemberListQuery from "@/hooks/queries/useGetPaymentStatusMemberListQuery";

type PaymentStatusInfoTableProps = {
  paymentStatusMemberSearchType: string;
  paymentStatusMemberSearchText: string;
}

export default function PaymentStatusInfoTable({ paymentStatusMemberSearchType, paymentStatusMemberSearchText }: PaymentStatusInfoTableProps) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const { paymentStatusMemberList = [], totalElements = 0 } = useGetPaymentStatusMemberListQuery(page, rowsPerPage, paymentStatusMemberSearchType, paymentStatusMemberSearchText);

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

  return (
    <Grid container>
      <PaymentStatusInfoTableHeader />
      <PaymentStatusInfoTableBody dataList={paymentStatusMemberList} />
      <InfoTablePagination
        count={totalElements}
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
