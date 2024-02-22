import { PendingMemberInfoType } from "@types/entities/member";
import useGetPendingMemberListQuery from "@hooks/queries/useGetPendingMemberListQuery";
import PendingMemberInfoTableHeader from "./PendingMemberInfoTableHeader";
import PendingMemberInfoTableBody from "./PendingMemberInfoTableBody";
import { Grid, TablePagination } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import styled from "@emotion/styled";

export type PendingMemberInfoTableProps = {
  setSelectedMemberList: Dispatch<SetStateAction<PendingMemberInfoType[]>>;
  selectedMemberList: PendingMemberInfoType[];
};

export default function PendingMemberInfoTable({
  setSelectedMemberList,
  selectedMemberList,
}: PendingMemberInfoTableProps) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const { pendingMemberList } = useGetPendingMemberListQuery(page, rowsPerPage);

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

  const getPendingMemberInfoDataList = (dataList: PendingMemberInfoType[]) => {
    return rowsPerPage > 0
      ? dataList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      : dataList;
  };

  const pendingMemberInfoDataList = getPendingMemberInfoDataList(pendingMemberList);

  return (
    <Grid container>
      <PendingMemberInfoTableHeader
        dataList={pendingMemberInfoDataList}
        selectedMemberList={selectedMemberList}
        setSelectedMemberList={setSelectedMemberList}
      />
      <PendingMemberInfoTableBody
        dataList={pendingMemberInfoDataList}
        setSelectedMemberList={setSelectedMemberList}
        selectedMemberList={selectedMemberList}
      />
      <InfoTablePagination
        count={pendingMemberList.length}
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
