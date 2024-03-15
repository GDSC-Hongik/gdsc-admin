type CommonMembersSearchVariantType = [
  "studentId",
  "name",
  "phone",
  "department",
  "email",
  "discordUsername",
  "nickname",
];

export type SearchVariantType = CommonMembersSearchVariantType[number] | null;

export type SearchInfoType = {
  text: string;
  variant: SearchVariantType;
};
