import { useState } from "react";
import styled from "@emotion/styled";
import { Grid, TablePagination } from "@mui/material";
import GrantableMemberInfoTableBody from "./GrantableMemberInfoTableBody";
import GrantableMemberInfoTableHeader from "./GrantableMemberInfoTableHeader";
import useGetGrantableMemberListQuery from "@/hooks/queries/useGetGrantableMemberListQuery";
import { useGrantableMembersStore } from "@/store/grantableMembers";

export default function GrantableMemberInfoTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const grantableMemberSearchText = useGrantableMembersStore(state => state.searchInfo.text);
  const grantableMemberSearchVariant = useGrantableMembersStore(state => state.searchInfo.variant);

  const { grantableMemberList = [], totalElements = 0 } = useGetGrantableMemberListQuery(
    page,
    rowsPerPage,
    grantableMemberSearchVariant,
    grantableMemberSearchText,
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
      <GrantableMemberInfoTableHeader dataList={grantableMemberList} />
      <GrantableMemberInfoTableBody dataList={grantableMemberList} />
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
