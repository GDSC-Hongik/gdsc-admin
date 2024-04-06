import { ChangeEvent, Dispatch, SetStateAction } from "react";
import styled from "@emotion/styled";
import { Box, TextField } from "@mui/material";
import useGetDepartmentListQuery from "@/hooks/queries/useGetDepartmentListQuery";
import { theme } from "@/styles/theme";
import { DepartmentListResponseDtoType } from "@/types/dtos/member";
import { AllMemberInfoStateType } from "@/types/entities/member";
import { memberInfoValidation } from "@/utils/validation";

type AdditionalInfoProps = Pick<AllMemberInfoStateType, "email"> & {
  handleChangeMemberInfo: (e: ChangeEvent<HTMLInputElement>) => void;
  setMemberInfo: Dispatch<SetStateAction<AllMemberInfoStateType>>;
  departmentSearchText: string;
  setDepartmentSearchText: Dispatch<SetStateAction<string>>;
};

export default function AdditionalInfo({
  email,
  handleChangeMemberInfo,
  setMemberInfo,
  departmentSearchText,
  setDepartmentSearchText,
}: AdditionalInfoProps) {
  const { departmentList } = useGetDepartmentListQuery(departmentSearchText);

  const handleClickDepartmentItem = (departmentItem: DepartmentListResponseDtoType) => {
    setDepartmentSearchText(departmentItem.name);
    setMemberInfo(prevInfo => ({
      ...prevInfo,
      department: departmentItem,
    }));
  };

  const handleChangeDepartmentSearchText = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setDepartmentSearchText(e.target.value);
  };

  return (
    <RowContainer>
      <ColContainer>
        <StyledText>소속학과</StyledText>
        <StyledTextField
          size="small"
          sx={{ marginBottom: "18px" }}
          name="department"
          value={departmentSearchText}
          onChange={handleChangeDepartmentSearchText}
        />
        <Divider />
        <DepartmentListContainer>
          {departmentList.map((departmentItem, index) => (
            <DepartmentItem onClick={() => handleClickDepartmentItem(departmentItem)} key={index}>
              {departmentItem.name}
            </DepartmentItem>
          ))}
        </DepartmentListContainer>
      </ColContainer>
      <ColContainer>
        <StyledText>이메일</StyledText>
        <StyledTextField
          size="small"
          name="email"
          value={email}
          onChange={handleChangeMemberInfo}
          error={memberInfoValidation.email.isError(email)}
          helperText={memberInfoValidation.email.helperText(email)}
        />
      </ColContainer>
    </RowContainer>
  );
}

const RowContainer = styled.div({
  display: "flex",
  gap: "19px",
  marginBottom: "40px",
});

const ColContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  alignItems: "flex-start",
  height: "140px",
});

const Divider = styled.div({
  width: "100%",
  marginBottom: "8px",
  border: `1px solid ${theme.palette.gray6}`,
});

const DepartmentListContainer = styled.div({
  display: "flex",
  overflowX: "auto",
  overflowY: "hidden",
  flex: 1,
  width: "100%",
  gap: "5px",
  padding: "8px 0px",
});

const DepartmentItem = styled.div({
  border: "1px solid black",
  cursor: "pointer",
  minWidth: "fit-content",
  display: "flex",
  alignItems: "center",
  padding: "2.5px 5px",
});

const StyledText = styled(Box)({
  marginBottom: "12px",
});

const StyledTextField = styled(TextField)({ width: "100%" });
