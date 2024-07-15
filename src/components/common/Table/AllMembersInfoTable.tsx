import { useMemo, useRef, useState } from "react";
import styled from "@emotion/styled";
import { Button, Stack } from "@mui/material";
import { DataGrid, GridCellParams, GridColDef, GridRowModel } from "@mui/x-data-grid";
import EditInfoModal from "../Modal/EditInfoModal";
import {
  useAllMembersSearchInfoDispatch,
  useAllMembersSearchInfoState,
} from "@/hooks/contexts/useAllMembersContext";
import useDeleteMemberMutation from "@/hooks/mutations/useDeleteMemberMutation";
import useGetAllMemberListQuery from "@/hooks/queries/useGetAllMemberListQuery";
import { EditMemberInfoType, MemberInfoType } from "@/types/entities/member";

export default function AllMembersInfoTable() {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editMemberId, setEditMemberId] = useState(0);

  const { mutate } = useDeleteMemberMutation();

  const {
    paginationModel,
    searchInfo: { text: searchText, variant: searchVariant },
  } = useAllMembersSearchInfoState();
  const { setPaginationModel } = useAllMembersSearchInfoDispatch();

  const { allMemberList = [], totalElements } = useGetAllMemberListQuery(
    paginationModel.page,
    paginationModel.pageSize,
    searchVariant,
    searchText,
  );

  const editMemberInfo =
    allMemberList.find(member => member.memberId === editMemberId) ||
    ({
      memberId: 0,
      studentId: "",
      name: "",
      phone: "",
      department: {
        code: "",
        name: "",
      },
      email: "",
      discordUsername: "",
      nickname: "",
    } as EditMemberInfoType);

  const rowCountRef = useRef(totalElements || 0);

  const rowCount = useMemo(() => {
    if (totalElements !== undefined) {
      rowCountRef.current = totalElements;
    }

    return rowCountRef.current;
  }, [totalElements]);

  const getFilteredRows = (allMemberList: MemberInfoType[]) => {
    return allMemberList.map(member => {
      const {
        memberId,
        studentId,
        name,
        phone,
        department: { name: departmentName, code: departmentCode },
        email,
        discordUsername,
        nickname,
      } = member;

      return {
        id: memberId,
        studentId,
        name,
        phone,
        departmentName,
        departmentCode,
        email,
        discordUsername,
        nickname,
      };
    });
  };

  const handleClickEditMemberInfo = (row: GridRowModel) => {
    const { id: memberId } = row;

    setEditMemberId(memberId);
    setEditModalOpen(true);
  };

  const handleClickDeleteMember = (row: GridRowModel) => {
    const targetMemberId = row.id;
    mutate(targetMemberId);
  };

  const handleCloseModal = () => {
    setEditMemberId(0);
    setEditModalOpen(false);
  };

  return (
    <>
      <StyledDataGrid
        rows={getFilteredRows(allMemberList)}
        columns={getColumns(handleClickEditMemberInfo, handleClickDeleteMember)}
        pageSizeOptions={[5, 25, 100]}
        rowCount={rowCount}
        paginationMode="server"
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        disableRowSelectionOnClick
        autoHeight
        disableColumnFilter
        disableColumnMenu
        disableColumnSorting
      />
      <EditInfoModal
        open={editModalOpen}
        onClose={handleCloseModal}
        memberInfo={editMemberInfo}
        key={editMemberId}
      />
    </>
  );
}

const getColumns = (
  handleClickEditMemberInfo: (row: GridRowModel) => void,
  handleClickDeleteMember: (row: GridRowModel) => void,
): GridColDef[] => [
  {
    field: "studentId",
    headerName: "학번",
    headerAlign: "left",
    width: 85,
    resizable: false,
    editable: false,
  },
  {
    field: "name",
    headerName: "이름",
    headerAlign: "left",
    width: 75,
    resizable: false,
    editable: false,
  },
  {
    field: "phone",
    headerName: "전화번호",
    headerAlign: "left",
    width: 120,
    resizable: false,
    editable: false,
  },
  {
    field: "departmentName",
    headerName: "소속 학과",
    headerAlign: "left",
    width: 140,
    resizable: false,
    editable: false,
  },
  {
    field: "email",
    headerName: "이메일",
    headerAlign: "left",
    width: 165,
    resizable: false,
    editable: false,
  },
  {
    field: "discordUsername",
    headerName: "디스코드 사용자명",
    headerAlign: "left",
    width: 125,
    resizable: false,
    editable: false,
  },
  {
    field: "nickname",
    headerName: "디스코드 별명",
    headerAlign: "left",
    width: 100,
    resizable: false,
    editable: false,
  },
  {
    field: "editMember",
    headerName: "",
    sortable: false,
    flex: 1,
    minWidth: 156,
    renderCell: (params: GridCellParams) => {
      return (
        <StyledButtonWrapper flexDirection={"row"}>
          <StyledButton
            variant="outlined"
            color="primary"
            onClick={() => handleClickEditMemberInfo(params.row)}
          >
            수정
          </StyledButton>
          <StyledButton
            variant="outlined"
            color="error"
            onClick={() => handleClickDeleteMember(params.row)}
          >
            탈퇴
          </StyledButton>
        </StyledButtonWrapper>
      );
    },
  },
];

const StyledDataGrid = styled(DataGrid)({ border: "none", minHeight: 370 });

const StyledButtonWrapper = styled(Stack)({
  display: "flex",
  gap: 8,
  paddingTop: 9,
});

const StyledButton = styled(Button)({
  padding: "8px 22px",
  height: "32px",
});
