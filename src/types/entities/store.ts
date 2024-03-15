type AllMembersSearchVariantType = [
  "studentId",
  "name",
  "phone",
  "department",
  "email",
  "discordUsername",
  "nickname",
];

export type SearchVariantType = AllMembersSearchVariantType[number] | null;

export type SearchInfoType = {
  text: string;
  variant: SearchVariantType;
};
