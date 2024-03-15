import { ChangeEvent, useState } from "react";
import styled from "@emotion/styled";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Stack,
  SelectChangeEvent,
} from "@mui/material";
import { commonMemberTableTitle, pendingMemberTableTitle } from "@/constants/table";
import useGetSearchTextSetters from "@/hooks/useGetSearchTextSetters";
import useGetSearchVariantSetters from "@/hooks/useGetSearchVariantSetters";
import { ManagementVariant } from "@/types/entities/member";
import { MemberTableTitleType } from "@/types/entities/table";
import { setSearchInfo } from "@/utils/setSearchInfoFunction";

const FormContainer = styled(FormControl)({
  width: "180px",
});

type HeaderLeftColProps = {
  variant: ManagementVariant;
};

const HeaderLeftElement = (variant: ManagementVariant) => {
  const [selectedValue, setSelectedValue] = useState("");

  const searchVariantSetters = useGetSearchVariantSetters();

  const handleChangeMemberSelect = (e: SelectChangeEvent<unknown>) => {
    const targetIndex = (e.target.value as number) - 1;
    const setSearchVariant = searchVariantSetters[variant];

    setSearchInfo[variant](setSelectedValue, setSearchVariant, targetIndex);
  };

  const renderFormElement = (memberTableTitle: MemberTableTitleType) => (
    <FormContainer>
      <InputLabel>Type</InputLabel>
      <Select value={selectedValue} onChange={handleChangeMemberSelect}>
        {memberTableTitle.map(title => (
          <MenuItem value={title.value} key={title.value}>
            {title.name}
          </MenuItem>
        ))}
      </Select>
    </FormContainer>
  );

  return {
    allMember: renderFormElement(commonMemberTableTitle),
    pendingMember: renderFormElement(pendingMemberTableTitle.slice(0, 5)),
    grantableMember: renderFormElement(commonMemberTableTitle),
    grantedMember: renderFormElement(commonMemberTableTitle),
    paymentStatus: renderFormElement(pendingMemberTableTitle.slice(0, 5)),
  };
};

export default function HeaderLeftCol({ variant }: HeaderLeftColProps) {
  const setSearchTextFunctions = useGetSearchTextSetters();

  const handleChangeText = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const setSearchText = setSearchTextFunctions[variant];

    setSearchText?.(e.target.value);
  };

  return (
    <Container>
      {HeaderLeftElement(variant)[variant]}
      <TextField
        label="search"
        variant="outlined"
        placeholder="name, email, etc.."
        sx={{ width: 200 }}
        onChange={handleChangeText}
      />
    </Container>
  );
}

const Container = styled(Stack)({
  gap: 10,
  flexDirection: "row",
  alignItems: "center",
  flexWrap: "wrap",
});
