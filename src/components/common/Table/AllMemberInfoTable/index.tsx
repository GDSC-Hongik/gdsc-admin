import { useState } from "react";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { DataGrid, GridCellParams, GridColDef, GridRowModel } from "@mui/x-data-grid";
import { useAllMembersSearchInfoState } from "@/hooks/contexts/useAllMemberSearchInfoContext";
import useGetAllMemberListQuery from "@/hooks/queries/useGetAllMemberListQuery";
import { AllMemberInfoType } from "@/types/entities/member";
import EditInfoModal from "../../Modal/EditInfoModal";
import useDeleteMemberMutation from "@/hooks/mutations/useDeleteMemberMutation";

export default function AllMemberInfoTable() {
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 5,
    page: 0,
  });
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editMemberInfo, setEditMemberInfo] = useState({
    memberId: 0,
    studentId: 0,
    name: "",
    phone: "",
    department: {
      code: "",
      name: "",
    },
    email: "",
    discordUsername: "",
    nickname: "",
  });

  const { mutate } = useDeleteMemberMutation();

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

  const handleClickEditMemberInfo = (row: GridRowModel) => {
    const {
      id: memberId,
      studentId,
      name,
      phone,
      department,
      email,
      discordUsername,
      nickname,
    } = row;

    setEditMemberInfo({
      memberId,
      studentId,
      name,
      phone,
      department,
      email,
      discordUsername,
      nickname,
    });
    setEditModalOpen(true);
  };

  const handleClickDeleteMember = (row: GridRowModel) => {
    const targetMemberId = row.id;
    mutate(targetMemberId);
  };

  const handleCloseModal = () => setEditModalOpen(false);

  return (
    <>
      <StyledDataGrid
        rows={getFilteredRows(allMemberList)}
        columns={getColumns(handleClickEditMemberInfo, handleClickDeleteMember)}
        pageSizeOptions={[5, 25, 100]}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        disableRowSelectionOnClick
        autoHeight
        disableColumnFilter
        disableColumnMenu
      />
      {editModalOpen && (
        <EditInfoModal
          open={editModalOpen}
          onClose={handleCloseModal}
          memberInfo={editMemberInfo}
          key={editMemberInfo.memberId}
        />
      )}
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
    width: 170,
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
    width: 150,
    resizable: false,
    editable: false,
  },
  {
    field: "nickname",
    headerName: "디스코드 별명",
    headerAlign: "center",
    width: 125,
    resizable: false,
    editable: false,
  },
  {
    field: "editMember",
    headerName: "",
    sortable: false,
    width: 156,
    renderCell: (params: GridCellParams) => {
      return (
        <StyledButtonWrapper>
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

const StyledDataGrid = styled(DataGrid)({ border: "none", minHeight: 400 });

const StyledButtonWrapper = styled("div")({
  display: "flex",
  gap: 8,
  paddingTop: 9,
});

const StyledButton = styled(Button)({
  height: "32px",
});
