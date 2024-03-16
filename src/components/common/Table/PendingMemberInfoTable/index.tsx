import { useState } from "react";
import styled from "@emotion/styled";
import { Grid, TablePagination } from "@mui/material";
import PendingMemberInfoTableBody from "./PendingMemberInfoTableBody";
import PendingMemberInfoTableHeader from "./PendingMemberInfoTableHeader";
import useGetPendingMemberListQuery from "@/hooks/queries/useGetPendingMemberListQuery";
import { usePendingMembersStore } from "@/store/pendingMembers";

export default function PendingMemberInfoTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const pendingMemberSearchText = usePendingMembersStore(state => state.searchInfo.text);
  const pendingMemberSearchVariant = usePendingMembersStore(state => state.searchInfo.variant);

  const { pendingMemberList = [], totalElements = 0 } = useGetPendingMemberListQuery(
    page,
    rowsPerPage,
    pendingMemberSearchVariant,
    pendingMemberSearchText,
  );

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
      <PendingMemberInfoTableHeader dataList={pendingMemberList} />
      <PendingMemberInfoTableBody dataList={pendingMemberList} />
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
