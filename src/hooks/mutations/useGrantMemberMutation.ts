import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { pendingMemberApi } from "@/apis/pendingMemberApi";

import { formatNullableValue } from "@/utils/validation/formatNullableValue";

export default function useGrantMemberMutation() {
  return useMutation({
    mutationFn: pendingMemberApi.grantPendingMember,
    onSuccess: data => {
      data.grantedMembers?.map(member => {
        toast.success(`${formatNullableValue(member)}님의 승인이 완료되었습니다.`);
      });
      data.notGrantedMembers?.map(member => {
        toast.error(`${formatNullableValue(member)}님의 승인이 실패하였습니다.`);
      });
    },
    onError: (error: any) => {
      toast.error(error.response.data.errorMessage);
    },
  });
}
