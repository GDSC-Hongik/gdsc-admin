import { ReactNode, useState } from "react";
import { ClassNames } from "@emotion/react";
import styled from "@emotion/styled";
import { Box, Modal, Typography } from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import Button from "wowds-ui/Button";
import DropDown from "wowds-ui/DropDown";
import DropDownOption from "wowds-ui/DropDownOption";
import TextField from "wowds-ui/TextField";
import { QueryKey } from "@/constants/queryKey";
import useCreateCouponMutation from "@/hooks/mutations/useCreateCouponMutation";
import useGetStudyListQuery from "@/hooks/queries/useGetStudyListQuery";
import { CouponInfoType } from "@/types/entities/coupon";

type CouponModalPropsType = {
  open: boolean;
  onClose: () => void;
};

type CouponInfoStateType = Omit<CouponInfoType, "couponType"> & {
  couponType?: "ADMIN" | "STUDY_COMPLETION";
};

export default function CouponModal({ open, onClose }: CouponModalPropsType) {
  const [couponInfo, setCouponInfo] = useState<CouponInfoStateType>({
    name: "",
    discountAmount: null,
    couponType: null as unknown as CouponInfoType["couponType"],
    studyId: null,
  });

  const queryClient = useQueryClient();

  const studyList = useGetStudyListQuery();

  const { mutate: createCouponMutate } = useCreateCouponMutation();

  const isCouponInfoComplete =
    couponInfo.name !== null &&
    couponInfo.name !== "" &&
    couponInfo.discountAmount !== null &&
    couponInfo.couponType !== null &&
    (couponInfo.couponType === "ADMIN" || couponInfo.studyId !== null);

  const handleChangeName = (value: string) => {
    setCouponInfo(prevCouponInfo => ({
      ...prevCouponInfo,
      name: value,
    }));
  };
  const handleChangeDiscountAmount = (value: string) => {
    setCouponInfo(prevCouponInfo => ({
      ...prevCouponInfo,
      discountAmount: Number(value),
    }));
  };

  const handleChangeCouponType = (value: { selectedValue: string; selectedText: ReactNode }) => {
    setCouponInfo(prevCouponInfo => ({
      ...prevCouponInfo,
      couponType: value.selectedValue as CouponInfoType["couponType"],
      studyId: value.selectedValue === "ADMIN" ? null : prevCouponInfo.studyId,
    }));
  };

  const handleChangeStudyId = (value: { selectedValue: string; selectedText: ReactNode }) => {
    setCouponInfo(prevCouponInfo => ({
      ...prevCouponInfo,
      studyId: Number(value.selectedValue) as CouponInfoType["studyId"],
    }));
  };

  const handleClickSubmit = () => {
    createCouponMutate(couponInfo as CouponInfoType, {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: [QueryKey.couponList],
        });
        toast.success("쿠폰이 생성되었습니다.");
        onClose();
      },
    });
  };

  return (
    <Modal open={open} onClose={onClose}>
      <StyledModalContentWrapper>
        <StyledTitle>쿠폰 생성</StyledTitle>
        <StyledContent>
          <StyledInfoWrapper>
            <TextField
              label="이름"
              placeholder="이름"
              value={couponInfo.name}
              onChange={handleChangeName}
            />
            <TextField
              label="할인 금액"
              placeholder="금액"
              value={couponInfo.discountAmount === null ? "" : String(couponInfo.discountAmount)}
              onChange={handleChangeDiscountAmount}
            />

            <ClassNames>
              {({ css }) => {
                const dropdownClass = css`
                  width: 22.375rem !important;
                  align-items: flex-start;
                  & > button {
                    width: 100%;
                  }
                `;

                return (
                  <StyledInfoRow>
                    <DropDown
                      label="쿠폰 종류"
                      placeholder="선택하세요"
                      value={couponInfo.couponType}
                      onChange={handleChangeCouponType}
                      className={dropdownClass}
                    >
                      <DropDownOption value="ADMIN" text="어드민" />
                      <DropDownOption value="STUDY_COMPLETION" text="스터디 수료" />
                    </DropDown>

                    {couponInfo.couponType === "STUDY_COMPLETION" && (
                      <DropDown
                        label="스터디 이름"
                        placeholder="선택하세요"
                        value={String(couponInfo.studyId)}
                        onChange={handleChangeStudyId}
                        className={dropdownClass}
                      >
                        {studyList.map(study => (
                          <DropDownOption
                            key={study.studyId}
                            value={String(study.studyId)}
                            text={study.title}
                          />
                        ))}
                      </DropDown>
                    )}
                  </StyledInfoRow>
                );
              }}
            </ClassNames>
          </StyledInfoWrapper>
          <Button
            disabled={!isCouponInfoComplete}
            style={{ width: "20.5rem" }}
            onClick={handleClickSubmit}
          >
            생성하기
          </Button>
        </StyledContent>
      </StyledModalContentWrapper>
    </Modal>
  );
}

const StyledModalContentWrapper = styled("main")({
  width: "988px",
  height: "640px",
  backgroundColor: "white",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
  padding: "40px",
  boxSizing: "border-box",
});

const StyledTitle = styled(Typography)({
  marginBottom: "20px",
  fontFamily: "SUIT v1",
  fontSize: "32px",
  fontWeight: 700,
  lineHeight: "41.6px",
  letterSpacing: "-0.32px",
});

const StyledInfoRow = styled("div")({
  display: "flex",
  gap: "10px",
});

const StyledContent = styled(Box)({
  "display": "flex",
  "flexDirection": "column",
  "alignItems": "flex-start",
  "justifyContent": "space-between",
  "height": "490px",
  "& > :last-child": {
    alignSelf: "center",
  },
});

const StyledInfoWrapper = styled(Box)<{ height?: number }>(({ height }) => ({
  height: height ? `${height}px` : "71px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "8px",
}));
