export const formatDate = (date: Date | string) => {
  if (typeof date === "string") {
    date = new Date(date);
  }

  const year = String(date.getFullYear());
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}`;
};

export const formatDateWithText = (date: Date | string) => {
  if (typeof date === "string") {
    date = new Date(date);
  }

  const year = String(date.getFullYear());
  const month = String(date.getMonth() + 1);
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${year}년 ${month}월 ${day}일 ${hours}시 ${minutes}분`;
};

export const formatDateWithDot = (date: Date | string) => {
  if (typeof date === "string") {
    date = new Date(date);
  }

  const year = String(date.getFullYear());
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}.${month}.${day}`;
};

export const formatDateWithDash = (date: Date | string) => {
  if (typeof date === "string") {
    date = new Date(date);
  }

  const year = String(date.getFullYear());
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

export const toKSTISOString = (date: Date) => {
  const offset = date.getTimezoneOffset() * 60000;
  const adjustedDate = new Date(date.getTime() - offset);
  return adjustedDate.toISOString().split(".")[0];
};
