export const phone = (value: string) => {
  if (value.length === 0 || value.length === 14 || value.length === 15) {
    return true;
  }

  return false;
};
