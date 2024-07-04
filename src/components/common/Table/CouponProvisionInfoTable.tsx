import styled from "@emotion/styled";
import { DataGrid, GridColDef, GridRowSelectionModel } from "@mui/x-data-grid";
import {
  useCouponProvisionSearchInfoDispatch,
  useCouponProvisionSearchInfoState,
} from "@/hooks/contexts/useCouponProvisionSearchInfoContext";
import { useMemo, useRef, useState } from "react";
// import useGetAllMemberListQuery from "@/hooks/queries/useGetAllMemberListQuery";
import CouponProvisionModal from "../Modal/CouponProvisionModal";

const mockData = [
  {
    memberId: 1,
    studentId: "C111206",
    name: "홍서현",
    phone: "010-8712-0786",
    department: {
      code: "D001",
      name: "컴퓨터공학전공",
    },
    email: "ghdtjgus76@naver.com",
    discordUsername: "홍서현",
    nickname: "홍서현",
    requirement: {
      univStatus: "VERIFIED",
      discordStatus: "VERIFIED",
      bevyStatus: "VERIFIED",
    },
  },
  {
    memberId: 2,
    studentId: "C111206",
    name: "홍서현2",
    phone: "010-8712-0786",
    department: {
      code: "D001",
      name: "컴퓨터공학전공",
    },
    email: "ghdtjgus76@naver.com",
    discordUsername: "홍서현",
    nickname: "홍서현",
    requirement: {
      univStatus: "VERIFIED",
      discordStatus: "VERIFIED",
      bevyStatus: "VERIFIED",
    },
  },
];

const totalElements = 2;

export default function CouponProvisionInfoTable() {
  const [rowSelectionModel, setRowSelectionModel] = useState<GridRowSelectionModel>([]);

  const { paginationModel, provisionModalOpen } = useCouponProvisionSearchInfoState();
  const { setPaginationModel, setProvisionModalOpen, setSelectedCouponId } =
    useCouponProvisionSearchInfoDispatch();

  // const { allMemberList = [], totalElements } = useGetAllMemberListQuery(
  //   paginationModel.page,
  //   paginationModel.pageSize,
  //   searchVariant,
  //   searchText,
  // );

  const selectedMemberList = mockData
    .filter(member => rowSelectionModel.includes(member.memberId))
    .map(member => ({
      id: member.memberId,
      studentId: member.studentId,
      name: member.name,
      phone: member.phone,
      discordUsername: member.discordUsername,
      nickname: member.nickname,
    }));

  const rowCountRef = useRef(totalElements || 0);

  const rowCount = useMemo(() => {
    if (totalElements !== undefined) {
      rowCountRef.current = totalElements;
    }

    return rowCountRef.current;
  }, [totalElements]);

  const getFilteredMemberList = (allMemberList: any[]) => {
    return allMemberList.map(memberInfo => ({
      id: memberInfo.memberId,
      studentId: memberInfo.studentId,
      name: memberInfo.name,
      phone: memberInfo.phone,
      discordUsername: memberInfo.discordUsername,
      nickname: memberInfo.nickname,
      departmentName: memberInfo.department.name,
      email: memberInfo.email,
    }));
  };

  const handleRowSelectionModelChange = (newRowSelectionModel: GridRowSelectionModel) => {
    setRowSelectionModel(newRowSelectionModel);
  };

  const handleCloseCouponProvisionModal = () => {
    setRowSelectionModel([]);
    setSelectedCouponId(0);
    setProvisionModalOpen(false);
  };

  return (
    <>
      <StyledDataGrid
        rows={getFilteredMemberList(mockData)}
        columns={columns}
        onRowSelectionModelChange={handleRowSelectionModelChange}
        rowSelectionModel={rowSelectionModel}
        checkboxSelection
        autoHeight
        pageSizeOptions={[5, 25, 100]}
        rowCount={rowCount}
        paginationMode="server"
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        disableRowSelectionOnClick
        disableColumnFilter
        disableColumnMenu
        disableColumnSorting
      />
      <CouponProvisionModal
        open={provisionModalOpen}
        onClose={handleCloseCouponProvisionModal}
        detailInfo={selectedMemberList}
      />
    </>
  );
}

const columns: GridColDef[] = [
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
    width: 70,
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
    flex: 1,
    resizable: false,
    editable: false,
  },
];

const StyledDataGrid = styled(DataGrid)({ border: "none", minHeight: 370 });
