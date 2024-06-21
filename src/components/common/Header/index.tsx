import { useState, useContext, ChangeEvent } from "react";
import { toast } from "react-toastify";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { ManagementVariant } from "@/types/entities/member";
import { allMemberApi } from "@/apis/allMemberApi";
import { SelectedMemberListContext } from "@/components/context/SelectedMemberContextProvider";
import { commonMemberTableTitle, pendingMemberTableTitle } from "@/constants/table";
import useGetSearchTextSetters from "@/hooks/useGetSearchTextSetters";
import useGetSearchVariantSetters from "@/hooks/useGetSearchVariantSetters";
import { downloadExcelFile } from "@/utils/excel";
import { setSearchInfo } from "@/utils/setSearchInfoFunction";
import AcceptMemberListModal from "../Modal/AcceptMemberListModal";

export type HeaderProps = {
  variant: ManagementVariant;
};

export default function Header({ variant }: HeaderProps) {
  const [selectedValue, setSelectedValue] = useState("");
  const [isAcceptModalVisible, setIsAcceptModalVisible] = useState(false);

  const selectedMemberList = useContext(SelectedMemberListContext);

  const handleClickExcelDownloadButton = async () => {
    try {
      const data = await allMemberApi.getMemberInfoExcel();
      downloadExcelFile(data, "members");
    } catch (error) {
      toast.error("오류가 발생했습니다.");
    }
  };

  const handleClickAcceptMemberButton = () => setIsAcceptModalVisible(true);

  const setSearchTextFunctions = useGetSearchTextSetters();
  const searchVariantSetters = useGetSearchVariantSetters();

  const handleChangeMemberSelect = (e: SelectChangeEvent<unknown>) => {
    const targetIndex = (e.target.value as number) - 1;
    const setSearchVariant = searchVariantSetters[variant];

    setSearchInfo[variant](setSelectedValue, setSearchVariant, targetIndex);
  };

  const handleChangeText = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const setSearchText = setSearchTextFunctions[variant];

    setSearchText?.(e.target.value);
  };

  const getSelectMenuList = (variant: ManagementVariant) => {
    if (variant === "allMember" || variant === "grantableMember" || variant === "grantedMember") {
      return commonMemberTableTitle;
    } else {
      return pendingMemberTableTitle.slice(0, 5);
    }
  };

  return (
    <StyledHeaderWrapper>
      <StyledHeaderLeftColWrapper>
        <StyledFormWrapper>
          <InputLabel>Type</InputLabel>
          <Select label="Type" value={selectedValue} onChange={handleChangeMemberSelect}>
            {getSelectMenuList(variant).map(title => (
              <MenuItem value={title.value} key={title.value}>
                {title.name}
              </MenuItem>
            ))}
          </Select>
        </StyledFormWrapper>
        <StyledTextField
          label="search"
          variant="outlined"
          placeholder="name, email, etc.."
          onChange={handleChangeText}
        />
      </StyledHeaderLeftColWrapper>
      {variant === "allMember" && (
        <RightColContainer>
          <Button
            variant="outlined"
            onClick={handleClickExcelDownloadButton}
            sx={{ marginRight: "20px" }}
          >
            엑셀 다운로드
          </Button>
        </RightColContainer>
      )}
      {(variant === "pendingMember" || variant === "grantableMember") && (
        <RightColContainer>
          <SelectedMemberCountText>{selectedMemberList.length}명 선택</SelectedMemberCountText>
          <StyledButton variant="outlined" onClick={handleClickAcceptMemberButton}>
            승인
          </StyledButton>
        </RightColContainer>
      )}
      <AcceptMemberListModal
        isAcceptModalVisible={isAcceptModalVisible}
        setIsAcceptModalVisible={setIsAcceptModalVisible}
      />
    </StyledHeaderWrapper>
  );
}

const StyledHeaderWrapper = styled(Stack)({
  gap: 20,
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  padding: "16px",
});

const StyledHeaderLeftColWrapper = styled(Stack)({
  gap: 10,
  flexDirection: "row",
  alignItems: "center",
  flexWrap: "wrap",
});

const StyledFormWrapper = styled(FormControl)({
  width: "180px",
});

const StyledTextField = styled(TextField)({
  width: 200,
});

const RightColContainer = styled(Stack)({
  gap: "10px",
  flexDirection: "row",
  alignItems: "center",
  flexWrap: "wrap",
});

const SelectedMemberCountText = styled(Typography)({
  marginRight: "20px",
});

const StyledButton = styled(Button)({
  marginRight: 15,
});
