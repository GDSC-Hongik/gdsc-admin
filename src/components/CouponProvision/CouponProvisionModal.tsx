import styled from "@emotion/styled";
import { Box, Button, Modal, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { QueryKey } from "@/constants/queryKey";
import { useCouponProvisionStateContext } from "@/hooks/contexts/useCouponProvisionContext";
import useIssueCouponMutation from "@/hooks/mutations/useIssueCouponMutation";
import { SelectedCouponProvisionMemberListType } from "@/types/entities/coupon";

type CouponProvisionModalPropsType = {
  open: boolean;
  onClose: () => void;
  detailInfo: SelectedCouponProvisionMemberListType;
};

export default function CouponProvisionModal({
  open,
  onClose,
  detailInfo,
}: CouponProvisionModalPropsType) {
  const { selectedCouponId } = useCouponProvisionStateContext();
  const { mutate } = useIssueCouponMutation();

  const queryClient = useQueryClient();

  const handleClickCouponProvision = () => {
    const memberIds = detailInfo.map(info => info.id);

    if (!selectedCouponId) {
      toast.error("선택된 쿠폰이 없습니다.");
      return;
    } else if (!memberIds.length) {
      toast.error("선택된 멤버가 없습니다.");
      return;
    }

    mutate(
      {
        couponId: selectedCouponId,
        memberIds,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: [QueryKey.issuedCouponList],
          });
          toast.success("쿠폰이 발급되었습니다.");
          onClose();
        },
      },
    );
  };

  return (
    <Modal open={open} onClose={onClose}>
      <StyledModalContentWrapper>
        <StyledTitle>쿠폰 지급 확인</StyledTitle>
        <StyledContent>
          <StyledDataGrid
            rows={detailInfo}
            columns={columns}
            hideFooter
            disableRowSelectionOnClick
            disableColumnFilter
            disableColumnMenu
            disableColumnSorting
          />
        </StyledContent>
        <StyledButton size="large" variant="contained" onClick={handleClickCouponProvision}>
          {"지급하기"}
        </StyledButton>
      </StyledModalContentWrapper>
    </Modal>
  );
}

const columns: GridColDef[] = [
  {
    field: "studentId",
    headerName: "학번",
    headerAlign: "left",
    align: "left",
    width: 177,
    resizable: false,
    editable: false,
  },
  {
    field: "name",
    headerName: "이름",
    headerAlign: "left",
    align: "left",
    width: 177,
    resizable: false,
    editable: false,
  },
  {
    field: "phone",
    headerName: "전화번호",
    headerAlign: "left",
    align: "left",
    width: 177,
    resizable: false,
    editable: false,
  },
  {
    field: "discordUsername",
    headerName: "디스코드 핸들명",
    headerAlign: "left",
    align: "left",
    width: 177,
    resizable: false,
    editable: false,
  },
  {
    field: "nickname",
    headerName: "디스코드 닉네임",
    headerAlign: "left",
    align: "left",
    width: 177,
    resizable: false,
    editable: false,
  },
];

const StyledModalContentWrapper = styled("main")({
  width: "988px",
  height: "640px",
  backgroundColor: "white",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "10px",
  padding: "40px",
});

const StyledDataGrid = styled(DataGrid)({
  border: "none",
  width: "100%",
  maxHeight: "430px",
  minHeight: "100px",
  overflowY: "auto",
});

const StyledTitle = styled(Typography)({
  fontFamily: "SUIT v1",
  fontSize: "32px",
  fontWeight: 700,
  lineHeight: "41.6px",
  letterSpacing: "-0.32px",
});

const StyledContent = styled(Box)({
  width: "100%",
  maxHeight: "430px",
  overflowY: "auto",
});

const StyledButton = styled(Button)({
  padding: "16px 0px",
  width: "328px",
  height: "48px",
});
