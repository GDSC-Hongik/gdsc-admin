import { useState } from "react";
import styled from "@emotion/styled";
import { Grid, TablePagination } from "@mui/material";
import { useStore } from "zustand";
import GrantedMemberInfoTableBody from "./GrantedMemberInfoTableBody";
import GrantedMemberInfoTableHeader from "./GrantedMemberInfoTableHeader";
import useGetGrantedMemberListQuery from "@/hooks/queries/useGetGrantedMemberListQuery";
import { grantedMembersStore } from "@/store/grantedMembers";

export default function GrantedMemberInfoTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const {
    searchInfo: { variant: grantedMemberSearchVariant, text: grantedMemberSearchText },
  } = useStore(grantedMembersStore);

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
