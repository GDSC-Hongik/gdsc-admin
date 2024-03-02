import { Dispatch, SetStateAction, useState } from "react";
import styled from "@emotion/styled";
import { Grid, TablePagination } from "@mui/material";
import GrantableMemberInfoTableBody from "./GrantableMemberInfoTableBody";
import GrantableMemberInfoTableHeader from "./GrantableMemberInfoTableHeader";
import useGetGrantableMemberListQuery from "@/hooks/queries/useGetGrantableMemberListQuery";
import { GrantableMemberInfoType } from "@/types/entities/member";

export type GrantableMemberInfoTableProps = {
  setSelectedMemberList: Dispatch<SetStateAction<GrantableMemberInfoType[]>>;
  selectedMemberList: GrantableMemberInfoType[];
  grantableMemberSearchType: string;
  grantableMemberSearchText: string;
};

export default function GrantableMemberInfoTable({
  setSelectedMemberList,
  selectedMemberList,
  grantableMemberSearchType,
  grantableMemberSearchText
}: GrantableMemberInfoTableProps) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const { grantableMemberList = [], totalElements = 0 } = useGetGrantableMemberListQuery(
    page,
    rowsPerPage,
    grantableMemberSearchType,
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
      <GrantableMemberInfoTableHeader
        dataList={grantableMemberList}
        selectedMemberList={selectedMemberList}
        setSelectedMemberList={setSelectedMemberList}
      />
      <GrantableMemberInfoTableBody
        dataList={grantableMemberList}
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
