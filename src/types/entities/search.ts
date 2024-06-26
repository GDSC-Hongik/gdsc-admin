type MembersSearchVariantType = [
  "studentId",
  "name",
  "phone",
  "department",
  "email",
  "discordUsername",
  "nickname",
];

export type SearchVariantType = MembersSearchVariantType[number] | null;

export type SearchInfoType = {
  text: string;
  variant: SearchVariantType;
};

export type MemberVariantType = "ASSOCIATE" | "GUEST";

export type PaginationModelType = {
  pageSize: number;
  page: number;
};
