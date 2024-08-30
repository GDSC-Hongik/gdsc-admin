import { useState } from "react";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { DataGrid, GridCellParams, GridColDef } from "@mui/x-data-grid";
import RecruitmentRoundInfoModal from "./RecruitmentRoundInfoModal";
import {
  useRecruitmentRoundStateContext,
  useRecruitmentRoundDispatchContext,
} from "@/hooks/contexts/useRecruitmentRoundContext";
import useGetRecruitmentRoundQuery from "@/hooks/queries/useGetRecruitmentRoundQuery";
import {
  RecruitmentRoundInfoType,
  FilteredRecruitmentRoundInfoType,
} from "@/types/entities/recruitment";
import { formatDateWithDot } from "@/utils/validation/formatDate";

export default function RecruitmentRoundInfoTable() {
  const [editRoundInfoId, setEditRoundInfoId] = useState(0);
  const [editRoundInfoModalOpen, setEditRoundInfoModalOpen] = useState(false);

  const recruitmentRoundList = useGetRecruitmentRoundQuery();

  const { createRoundModalOpen } = useRecruitmentRoundStateContext();
  const { setCreateRoundModalOpen } = useRecruitmentRoundDispatchContext();

  const editRoundInfo = recruitmentRoundList.find(
    data => data.recruitmentRoundId === editRoundInfoId,
  );

  const formatRecruitmentRoundInfo = (info: RecruitmentRoundInfoType) => {
    const { recruitmentRoundId, semester, round, startDate, endDate, name } = info;

    return {
      startDate: formatDateWithDot(startDate) ?? "",
      endDate: formatDateWithDot(endDate) ?? "",
      name: name ?? "",
      semester: semester.slice(5, 6) ?? "",
      roundType: round,
      id: recruitmentRoundId ?? 0,
      academicYear: semester.slice(0, 4) ?? "",
    };
  };

  const editRoundModalInfo = editRoundInfo ? formatRecruitmentRoundInfo(editRoundInfo) : undefined;

  const getFilteredRecruitmentRoundInfo = (
    recruitmentInfo: RecruitmentRoundInfoType[],
  ): FilteredRecruitmentRoundInfoType[] => {
    return recruitmentInfo.map(info => formatRecruitmentRoundInfo(info));
  };

  const handleCloseEditRoundInfoModal = () => {
    setEditRoundInfoId(0);
    setEditRoundInfoModalOpen(false);
  };

  const handleCloseCreateRoundInfoModal = () => {
    setCreateRoundModalOpen(false);
  };

  const handleClickEditRecruitmentRoundInfo = (roundId: number) => {
    setEditRoundInfoId(roundId);
    setEditRoundInfoModalOpen(true);
  };

  return (
    <>
      <StyledDataGrid
        rows={getFilteredRecruitmentRoundInfo(recruitmentRoundList)}
        columns={getColumns(handleClickEditRecruitmentRoundInfo)}
        disableRowSelectionOnClick
        autoHeight
        disableColumnFilter
        disableColumnMenu
        disableColumnSorting
        hideFooter
      />
      <RecruitmentRoundInfoModal
        open={editRoundInfoModalOpen}
        onClose={handleCloseEditRoundInfoModal}
        isEdit
        editRoundInfo={editRoundModalInfo}
      />
      <RecruitmentRoundInfoModal
        open={createRoundModalOpen}
        onClose={handleCloseCreateRoundInfoModal}
      />
    </>
  );
}
const getColumns = (
  handleClickEditRecruitmentRoundInfo: (roundId: number) => void,
): GridColDef[] => [
  {
    field: "academicYear",
    headerName: "활동연도",
    headerAlign: "left",
    minWidth: 85,
    flex: 1,
    resizable: false,
    editable: false,
  },
  {
    field: "semester",
    headerName: "활동학기",
    headerAlign: "left",
    minWidth: 75,
    flex: 1,
    resizable: false,
    editable: false,
  },
  {
    field: "roundType",
    headerName: "차수",
    headerAlign: "left",
    minWidth: 75,
    flex: 1,
    resizable: false,
    editable: false,
  },
  {
    field: "startDate",
    headerName: "신청기간 시작일",
    headerAlign: "left",
    minWidth: 120,
    flex: 1,
    resizable: false,
    editable: false,
  },
  {
    field: "endDate",
    headerName: "신청기간 종료일",
    headerAlign: "left",
    minWidth: 140,
    flex: 1,
    resizable: false,
    editable: false,
  },
  {
    field: "name",
    headerName: "모집 회차 이름",
    headerAlign: "left",
    minWidth: 190,
    flex: 1,
    resizable: false,
    editable: false,
  },
  {
    field: "editRecruitmentRoundInfo",
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
            onClick={() => handleClickEditRecruitmentRoundInfo(params.row.id)}
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
