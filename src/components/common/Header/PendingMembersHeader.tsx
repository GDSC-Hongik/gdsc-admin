import { useState, ChangeEvent } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  styled,
  TextField,
} from "@mui/material";
import { memberInfoSelectMenu, memberTypeSelectMenu } from "@/constants/member";
import {
  usePendingMembersDispatchContext,
  usePendingMembersStateContext,
} from "@/hooks/contexts/usePendingMembersContext";

export default function PendingMembersHeader() {
  const [selectedSearchInfoVariant, setSelectedSearchInfoVariant] = useState<number>(1);
  const [selectedMemberVariant, setSelectedMemberVariant] = useState<number>(1);

  const { setSearchInfo, setPaginationModel, setMemberVariant } =
    usePendingMembersDispatchContext();
  const {
    searchInfo: { text: searchText },
  } = usePendingMembersStateContext();

  const handleResetPage = () => {
    setPaginationModel(prevPaginationModel => ({
      ...prevPaginationModel,
      page: 0,
    }));
  };

  const handleChangeSelectSearchInfoVariant = (e: SelectChangeEvent<unknown>) => {
    const targetIndex = (e.target.value as number) - 1;

    setSearchInfo(prevSearchInfo => ({
      ...prevSearchInfo,
      variant: memberInfoSelectMenu[targetIndex]["type"],
      text: "",
    }));
    setSelectedSearchInfoVariant(targetIndex + 1);
    handleResetPage();
  };

  const handleChangeSelectMemberVariant = (e: SelectChangeEvent<unknown>) => {
    const targetIndex = (e.target.value as number) - 1;

    setMemberVariant?.(memberTypeSelectMenu[targetIndex]["type"]);
    setSelectedMemberVariant(targetIndex + 1);
    handleResetPage();
  };

  const handleChangeText = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const text = e.target.value;
    text.length === 1 && handleResetPage();

    setSearchInfo(prevSearchInfo => ({
      ...prevSearchInfo,
      text,
    }));
  };

  return (
    <StyledHeaderWrapper>
      <StyledHeaderLeftColWrapper>
        <StyledFormWrapper>
          <InputLabel>Type</InputLabel>
          <Select
            label="Type"
            value={selectedSearchInfoVariant}
            onChange={handleChangeSelectSearchInfoVariant}
          >
            {memberInfoSelectMenu.map(title => (
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
          value={searchText}
          onChange={handleChangeText}
        />
      </StyledHeaderLeftColWrapper>
      <StyledHeaderRightColWrapper>
        <StyledFormWrapper>
          <InputLabel>Type</InputLabel>
          <Select
            label="Type"
            value={selectedMemberVariant}
            onChange={handleChangeSelectMemberVariant}
          >
            {memberTypeSelectMenu.map(title => (
              <MenuItem value={title.value} key={title.value}>
                {title.name}
              </MenuItem>
            ))}
          </Select>
        </StyledFormWrapper>
      </StyledHeaderRightColWrapper>
    </StyledHeaderWrapper>
  );
}

const StyledHeaderWrapper = styled("header")({
  gap: 20,
  display: "flex",
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
  width: "fit-content",
});

const StyledHeaderRightColWrapper = styled(Stack)({
  justifyContent: "space-between",
});

const StyledFormWrapper = styled(FormControl)({
  width: "180px",
});

const StyledTextField = styled(TextField)({
  width: 200,
});
