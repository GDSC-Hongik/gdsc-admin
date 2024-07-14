import styled from "@emotion/styled";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import CreateSemesterInfoModal from "../Modal/CreateSemesterInfoModal";
import DemoteMembersModal from "../Modal/DemoteMembersModal";
import {
  useRecruitingSearchInfoDispatch,
  useRecruitingSearchInfoState,
} from "@/hooks/contexts/useRecruitingSearchInfoContext";
import { RecruitmentsResponseDtoType } from "@/types/dtos/recruitment";
import { formatDateWithDot } from "@/utils/validation/formatDate";
import { formatPrice } from "@/utils/validation/formatPrice";

const mockData: RecruitmentsResponseDtoType = [
  {
    recruitmentId: 1,
    semester: "2024-1학기",
    round: "1차",
    startDate: "2024-06-23T23:09:22",
    endDate: "2024-08-23T23:10:55",
    fee: 20000,
  },
];

export default function RecruitmentInfoTable() {
  const { demoteModalOpen, createSemesterInfoModalOpen } = useRecruitingSearchInfoState();
  const { setDemoteModalOpen, setCreateSemesterInfoModalOpen } = useRecruitingSearchInfoDispatch();

  const getFilteredRecruitingInfo = (recruitingInfo: RecruitmentsResponseDtoType) => {
    return recruitingInfo.map(info => ({
      id: info.recruitmentId,
      academicYear: info.semester.slice(0, 4),
      semester: info.semester.slice(5, 6),
      startDate: formatDateWithDot(info.startDate),
      endDate: formatDateWithDot(info.endDate),
      fee: formatPrice(info.fee),
    }));
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
        rows={getFilteredRecruitingInfo(mockData)}
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
    field: "fee",
    headerName: "회비",
    headerAlign: "left",
    width: 125,
    resizable: false,
    editable: false,
  },
];

const StyledDataGrid = styled(DataGrid)({ border: "none", minHeight: 370 });
