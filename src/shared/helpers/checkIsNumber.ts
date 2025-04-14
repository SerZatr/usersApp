export const checkIsNumber = (str: string | null | undefined) => {
  if (str && !isNaN(+str)) {
    return true;
  } else {
    return false;
  }
};
