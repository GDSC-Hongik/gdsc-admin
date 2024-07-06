import { formatDateWithDot } from "@/utils/validation/formatDate";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { DataGrid, GridCellParams, GridColDef } from "@mui/x-data-grid";

const mockData = [
  {
    id: 1,
    academicYear: "2024",
    semester: "1",
    round: 1,
    startDate: formatDateWithDot("2024-07-06T10:03:25.743Z"),
    endDate: formatDateWithDot("2024-07-06T10:03:25.743Z"),
    name: "2024년도 2학기 정회원 모집",
  },
];

export default function RecruitingRoundInfoTable() {
  const handleClickEditRecruitingRoundInfo = (roundId: number) => {};

  return (
    <StyledDataGrid
      rows={mockData}
      columns={getColumns(handleClickEditRecruitingRoundInfo)}
      disableRowSelectionOnClick
      autoHeight
      disableColumnFilter
      disableColumnMenu
      disableColumnSorting
      hideFooter
    />
  );
}
const getColumns = (
  handleClickEditRecruitingRoundInfo: (roundId: number) => void,
): GridColDef[] => [
  {
    field: "academicYear",
    headerName: "활동연도",
    headerAlign: "left",
    width: 85,
    resizable: false,
    editable: false,
  },
  {
    field: "semester",
    headerName: "활동학기",
    headerAlign: "left",
    width: 75,
    resizable: false,
    editable: false,
  },
  {
    field: "round",
    headerName: "차수",
    headerAlign: "left",
    width: 75,
    resizable: false,
    editable: false,
  },
  {
    field: "startDate",
    headerName: "신청기간 시작일",
    headerAlign: "left",
    width: 120,
    resizable: false,
    editable: false,
  },
  {
    field: "endDate",
    headerName: "신청기간 종료일",
    headerAlign: "left",
    width: 140,
    resizable: false,
    editable: false,
  },
  {
    field: "name",
    headerName: "모집 회차 이름",
    headerAlign: "left",
    width: 190,
    resizable: false,
    editable: false,
  },
  {
    field: "editRecruitingRoundInfo",
    headerName: "",
    sortable: false,
    flex: 1,
    minWidth: 90,
    renderCell: (params: GridCellParams) => {
      return (
        <StyledButtonWrapper>
          <StyledButton
            variant="outlined"
            color="primary"
            onClick={() => handleClickEditRecruitingRoundInfo(params.row.id)}
          >
            수정
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
  paddingTop: 9,
  justifyContent: "flex-end",
});

const StyledButton = styled(Button)({
  padding: "8px 22px",
  height: "32px",
});
