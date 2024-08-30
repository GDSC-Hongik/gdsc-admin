import { useRef } from "react";
import styled from "@emotion/styled";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import CreateRecruitmentInfoModal from "./CreateRecruitmentInfoModal";
import DemoteMembersModal from "./DemoteMembersModal";
import {
  useRecruitmentStateContext,
  useRecruitmentDispatchContext,
} from "@/hooks/contexts/useRecruitmentContext";
import useGetRecruitmentsQuery from "@/hooks/queries/useGetRecruitmentsQuery";
import { RecruitmentType } from "@/types/entities/recruitment";
import { formatDateWithDot } from "@/utils/validation/formatDate";

export default function RecruitmentInfoTable() {
  const { demoteModalOpen, createSemesterInfoModalOpen } = useRecruitmentStateContext();
  const { setDemoteModalOpen, setCreateSemesterInfoModalOpen } = useRecruitmentDispatchContext();

  const demoteMemberModalIdRef = useRef(0);
  const createSemesterModalIdRef = useRef(0);

  const recruitmentList = useGetRecruitmentsQuery();

  const getFilteredRecruitmentInfo = (recruitmentInfo: RecruitmentType[]) => {
    return recruitmentInfo.map(info => {
      const {
        recruitmentId,
        semester,
        semesterStartDate,
        semesterEndDate,
        recruitmentFee,
        feeName,
      } = info;

      return {
        id: recruitmentId,
        academicYear: semester.slice(0, 4),
        semester: semester.slice(5, 6),
        semesterStartDate: formatDateWithDot(semesterStartDate),
        semesterEndDate: formatDateWithDot(semesterEndDate),
        feeName,
        recruitmentFee,
      };
    });
  };

  const handleCloseDemoteModal = () => {
    demoteMemberModalIdRef.current += 1;
    setDemoteModalOpen(false);
  };

  const handleCloseCreateSemesterInfoModal = () => {
    createSemesterModalIdRef.current += 1;
    setCreateSemesterInfoModalOpen(false);
  };

  return (
    <>
      <StyledDataGrid
        rows={getFilteredRecruitmentInfo(recruitmentList)}
        columns={columns}
        disableRowSelectionOnClick
        autoHeight
        disableColumnFilter
        disableColumnMenu
        disableColumnSorting
        hideFooter
      />
      <DemoteMembersModal
        key={`demote-${demoteMemberModalIdRef.current}`}
        open={demoteModalOpen}
        onClose={handleCloseDemoteModal}
      />
      <CreateRecruitmentInfoModal
        key={`create-${createSemesterModalIdRef.current}`}
        open={createSemesterInfoModalOpen}
        onClose={handleCloseCreateSemesterInfoModal}
      />
    </>
  );
}

const columns: GridColDef[] = [
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
    field: "semesterStartDate",
    headerName: "학기 시작일",
    headerAlign: "left",
    minWidth: 120,
    flex: 1,
    resizable: false,
    editable: false,
  },
  {
    field: "semesterEndDate",
    headerName: "학기 종료일",
    headerAlign: "left",
    minWidth: 140,
    flex: 1,
    resizable: false,
    editable: false,
  },
  {
    field: "feeName",
    headerName: "회비 이름",
    headerAlign: "left",
    minWidth: 225,
    flex: 1,
    resizable: false,
    editable: false,
  },
  {
    field: "recruitmentFee",
    headerName: "회비",
    headerAlign: "left",
    minWidth: 125,
    flex: 1,
    resizable: false,
    editable: false,
  },
];

const StyledDataGrid = styled(DataGrid)({ border: "none", minHeight: 370 });
