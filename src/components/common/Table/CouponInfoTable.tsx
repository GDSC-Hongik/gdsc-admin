import styled from "@emotion/styled";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
// import useGetIssuedCouponListQuery from "@/hooks/queries/useGetIssuedCouponListQuery";
import { IssuedCouponListResponseDtoType } from "@/types/dtos/coupon";
import { formatDateWithText } from "@/utils/date";

const mockIssuedCouponList = [
  {
    couponId: 0,
    name: "string",
    discountAmount: 0,
    createdAt: "2024-06-27T17:43:56.259Z",
  },
  {
    couponId: 0,
    name: "string",
    discountAmount: 0,
    createdAt: "2024-06-27T17:43:56.259Z",
  },
  {
    couponId: 0,
    name: "string",
    discountAmount: 0,
    createdAt: "2024-06-27T17:43:56.259Z",
  },
  {
    couponId: 0,
    name: "string",
    discountAmount: 0,
    createdAt: "2024-06-27T17:43:56.259Z",
  },
  {
    couponId: 0,
    name: "string",
    discountAmount: 0,
    createdAt: "2024-06-27T17:43:56.259Z",
  },
  {
    couponId: 0,
    name: "string",
    discountAmount: 0,
    createdAt: "2024-06-27T17:43:56.259Z",
  },
];

export default function CouponInfoTable() {
  //   const issuedCouponList = useGetIssuedCouponListQuery();

  const getFilteredIssuedCouponList = (couponList: IssuedCouponListResponseDtoType) => {
    return couponList.map(issuedCoupon => ({
      id: issuedCoupon.couponId,
      name: issuedCoupon.name,
      discountAmount: `${issuedCoupon.discountAmount}원`,
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
