export const formatPhoneNumber = (phoneNumber: string) => {
  return phoneNumber.replace(/-/g, '')
}