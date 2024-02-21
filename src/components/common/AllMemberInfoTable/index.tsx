import { AllMemberInfoType } from "@types/entities/member";
import useGetAllMemberListQuery from "@hooks/queries/useGetAllMemberListQuery";
import AllMemberInfoTableHeader from "./AllMemberInfoTableHeader";
import AllMemberInfoTableBody from "./AllMemberInfoTableBody";
import { Grid, TablePagination } from "@mui/material";
import { useState } from "react";
import styled from "@emotion/styled";

export default function AllMemberInfoTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const { allMemberList } = useGetAllMemberListQuery(page, rowsPerPage);

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

  const getAllMemberInfoDataList = (dataList: AllMemberInfoType[]) => {
    return rowsPerPage > 0
      ? dataList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      : dataList;
  };

  const allMemberInfoDataList = getAllMemberInfoDataList(allMemberList);

  return (
    <Grid container>
      <AllMemberInfoTableHeader />
      <AllMemberInfoTableBody dataList={allMemberInfoDataList} />
      <InfoTablePagination
        count={allMemberList.length}
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
