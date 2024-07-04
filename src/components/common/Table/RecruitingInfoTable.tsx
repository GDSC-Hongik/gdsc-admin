import { RecruitmentsResponseDtoType } from "@/types/dtos/recruiting";
import { formatDateWithDot } from "@/utils/validation/formatDate";
import { formatPrice } from "@/utils/validation/formatPrice";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { DataGrid, GridCellParams, GridColDef } from "@mui/x-data-grid";

const mockData: RecruitmentsResponseDtoType = [
  {
    recruitmentId: 1,
    semester: "2024-1학기",
    round: "1차",
    name: "2024-1 1차 모집기간",
    startDate: "2024-06-23T23:09:22",
    endDate: "2024-08-23T23:10:55",
    fee: 20000,
  },
];

export default function RecruitingInfoTable() {
  const getFilteredRecruitingInfo = (recruitingInfo: RecruitmentsResponseDtoType) => {
    return recruitingInfo.map(info => ({
      id: info.recruitmentId,
      academicYear: info.semester.slice(0, 4),
      semester: info.semester.slice(5, 6),
      startDate: formatDateWithDot(info.startDate),
      endDate: formatDateWithDot(info.endDate),
      name: info.name,
      fee: formatPrice(info.fee),
    }));
  };

  const handleClickEditRecruitingInfo = (recruitmentId: number) => {};

  return (
    <>
      <StyledDataGrid
        rows={getFilteredRecruitingInfo(mockData)}
        columns={getColumns(handleClickEditRecruitingInfo)}
        disableRowSelectionOnClick
        autoHeight
        disableColumnFilter
        disableColumnMenu
        disableColumnSorting
      />
    </>
  );
}

const getColumns = (
  handleClickEditRecruitingInfo: (recruitmentId: number) => void,
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
    field: "startDate",
    headerName: "학기 시작일",
    headerAlign: "left",
    width: 120,
    resizable: false,
    editable: false,
  },
  {
    field: "endDate",
    headerName: "학기 종료일",
    headerAlign: "left",
    width: 140,
    resizable: false,
    editable: false,
  },
  {
    field: "name",
    headerName: "리크루팅 이름",
    headerAlign: "left",
    width: 240,
    resizable: false,
    editable: false,
  },
  {
    field: "fee",
    headerName: "회비",
    headerAlign: "left",
    width: 125,
    resizable: false,
    editable: false,
  },
  {
    field: "editMember",
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
            onClick={() => handleClickEditRecruitingInfo(params.row.id)}
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
