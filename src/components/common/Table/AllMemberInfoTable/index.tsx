import { useState } from "react";
import { Button, Grid } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useAllMembersSearchInfoState } from "@/hooks/contexts/useAllMemberSearchInfoContext";
import useGetAllMemberListQuery from "@/hooks/queries/useGetAllMemberListQuery";
import { AllMemberInfoType } from "@/types/entities/member";
import styled from "@emotion/styled";

export default function AllMemberInfoTable() {
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 5,
    page: 0,
  });

  const { searchText, searchVariant } = useAllMembersSearchInfoState();

  const { allMemberList = [] } = useGetAllMemberListQuery(
    paginationModel.page,
    paginationModel.pageSize,
    searchVariant,
    searchText,
  );

  const getFilteredRows = (allMemberList: AllMemberInfoType[]) => {
    return allMemberList.map(member => {
      const {
        memberId,
        studentId,
        name,
        phone,
        department: { name: departmentName },
        email,
        discordUsername,
        nickname,
      } = member;

      return {
        id: memberId,
        studentId: studentId,
        name: name,
        phone: phone,
        department: departmentName,
        email: email,
        discordUsername: discordUsername,
        nickname: nickname,
      };
    });
  };

  return (
    <Grid container>
      <StyledDataGrid
        rows={getFilteredRows(allMemberList)}
        columns={columns}
        pageSizeOptions={[5, 25, 100]}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        disableRowSelectionOnClick
        autoHeight
        disableColumnFilter
      />
    </Grid>
  );
}

const columns: GridColDef[] = [
  {
    field: "studentId",
    headerName: "학번",
    headerAlign: "center",
    width: 75,
    resizable: false,
    editable: false,
  },
  {
    field: "name",
    headerName: "이름",
    headerAlign: "center",
    width: 60,
    resizable: false,
    editable: false,
  },
  {
    field: "phone",
    headerName: "전화번호",
    headerAlign: "center",
    width: 120,
    resizable: false,
    editable: false,
  },
  {
    field: "department",
    headerName: "소속 학과",
    headerAlign: "center",
    width: 140,
    resizable: false,
    editable: false,
  },
  {
    field: "email",
    headerName: "이메일",
    headerAlign: "center",
    width: 180,
    resizable: false,
    editable: false,
  },
  {
    field: "discordUsername",
    headerName: "디스코드 사용자명",
    headerAlign: "center",
    width: 120,
    resizable: false,
    editable: false,
  },
  {
    field: "nickname",
    headerName: "디스코드 별명",
    headerAlign: "center",
    width: 105,
    resizable: false,
    editable: false,
  },
  {
    field: "editMember",
    headerName: "",
    sortable: false,
    width: 156,
    renderCell: () => {
      const onClick = () => {};

      return (
        <StyledButtonWrapper>
          <StyledButton variant="outlined" color="primary" onClick={onClick}>
            수정
          </StyledButton>
          <StyledButton variant="outlined" color="error" onClick={onClick}>
            탈퇴
          </StyledButton>
        </StyledButtonWrapper>
      );
    },
  },
];

const StyledDataGrid = styled(DataGrid)({ border: "none", minHeight: 400 });

const StyledButtonWrapper = styled("div")({
  display: "flex",
  gap: 8,
  paddingTop: 9,
});

const StyledButton = styled(Button)({
  height: "32px",
});
