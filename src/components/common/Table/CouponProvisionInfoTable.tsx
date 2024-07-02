import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { DataGrid, GridCellParams, GridColDef } from "@mui/x-data-grid";

const mockData = [
  {
    semester: "2024-1",
    member: {
      memberId: 1,
      studentId: "C111206",
      name: "홍서현",
      phone: "010-8712-0786",
      discordUsername: "홍서현",
      nickname: "홍서현",
    },
  },
];

export default function CouponProvisionInfoTable() {
  const getFilteredMemberList = (allMemberList: any[]) => {
    return allMemberList.map(memberInfo => ({
      id: memberInfo.member.memberId,
      semester: memberInfo.semester,
      studentId: memberInfo.member.studentId,
      name: memberInfo.member.name,
      phone: memberInfo.member.phone,
      discordUsername: memberInfo.member.discordUsername,
      nickname: memberInfo.member.nickname,
    }));
  };

  return (
    <>
      <StyledDataGrid
        rows={getFilteredMemberList(mockData)}
        columns={columns}
        checkboxSelection
        autoHeight
        disableRowSelectionOnClick
        disableColumnFilter
        disableColumnMenu
        disableColumnSorting
        hideFooterPagination
      />
    </>
  );
}

const columns: GridColDef[] = [
  {
    field: "semester",
    headerName: "학기",
    headerAlign: "left",
    align: "left",
    width: 70,
    resizable: false,
    editable: false,
  },
  {
    field: "studentId",
    headerName: "학번",
    headerAlign: "left",
    align: "left",
    width: 75,
    resizable: false,
    editable: false,
  },
  {
    field: "name",
    headerName: "이름",
    headerAlign: "left",
    align: "left",
    width: 60,
    resizable: false,
    editable: false,
  },
  {
    field: "phone",
    headerName: "전화번호",
    headerAlign: "left",
    align: "left",
    width: 120,
    resizable: false,
    editable: false,
  },
  {
    field: "discordUsername",
    headerName: "디스코드 사용자명",
    headerAlign: "left",
    align: "left",
    width: 180,
    resizable: false,
    editable: false,
  },
  {
    field: "nickname",
    headerName: "디스코드 닉네임",
    headerAlign: "left",
    align: "left",
    width: 180,
    resizable: false,
    editable: false,
  },
  {
    field: "detailInfo",
    headerName: "",
    sortable: false,
    flex: 1,
    renderCell: (_: GridCellParams) => {
      return (
        <StyledButtonWrapper>
          <StyledButton variant="outlined" color="secondary" onClick={() => {}}>
            상세
          </StyledButton>
        </StyledButtonWrapper>
      );
    },
  },
];

const StyledDataGrid = styled(DataGrid)({ border: "none", minHeight: 370 });

const StyledButtonWrapper = styled("div")({
  display: "flex",
  gap: 8,
  alignItems: "center",
  justifyContent: "flex-end",
  paddingTop: 9,
});

const StyledButton = styled(Button)({
  padding: "6px 16px",
  height: "32px",
  width: "66px",
});
