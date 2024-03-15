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
import { useStore } from "zustand";
import {
  commonMemberTableTitle,
  paymentStatusTableTitle,
  pendingMemberTableTitle,
} from "@/constants/table";
import useGetSearchTextSetters from "@/hooks/useGetSearchTextFunction";
import { allMembersStore } from "@/store/allMembers";
import { grantableMembersStore } from "@/store/grantableMembers";
import { grantedMembersStore } from "@/store/grantedMembers";
import { paymentStatusMembersStore } from "@/store/paymentStatusMembers";
import { pendingMembersStore } from "@/store/pendingMembers";
import { ManagementVariant } from "@/types/entities/member";
import { SearchVariantType } from "@/types/entities/store";
import { MemberTableTitleType } from "@/types/entities/table";

const FormContainer = styled(FormControl)({
  width: "180px",
});

type HeaderLeftColProps = {
  variant: ManagementVariant;
};

const HeaderLeftElement = (variant: ManagementVariant) => {
  const [selectedValue, setSelectedValue] = useState("");

  const { setSearchVariant: setAllMemberSearchVariant } = useStore(allMembersStore);
  const { setSearchVariant: setGrantedMemberSearchVariant } = useStore(grantedMembersStore);
  const { setSearchVariant: setGrantableMemberSearchVariant } = useStore(grantableMembersStore);
  const { setSearchVariant: setPendingMemberSearchVariant } = useStore(pendingMembersStore);
  const { setSearchVariant: setPaymentMemberSearchVariant } = useStore(paymentStatusMembersStore);

  const handleChangeMemberSelect = (e: SelectChangeEvent<unknown>) => {
    const targetIndex = (e.target.value as number) - 1;

    if (variant === "allMember") {
      setSelectedValue(commonMemberTableTitle[targetIndex]["value"]);
      setAllMemberSearchVariant?.(
        commonMemberTableTitle[targetIndex]["type"] as SearchVariantType<"allMember">,
      );
    } else if (variant === "pendingMember") {
      setSelectedValue(pendingMemberTableTitle[targetIndex]["value"]);
      setPendingMemberSearchVariant?.(
        pendingMemberTableTitle.slice(0, 5)[targetIndex][
          "type"
        ] as SearchVariantType<"pendingMember">,
      );
    } else if (variant === "paymentStatus") {
      setSelectedValue(paymentStatusTableTitle[targetIndex]["value"]);
      setPaymentMemberSearchVariant?.(
        paymentStatusTableTitle.slice(0, 5)[targetIndex][
          "type"
        ] as SearchVariantType<"paymentStatus">,
      );
    } else if (variant === "grantableMember") {
      setSelectedValue(commonMemberTableTitle[targetIndex]["value"]);
      setGrantableMemberSearchVariant?.(
        commonMemberTableTitle[targetIndex]["type"] as SearchVariantType<"grantableMember">,
      );
    } else {
      setSelectedValue(commonMemberTableTitle[targetIndex]["value"]);
      setGrantedMemberSearchVariant?.(
        commonMemberTableTitle[targetIndex]["type"] as SearchVariantType<"grantedMember">,
      );
    }
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
