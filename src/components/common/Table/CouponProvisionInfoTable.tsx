import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { DataGrid, GridCellParams, GridColDef, GridRowModel } from "@mui/x-data-grid";
import {
  useCouponProvisionSearchInfoDispatch,
  useCouponProvisionSearchInfoState,
} from "@/hooks/contexts/useCouponProvisionSearchInfoContext";
import { useMemo, useRef, useState } from "react";
import useGetAllMemberListQuery from "@/hooks/queries/useGetAllMemberListQuery";
import MemberDetailInfoModal from "../Modal/MemberDetailInfoModal";
import { DetailMemberInfoType } from "@/types/dtos/member";

const mockData = [
  {
    semester: "2024-1",
    memberId: 0,
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
];

export default function CouponProvisionInfoTable() {
  const [detailMemberInfo, setDetailMemberInfo] = useState<DetailMemberInfoType>({
    name: "",
    studentId: "",
    phone: "",
    departmentName: "",
    email: "",
    discordUsername: "",
    nickname: "",
  });
  const [detailModalOpen, setDetailModalOpen] = useState(false);

  const { paginationModel, searchText, searchVariant } = useCouponProvisionSearchInfoState();
  const { setPaginationModel } = useCouponProvisionSearchInfoDispatch();

  const { allMemberList = [], totalElements } = useGetAllMemberListQuery(
    paginationModel.page,
    paginationModel.pageSize,
    searchVariant,
    searchText,
  );

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
      semester: memberInfo.semester,
      studentId: memberInfo.studentId,
      name: memberInfo.name,
      phone: memberInfo.phone,
      discordUsername: memberInfo.discordUsername,
      nickname: memberInfo.nickname,
      departmentName: memberInfo.department.name,
      email: memberInfo.email,
    }));
  };

  const getFilteredDetailInfoList = (detailMemberInfo: DetailMemberInfoType) => {
    const { name, studentId, phone, departmentName, email, discordUsername, nickname } =
      detailMemberInfo;

    return {
      "이름": name,
      "학번": studentId,
      "전화번호": phone,
      "소속 학과": departmentName,
      "이메일": email,
      "디스코드 사용자명": discordUsername,
      "디스코드 별명": nickname,
    };
  };

  const handleClickDetail = (row: GridRowModel) => {
    const { name, studentId, phone, departmentName, email, discordUsername, nickname } = row;

    setDetailMemberInfo({
      name,
      studentId,
      phone,
      departmentName,
      email,
      discordUsername,
      nickname,
    });
    setDetailModalOpen(true);
  };

  const handleCloseDetailModal = () => {
    setDetailMemberInfo({
      name: "",
      studentId: "",
      phone: "",
      departmentName: "",
      email: "",
      discordUsername: "",
      nickname: "",
    });
    setDetailModalOpen(false);
  };

  return (
    <>
      <StyledDataGrid
        rows={getFilteredMemberList(mockData)}
        columns={getColumns(handleClickDetail)}
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
      <MemberDetailInfoModal
        open={detailModalOpen}
        onClose={handleCloseDetailModal}
        detailInfo={getFilteredDetailInfoList(detailMemberInfo)}
      />
    </>
  );
}

const getColumns = (handleClickDetail: (row: GridRowModel) => void): GridColDef[] => [
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
    renderCell: (params: GridCellParams) => {
      return (
        <StyledButtonWrapper>
          <StyledButton
            variant="outlined"
            color="secondary"
            onClick={() => handleClickDetail(params.row)}
          >
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
