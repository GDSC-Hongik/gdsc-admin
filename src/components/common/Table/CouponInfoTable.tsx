import styled from "@emotion/styled";
import { DataGrid, GridCellParams, GridColDef, GridRowModel } from "@mui/x-data-grid";
// import useGetIssuedCouponListQuery from "@/hooks/queries/useGetIssuedCouponListQuery";
import { IssuedCouponListResponseDtoType } from "@/types/dtos/coupon";
import { formatDateWithText } from "@/utils/date";
import { Button } from "@mui/material";
import {
  useCouponSearchInfoDispatch,
  useCouponSearchInfoState,
} from "@/hooks/contexts/useCouponSearchInfoState";
import CouponModal from "../Modal/CouponModal";
import useDeleteCouponMutation from "@/hooks/mutations/useDeleteCouponMutation";

const mockIssuedCouponList = [
  {
    couponId: 0,
    name: "string",
    discountAmount: 0,
    createdAt: "2024-06-27T17:43:56.259Z",
  },
  {
    couponId: 1,
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
  const { createCouponModalOpen } = useCouponSearchInfoState();
  const { setCreateCouponModalOpen } = useCouponSearchInfoDispatch();

  //   const issuedCouponList = useGetIssuedCouponListQuery();
  const { mutate: deleteCouponMutate } = useDeleteCouponMutation();

  const handleClickCouponDelete = (row: GridRowModel) => {
    deleteCouponMutate(row.id);
  };

  const handleCloseModal = () => {
    setCreateCouponModalOpen(false);
  };

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
        columns={getColumns(handleClickCouponDelete)}
        autoHeight
        disableRowSelectionOnClick
        disableColumnFilter
        disableColumnMenu
        disableColumnSorting
        hideFooterPagination
      />
      <CouponModal open={createCouponModalOpen} onClose={handleCloseModal} />
    </>
  );
}

const getColumns = (handleClickCouponDelete: (row: GridRowModel) => void): GridColDef[] => [
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
  {
    field: "editCoupon",
    headerName: "",
    sortable: false,
    flex: 1,
    renderCell: (params: GridCellParams) => {
      return (
        <StyledButtonWrapper>
          <StyledButton variant="outlined" color="primary" onClick={() => {}}>
            수정
          </StyledButton>
          <StyledButton
            variant="outlined"
            color="error"
            onClick={() => handleClickCouponDelete(params.row)}
          >
            회수
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
  padding: "8px 22px",
  height: "32px",
  width: "64px",
});
