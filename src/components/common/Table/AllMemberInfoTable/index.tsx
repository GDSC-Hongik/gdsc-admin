import { useState } from "react";
import styled from "@emotion/styled";
import { Grid, TablePagination } from "@mui/material";
import { useStore } from "zustand";
import AllMemberInfoTableBody from "./AllMemberInfoTableBody";
import AllMemberInfoTableHeader from "./AllMemberInfoTableHeader";
import useGetAllMemberListQuery from "@/hooks/queries/useGetAllMemberListQuery";
import { allMembersStore } from "@/store/allMembers";

export default function AllMemberInfoTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const {
    searchInfo: { variant: searchVariant, text: searchText },
  } = useStore(allMembersStore);

  const { allMemberList = [], totalElements = 0 } = useGetAllMemberListQuery(
    page,
    rowsPerPage,
    searchVariant,
    searchText,
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
      <AllMemberInfoTableHeader />
      <AllMemberInfoTableBody dataList={allMemberList} />
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
