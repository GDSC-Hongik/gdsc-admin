import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { DataGrid, GridCellParams, GridColDef } from "@mui/x-data-grid";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { QueryKey } from "@/constants/queryKey";
import { useIssuedCouponStateContext } from "@/hooks/contexts/useIssuedCouponContext";
import useRevokeIssuedCouponMutation from "@/hooks/mutations/useRevokeIssuedCouponMutation";
import useGetIssuedCouponListQuery from "@/hooks/queries/useGetIssuedCouponListQuery";
import { IssuedCouponType } from "@/types/entities/coupon";
import { formatDateWithText } from "@/utils/validation/formatDate";
import { formatPrice } from "@/utils/validation/formatPrice";

export default function IssuedCouponInfoTable() {
  const {
    paginationModel,
    searchInfo: { variant: searchVariant, text: searchText },
  } = useIssuedCouponStateContext();

  const issuedCouponList = useGetIssuedCouponListQuery(
    paginationModel.page,
    paginationModel.pageSize,
    searchVariant,
    searchText,
  );

  const { mutate } = useRevokeIssuedCouponMutation();

  const queryClient = useQueryClient();

  const getFilteredIssuedCouponList = (issuedCouponList: IssuedCouponType[]) => {
    return issuedCouponList.map(issuedCoupon => ({
      id: issuedCoupon.issuedCouponId,
      studentId: issuedCoupon.member.studentId,
      name: issuedCoupon.member.name,
      phone: issuedCoupon.member.phone,
      couponName: issuedCoupon.couponName,
      discountAmount: formatPrice(issuedCoupon.discountAmount),
      usedAt: !issuedCoupon.usedAt ? null : formatDateWithText(issuedCoupon.usedAt),
      issuedAt: !issuedCoupon.issuedAt ? null : formatDateWithText(issuedCoupon.issuedAt),
      hasUsed: issuedCoupon.hasUsed ? "O" : "X",
      hasRevoked: issuedCoupon.hasRevoked ? "O" : "X",
    }));
  };

  const handleClickRevokeCoupon = (couponId: number) => {
    mutate(couponId, {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: [QueryKey.issuedCouponList],
        });
        toast.success("쿠폰을 회수하였습니다.");
      },
    });
  };

  return (
    <>
      <StyledDataGrid
        rows={getFilteredIssuedCouponList(issuedCouponList)}
        columns={getColumns(handleClickRevokeCoupon)}
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

const getColumns = (handleClickRevokeCoupon: (couponId: number) => void): GridColDef[] => [
  {
    field: "studentId",
    headerName: "학번",
    headerAlign: "left",
    align: "left",
    width: 80,
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
    width: 190,
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
    width: 180,
    resizable: false,
    editable: false,
  },
  {
    field: "issuedAt",
    headerName: "발급일시",
    headerAlign: "left",
    align: "left",
    width: 200,
    resizable: false,
    editable: false,
  },
  {
    field: "hasUsed",
    headerName: "사용여부",
    headerAlign: "left",
    align: "left",
    width: 80,
    resizable: false,
    editable: false,
  },
  {
    field: "hasRevoked",
    headerName: "회수여부",
    headerAlign: "left",
    align: "left",
    width: 80,
    resizable: false,
    editable: false,
  },
  {
    field: "revokeCoupon",
    headerName: "",
    sortable: false,
    minWidth: 90,
    flex: 1,
    renderCell: (params: GridCellParams) => {
      return (
        <StyledButtonWrapper>
          <StyledButton
            variant="outlined"
            color="error"
            onClick={() => handleClickRevokeCoupon(params.row.id)}
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
  paddingTop: 9,
});

const StyledButton = styled(Button)({
  padding: "8px 22px",
  height: "32px",
});
