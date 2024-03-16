import { useState } from "react";
import styled from "@emotion/styled";
import { Grid, TablePagination } from "@mui/material";
import GrantedMemberInfoTableBody from "./GrantedMemberInfoTableBody";
import GrantedMemberInfoTableHeader from "./GrantedMemberInfoTableHeader";
import useGetGrantedMemberListQuery from "@/hooks/queries/useGetGrantedMemberListQuery";
import { useGrantedMembersStore } from "@/store/grantedMembers";

export default function GrantedMemberInfoTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const grantedMemberSearchText = useGrantedMembersStore(state => state.searchInfo.text);
  const grantedMemberSearchVariant = useGrantedMembersStore(state => state.searchInfo.variant);

  const { grantedMemberList = [], totalElements = 0 } = useGetGrantedMemberListQuery(
    page,
    rowsPerPage,
    grantedMemberSearchVariant,
    grantedMemberSearchText,
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
      <GrantedMemberInfoTableHeader />
      <GrantedMemberInfoTableBody dataList={grantedMemberList} />
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
