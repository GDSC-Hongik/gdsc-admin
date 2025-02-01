import { ChangeEvent, ReactNode, useState } from "react";
import { ClassNames } from "@emotion/react";
import styled from "@emotion/styled";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import DropDown from "wowds-ui/DropDown";
import DropDownOption from "wowds-ui/DropDownOption";
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

  const studyList = useGetStudyListQuery();

  const handleChangeCouponType = (value: { selectedValue: string; selectedText: ReactNode }) => {
    setCouponInfo(prevCouponInfo => ({
      ...prevCouponInfo,
      couponType: value.selectedValue as CouponInfoType["couponType"],
    }));
  };

  const handleChangeStudyId = (value: { selectedValue: string; selectedText: ReactNode }) => {
    setCouponInfo(prevCouponInfo => ({
      ...prevCouponInfo,
      studyId: Number(value.selectedValue) as CouponInfoType["studyId"],
    }));
  };
  const { mutate: createCouponMutate } = useCreateCouponMutation();

  const queryClient = useQueryClient();

  const handleChangeCouponTypeCouponInfo = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { value, name } = e.target;

    setCouponInfo(prevCouponInfo => ({
      ...prevCouponInfo,
      [name]: value,
    }));
  };

  const handleClickSubmit = () => {
    const { name, discountAmount } = couponInfo;

    if (!name || !discountAmount) {
      toast.error(`채워지지 않는 필드가 있어요. 모든 필드를 채워주세요!`);
      return;
    }

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
        <StyledTitle>{"쿠폰 생성"}</StyledTitle>
        <StyledContent>
          <>
            <StyledInfoWrapper>
              <StyledText>이름</StyledText>
              <StyledTextField
                placeholder="이름"
                size="small"
                value={couponInfo.name}
                name="name"
                onChange={handleChangeCouponTypeCouponInfo}
              />
            </StyledInfoWrapper>
            <StyledInfoWrapper>
              <StyledText>할인금액</StyledText>
              <StyledTextField
                placeholder="금액"
                size="small"
                value={couponInfo.discountAmount}
                name="discountAmount"
                onChange={handleChangeCouponTypeCouponInfo}
              />
            </StyledInfoWrapper>
          </>
          <ClassNames>
            {({ css }) => (
              <StyledInfoRow>
                <DropDown
                  label="쿠폰 종류"
                  placeholder="선택하세요"
                  value={couponInfo.couponType}
                  onChange={handleChangeCouponType}
                  className={css`
                    width: 22.375rem !important;
                    align-items: flex-start;
                    & > button {
                      width: 100%;
                    }
                  `}
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
                    className={css`
                      width: 22.375rem !important;
                      align-items: flex-start;
                      & > button {
                        width: 100%;
                      }
                    `}
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
            )}
          </ClassNames>

          <StyledButton size="large" variant="contained" onClick={handleClickSubmit}>
            {"생성하기"}
          </StyledButton>
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

const StyledText = styled(Typography)({
  color: "#6B6B6B",
  fontFamily: "SUIT v1",
  fontSize: "14px",
  fontWeight: 600,
  lineHeight: "14px",
  letterSpacing: "-0.14px",
});

const StyledInfoRow = styled("div")({
  display: "flex",
  gap: "10px",
});

const StyledContent = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-between",
  height: "490px",
});

const StyledInfoWrapper = styled(Box)<{ height?: number }>(({ height }) => ({
  height: height ? `${height}px` : "71px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "8px",
}));

const StyledTextField = styled(TextField)({
  "width": "274px",

  ".MuiInputBase-root": {
    borderRadius: 4,
    border: "1px solid #C2C2C2",
    padding: "8px 14px",
    height: "40px",
  },

  ".MuiInputBase-input": {
    padding: 0,
    fontFamily: "Pretendard",
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: "22.4px",
  },

  "fieldset": {
    border: "none",
  },

  ".MuiInputBase-input::placeholder": {
    color: "#C2C2C2",
  },
});

const StyledButton = styled(Button)({
  width: "328px",
  height: "48px",
  padding: "16px 0",
  marginTop: "auto",
  fontFamily: "SUIT v1",
  fontSize: "16px",
  fontWeight: 600,
  lineHeight: "16px",
  letterSpacing: "-0.16px",
});
