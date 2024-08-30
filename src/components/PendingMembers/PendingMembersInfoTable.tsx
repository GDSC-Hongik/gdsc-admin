import { useMemo, useRef } from "react";
import styled from "@emotion/styled";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import {
  usePendingMembersDispatchContext,
  usePendingMembersStateContext,
} from "@/hooks/contexts/usePendingMembersContext";
import useGetPendingMemberListQuery from "@/hooks/queries/useGetPendingMemberListQuery";
import { MemberInfoType } from "@/types/entities/member";

export default function PendingMembersInfoTable() {
  const {
    paginationModel,
    searchInfo: { text: searchText, variant: searchVariant },
    memberVariant,
  } = usePendingMembersStateContext();
  const { setPaginationModel } = usePendingMembersDispatchContext();

  const { pendingMemberList = [], totalElements } = useGetPendingMemberListQuery(
    paginationModel.page,
    paginationModel.pageSize,
    searchVariant,
    searchText,
    memberVariant,
  );

  const rowCountRef = useRef(totalElements || 0);

  const rowCount = useMemo(() => {
    if (totalElements !== undefined) {
      rowCountRef.current = totalElements;
    }

    return rowCountRef.current;
  }, [totalElements]);

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
      rowCount={rowCount}
      paginationMode="server"
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
    headerAlign: "left",
    minWidth: 80,
    flex: 1,
    resizable: false,
    editable: false,
  },
  {
    field: "name",
    headerName: "이름",
    headerAlign: "left",
    minWidth: 75,
    flex: 1,
    resizable: false,
    editable: false,
  },
  {
    field: "phone",
    headerName: "전화번호",
    headerAlign: "left",
    minWidth: 120,
    flex: 1,
    resizable: false,
    editable: false,
  },
  {
    field: "department",
    headerName: "소속 학과",
    headerAlign: "left",
    minWidth: 140,
    flex: 1,
    resizable: false,
    editable: false,
  },
  {
    field: "email",
    headerName: "이메일",
    headerAlign: "left",
    minWidth: 175,
    flex: 1,
    resizable: false,
    editable: false,
  },
  {
    field: "discordUsername",
    headerName: "디스코드 사용자명",
    headerAlign: "left",
    minWidth: 125,
    flex: 1,
    resizable: false,
    editable: false,
  },
  {
    field: "nickname",
    headerName: "디스코드 별명",
    headerAlign: "left",
    flex: 1,
    minWidth: 100,
    resizable: false,
    editable: false,
  },
];

const StyledDataGrid = styled(DataGrid)({ border: "none", minHeight: 370 });
