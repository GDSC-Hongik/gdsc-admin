import { useRef } from "react";
import styled from "@emotion/styled";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import CouponModal from "./CouponModal";
import { useCouponDispatchContext, useCouponStateContext } from "@/hooks/contexts/useCouponContext";
import useGetCouponListQuery from "@/hooks/queries/useGetCouponListQuery";
import { CouponListResponseDtoType } from "@/types/dtos/coupon";
import { formatDateWithText } from "@/utils/validation/formatDate";
import { formatPrice } from "@/utils/validation/formatPrice";

export default function CouponInfoTable() {
  const modalKey = useRef(0);

  const { modalOpen } = useCouponStateContext();
  const { setModalOpen } = useCouponDispatchContext();

  const couponList = useGetCouponListQuery();

  const handleCloseModal = () => {
    setModalOpen(false);
    modalKey.current += 1;
  };

  const getFilteredCouponList = (couponList: CouponListResponseDtoType) => {
    return couponList.map(coupon => ({
      id: coupon.couponId,
      name: coupon.name,
      discountAmount: formatPrice(coupon.discountAmount),
      createdAt: formatDateWithText(coupon.createdAt),
    }));
  };

  return (
    <>
      <StyledDataGrid
        rows={getFilteredCouponList(couponList)}
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
