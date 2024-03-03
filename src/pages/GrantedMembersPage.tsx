import { useState } from "react";
import Header from "@/components/common/Header";
import Title from "@/components/common/Title";

export default function GrantedMembersPage() {
    const [grantedMemberSearchType, setGrantedMemberSearchType] = useState("");
    const [grantedMemberSearchText, setGrantedMemberSearchText] = useState("");

  return (
    <>
      <Title variant={"grantedMember"} descriptionText={"승인된 멤버 정보를 관리합니다."} />
      <Header
        variant={"grantedMember"}
        setGrantedMemberSearchType={setGrantedMemberSearchType}
        setGrantedMemberSearchText={setGrantedMemberSearchText}
      />
    </>
  )
}