import { useState } from "react";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { DataGrid, GridCellParams, GridColDef, GridRowModel } from "@mui/x-data-grid";
// import useGetIssuedCouponListQuery from "@/hooks/queries/useGetIssuedCouponListQuery";
import { IssuedCouponType } from "@/types/entities/coupon";
import { formatDateWithText } from "@/utils/validation/formatDate";
import { formatPrice } from "@/utils/validation/formatPrice";
import DetailInfoModal from "../Modal/DetailInfoModal";
import { DetailCouponInfoType } from "@/types/entities/coupon";

const mockIssuedCouponList = [
  {
    issuedCouponId: 0,
    member: {
      memberId: 0,
      studentId: "C111206",
      name: "홍서현",
      email: "ghdtjgus76@naver.com",
      phone: "010-8712-0786",
    },
    couponName: "2024-1 정규 스터디 수료 쿠폰",
    discountAmount: 10000,
    usedAt: "2024-06-29T07:47:58.632Z",
    isUsed: true,
  },
  {
    issuedCouponId: 1,
    member: {
      memberId: 0,
      studentId: "C111206",
      name: "string",
      email: "string",
      phone: "string",
    },
    couponName: "string",
    discountAmount: 0,
    usedAt: "2024-06-29T07:47:58.632Z",
    isUsed: true,
  },
  {
    issuedCouponId: 2,
    member: {
      memberId: 0,
      studentId: "C111206",
      name: "string",
      email: "string",
      phone: "string",
    },
    couponName: "string",
    discountAmount: 0,
    usedAt: "2024-06-29T07:47:58.632Z",
    isUsed: true,
  },
];

export default function CouponProvisionMembersInfoTable() {
  const [modalOpen, setModalOpen] = useState(false);
  const [detailInfo, setDetailInfo] = useState<DetailCouponInfoType>({
    id: 0,
    studentId: "",
    name: "",
    phone: "",
    couponName: "",
    discountAmount: "",
    usedAt: "",
    isUsed: "",
  });
  //   const issuedCouponList = useGetIssuedCouponListQuery();

  const getFilteredIssuedCouponList = (issuedCouponList: IssuedCouponType[]) => {
    return issuedCouponList.map(issuedCoupon => ({
      id: issuedCoupon.issuedCouponId,
      studentId: issuedCoupon.member.studentId,
      name: issuedCoupon.member.name,
      phone: issuedCoupon.member.phone,
      couponName: issuedCoupon.couponName,
      discountAmount: formatPrice(issuedCoupon.discountAmount),
      usedAt: formatDateWithText(issuedCoupon.usedAt),
      isUsed: issuedCoupon.isUsed ? "O" : "X",
    }));
  };

  const handleClickCouponDetail = (row: GridRowModel) => {
    const { id, studentId, name, phone, couponName, discountAmount, usedAt, isUsed } = row;

    setDetailInfo({ id, studentId, name, phone, couponName, discountAmount, usedAt, isUsed });
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <StyledDataGrid
        rows={getFilteredIssuedCouponList(mockIssuedCouponList)}
        columns={getColumns(handleClickCouponDetail)}
        autoHeight
        disableRowSelectionOnClick
        disableColumnFilter
        disableColumnMenu
        disableColumnSorting
        hideFooterPagination
      />
      <DetailInfoModal open={modalOpen} onClose={handleCloseModal} detailInfo={detailInfo} />
    </>
  );
}

const getColumns = (handleClickCouponDetail: (row: GridRowModel) => void): GridColDef[] => [
  {
    field: "studentId",
    headerName: "학번",
    headerAlign: "left",
    align: "left",
    width: 70,
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
    width: 115,
    resizable: false,
    editable: false,
  },
  {
    field: "couponName",
    headerName: "쿠폰",
    headerAlign: "left",
    align: "left",
    width: 250,
    resizable: false,
    editable: false,
  },
  {
    field: "discountAmount",
    headerName: "할인 금액",
    headerAlign: "left",
    align: "left",
    width: 90,
    resizable: false,
    editable: false,
  },
  {
    field: "usedAt",
    headerName: "사용일시",
    headerAlign: "left",
    align: "left",
    width: 200,
    resizable: false,
    editable: false,
  },
  {
    field: "isUsed",
    headerName: "사용여부",
    headerAlign: "left",
    align: "left",
    width: 70,
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
            onClick={() => handleClickCouponDetail(params.row)}
          >
            상세
          </StyledButton>
        </StyledButtonWrapper>
      );
    },
  },
];

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

const StyledDataGrid = styled(DataGrid)({ border: "none", minHeight: 370 });
