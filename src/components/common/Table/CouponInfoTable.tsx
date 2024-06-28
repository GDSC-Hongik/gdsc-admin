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
import { useState } from "react";

const mockIssuedCouponList = [
  {
    couponId: 1,
    name: "string",
    discountAmount: 234,
    createdAt: "2024-06-27T17:43:56.259Z",
  },
  {
    couponId: 2,
    name: "string",
    discountAmount: 234,
    createdAt: "2024-06-27T17:43:56.259Z",
  },
  {
    couponId: 3,
    name: "string",
    discountAmount: 234,
    createdAt: "2024-06-27T17:43:56.259Z",
  },
  {
    couponId: 4,
    name: "string",
    discountAmount: 234,
    createdAt: "2024-06-27T17:43:56.259Z",
  },
  {
    couponId: 5,
    name: "string",
    discountAmount: 234,
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
  const [editCouponData, setEditCouponData] = useState({
    couponId: 0,
    name: "",
    discountAmount: 0,
    createdAt: "",
  });
  const [isEdit, setIsEdit] = useState(false);

  const { modalOpen } = useCouponSearchInfoState();
  const { setModalOpen } = useCouponSearchInfoDispatch();

  //   const issuedCouponList = useGetIssuedCouponListQuery();
  const { mutate: deleteCouponMutate } = useDeleteCouponMutation();

  const handleClickCouponEdit = (row: GridRowModel) => {
    const { id, name, discountAmount, createdAt } = row;

    setIsEdit(true);
    setEditCouponData({
      couponId: id,
      name,
      discountAmount,
      createdAt,
    });
    setModalOpen(true);
  };

  const handleClickCouponDelete = (id: number) => {
    deleteCouponMutate(id);
  };

  const handleCloseModal = () => {
    if (isEdit) {
      setIsEdit(false);
      setEditCouponData({
        couponId: 0,
        name: "",
        discountAmount: 0,
        createdAt: "",
      });
    }
    setModalOpen(false);
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
        columns={getColumns(handleClickCouponDelete, handleClickCouponEdit)}
        autoHeight
        disableRowSelectionOnClick
        disableColumnFilter
        disableColumnMenu
        disableColumnSorting
        hideFooterPagination
      />
      <CouponModal
        key={Date.now()}
        open={modalOpen}
        onClose={handleCloseModal}
        defaultValue={editCouponData}
        isEdit={isEdit}
      />
    </>
  );
}

const getColumns = (
  handleClickCouponDelete: (id: number) => void,
  handleClickCouponEdit: (row: GridRowModel) => void,
): GridColDef[] => [
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
          <StyledButton
            variant="outlined"
            color="primary"
            onClick={() => handleClickCouponEdit(params.row)}
          >
            수정
          </StyledButton>
          <StyledButton
            variant="outlined"
            color="error"
            onClick={() => handleClickCouponDelete(params.row.id)}
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
