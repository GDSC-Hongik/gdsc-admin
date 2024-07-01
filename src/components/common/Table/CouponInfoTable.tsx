import { useRef } from "react";
import styled from "@emotion/styled";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
// import useGetCouponListQuery from "@/hooks/queries/useGetCouponListQuery";
import { CouponListResponseDtoType } from "@/types/dtos/coupon";
import { formatDateWithText } from "@/utils/validation/formatDate";
import {
  useCouponSearchInfoDispatch,
  useCouponSearchInfoState,
} from "@/hooks/contexts/useCouponSearchInfoState";
import CouponModal from "../Modal/CouponModal";
import { formatPrice } from "@/utils/validation/formatPrice";

const mockIssuedCouponList = [
  {
    couponId: 1,
    name: "string",
    discountAmount: 1234,
    createdAt: "2024-06-27T17:43:56.259Z",
  },
  {
    couponId: 2,
    name: "string",
    discountAmount: 2234,
    createdAt: "2024-06-27T17:43:56.259Z",
  },
  {
    couponId: 3,
    name: "string",
    discountAmount: 3234,
    createdAt: "2024-06-27T17:43:56.259Z",
  },
  {
    couponId: 4,
    name: "string",
    discountAmount: 4234,
    createdAt: "2024-06-27T17:43:56.259Z",
  },
  {
    couponId: 5,
    name: "string",
    discountAmount: 5234,
    createdAt: "2024-06-27T17:43:56.259Z",
  },
  {
    couponId: 6,
    name: "string",
    discountAmount: 234,
    createdAt: "2024-06-27T17:43:56.259Z",
  },
];

export default function CouponInfoTable() {
  const modalKey = useRef(0);

  const { modalOpen } = useCouponSearchInfoState();
  const { setModalOpen } = useCouponSearchInfoDispatch();

  //   const issuedCouponList = useGetCouponListQuery();

  const handleCloseModal = () => {
    setModalOpen(false);
    modalKey.current += 1;
  };

  const getFilteredIssuedCouponList = (couponList: CouponListResponseDtoType) => {
    return couponList.map(issuedCoupon => ({
      id: issuedCoupon.couponId,
      name: issuedCoupon.name,
      discountAmount: formatPrice(issuedCoupon.discountAmount),
      createdAt: formatDateWithText(issuedCoupon.createdAt),
    }));
  };

  return (
    <>
      <StyledDataGrid
        rows={getFilteredIssuedCouponList(mockIssuedCouponList)}
        columns={columns}
        autoHeight
        disableRowSelectionOnClick
        disableColumnFilter
        disableColumnMenu
        disableColumnSorting
        hideFooterPagination
      />
      <CouponModal key={modalKey.current} open={modalOpen} onClose={handleCloseModal} />
    </>
  );
}

const columns: GridColDef[] = [
  {
    field: "name",
    headerName: "이름",
    headerAlign: "left",
    align: "left",
    width: 180,
    resizable: false,
    editable: false,
  },
  {
    field: "discountAmount",
    headerName: "할인 금액",
    headerAlign: "left",
    align: "left",
    width: 160,
    resizable: false,
    editable: false,
  },
  {
    field: "createdAt",
    headerName: "생성 일시",
    headerAlign: "left",
    align: "left",
    width: 200,
    resizable: false,
    editable: false,
  },
];

const StyledDataGrid = styled(DataGrid)({ border: "none", minHeight: 370 });
