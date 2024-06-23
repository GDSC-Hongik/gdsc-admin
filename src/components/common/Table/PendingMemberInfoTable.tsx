import { useState } from "react";
import styled from "@emotion/styled";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { MemberInfoType } from "@/types/entities/member";
import useGetPendingMemberListQuery from "@/hooks/queries/useGetPendingMemberListQuery";
import { usePendingMembersSearchInfoState } from "@/hooks/contexts/usePendingMemberSearchInfoContext";

export default function PendingMemberInfoTable() {
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 5,
    page: 0,
  });

  const { searchVariant, searchText, memberVariant } = usePendingMembersSearchInfoState();

  const { pendingMemberList = [], totalElements } = useGetPendingMemberListQuery(
    paginationModel.page,
    paginationModel.pageSize,
    searchVariant,
    searchText,
    memberVariant,
  );

  const getFilteredRows = (pendingMemberList: MemberInfoType[]) => {
    return pendingMemberList.map(member => {
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
    <StyledDataGrid
      rows={getFilteredRows(pendingMemberList)}
      columns={columns}
      paginationMode="server"
      rowCount={totalElements}
      pageSizeOptions={[5, 25, 100]}
      paginationModel={paginationModel}
      onPaginationModelChange={setPaginationModel}
      disableRowSelectionOnClick
      autoHeight
      disableColumnFilter
      disableColumnMenu
      disableColumnSorting
    />
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
    width: 75,
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
    width: 165,
    resizable: false,
    editable: false,
  },
  {
    field: "discordUsername",
    headerName: "디스코드 사용자명",
    headerAlign: "center",
    width: 125,
    resizable: false,
    editable: false,
  },
  {
    field: "nickname",
    headerName: "디스코드 별명",
    headerAlign: "center",
    width: 100,
    resizable: false,
    editable: false,
  },
];

const StyledDataGrid = styled(DataGrid)({ border: "none", minHeight: 400 });
