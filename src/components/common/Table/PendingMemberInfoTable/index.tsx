import { Dispatch, SetStateAction, useState } from "react";
import styled from "@emotion/styled";
import { Grid, TablePagination } from "@mui/material";
import PendingMemberInfoTableBody from "./PendingMemberInfoTableBody";
import PendingMemberInfoTableHeader from "./PendingMemberInfoTableHeader";
import useGetPendingMemberListQuery from "@/hooks/queries/useGetPendingMemberListQuery";
import { PendingMemberInfoType } from "@/types/entities/member";

export type PendingMemberInfoTableProps = {
  setSelectedMemberList: Dispatch<SetStateAction<PendingMemberInfoType[]>>;
  selectedMemberList: PendingMemberInfoType[];
  pendingMemberSearchType: string;
  pendingMemberSearchText: string;
};

export default function PendingMemberInfoTable({
  setSelectedMemberList,
  selectedMemberList,
  pendingMemberSearchType,
  pendingMemberSearchText,
}: PendingMemberInfoTableProps) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const { pendingMemberList = [], totalElements = 0 } = useGetPendingMemberListQuery(
    page,
    rowsPerPage,
    pendingMemberSearchType,
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
      <PendingMemberInfoTableHeader
        dataList={pendingMemberList}
        selectedMemberList={selectedMemberList}
        setSelectedMemberList={setSelectedMemberList}
      />
      <PendingMemberInfoTableBody
        dataList={pendingMemberList}
        setSelectedMemberList={setSelectedMemberList}
        selectedMemberList={selectedMemberList}
      />
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
