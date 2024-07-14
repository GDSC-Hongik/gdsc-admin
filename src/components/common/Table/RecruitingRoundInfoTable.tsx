import { useState } from "react";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { DataGrid, GridCellParams, GridColDef } from "@mui/x-data-grid";
import RecruitingRoundInfoModal from "../Modal/RecruitingRoundInfoModal";
import {
  useRecruitingRoundSearchInfoDispatch,
  useRecruitingRoundSearchInfoState,
} from "@/hooks/contexts/useRecruitingRoundSearchInfoContext";
import useGetRecruitmentsRoundsQuery from "@/hooks/queries/useGetRecruitmentsRoundsQuery";
import { RecruitmentRoundResponseDtoType } from "@/types/dtos/recruiting";
import { formatDateWithDot } from "@/utils/validation/formatDate";

export default function RecruitingRoundInfoTable() {
  const [editRoundInfoId, setEditRoundInfoId] = useState(0);
  const [editRoundInfoModalOpen, setEditRoundInfoModalOpen] = useState(false);

  const recruitmentsRoundsList = useGetRecruitmentsRoundsQuery();

  const { createRoundInfoModalOpen } = useRecruitingRoundSearchInfoState();
  const { setCreateRoundInfoModalOpen } = useRecruitingRoundSearchInfoDispatch();

  const editRoundInfo = recruitmentsRoundsList.find(
    data => data.recruitmentRoundId === editRoundInfoId,
  );

  const getFilteredRecruitingInfo = (recruitingInfo: RecruitmentRoundResponseDtoType) => {
    return recruitingInfo.map(info => ({
      id: info.recruitmentRoundId,
      academicYear: info.semester.slice(0, 4),
      semester: info.semester.slice(5, 6),
      startDate: formatDateWithDot(info.startDate),
      endDate: formatDateWithDot(info.endDate),
      name: info.name,
    }));
  };

  const handleCloseEditRoundInfoModal = () => {
    setEditRoundInfoModalOpen(false);
  };

  const handleCloseCreateRoundInfoModal = () => {
    setCreateRoundInfoModalOpen(false);
  };

  const handleClickEditRecruitingRoundInfo = (roundId: number) => {
    setEditRoundInfoId(roundId);
    setEditRoundInfoModalOpen(true);
  };

  return (
    <>
      <StyledDataGrid
        rows={getFilteredRecruitingInfo(recruitmentsRoundsList)}
        columns={getColumns(handleClickEditRecruitingRoundInfo)}
        disableRowSelectionOnClick
        autoHeight
        disableColumnFilter
        disableColumnMenu
        disableColumnSorting
        hideFooter
      />
      <RecruitingRoundInfoModal
        open={editRoundInfoModalOpen}
        onClose={handleCloseEditRoundInfoModal}
        isEdit
        editRoundInfo={editRoundInfo}
      />
      <RecruitingRoundInfoModal
        open={createRoundInfoModalOpen}
        onClose={handleCloseCreateRoundInfoModal}
      />
    </>
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
