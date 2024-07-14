import styled from "@emotion/styled";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import CreateSemesterInfoModal from "../Modal/CreateSemesterInfoModal";
import DemoteMembersModal from "../Modal/DemoteMembersModal";
import {
  useRecruitmentState,
  useRecruitmentDispatch,
} from "@/hooks/contexts/useRecruitmentContext";
import useGetRecruitmentsQuery from "@/hooks/queries/useGetRecruitmentsQuery";
import { RecruitmentType } from "@/types/entities/recruitment";
import { formatDateWithDot } from "@/utils/validation/formatDate";

export default function RecruitmentInfoTable() {
  const { demoteModalOpen, createSemesterInfoModalOpen } = useRecruitmentState();
  const { setDemoteModalOpen, setCreateSemesterInfoModalOpen } = useRecruitmentDispatch();

  const recruitmentList = useGetRecruitmentsQuery();

  const getFilteredRecruitmentInfo = (recruitmentInfo: RecruitmentType[]) => {
    return recruitmentInfo.map(info => {
      const { recruitmentId, semester, semesterStartDate, semesterEndDate, recruitmentFee } = info;

      return {
        id: recruitmentId,
        academicYear: semester.slice(0, 4),
        semester: semester.slice(5, 6),
        semesterStartDate: formatDateWithDot(semesterStartDate),
        semesterEndDate: formatDateWithDot(semesterEndDate),
        recruitmentFee: recruitmentFee,
      };
    });
  };

  const handleCloseDemoteModal = () => {
    setDemoteModalOpen(false);
  };

  const handleCloseCreateSemesterInfoModal = () => {
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
      <DemoteMembersModal open={demoteModalOpen} onClose={handleCloseDemoteModal} />
      <CreateSemesterInfoModal
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
    field: "semesterStartDate",
    headerName: "학기 시작일",
    headerAlign: "left",
    width: 120,
    resizable: false,
    editable: false,
  },
  {
    field: "semesterEndDate",
    headerName: "학기 종료일",
    headerAlign: "left",
    width: 140,
    resizable: false,
    editable: false,
  },
  {
    field: "recruitmentFee",
    headerName: "회비",
    headerAlign: "left",
    width: 125,
    resizable: false,
    editable: false,
  },
];

const StyledDataGrid = styled(DataGrid)({ border: "none", minHeight: 370 });
