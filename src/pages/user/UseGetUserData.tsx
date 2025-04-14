import { useSearchParams } from "react-router-dom";
import { checkIsNumber } from "../../shared/helpers/checkIsNumber";
import { selectUserById } from "../../shared/store/userSlice/selectors";
import { useParamSelector } from "../../shared/store/store";

export const UseGetUserData = () => {
  const [searchParams] = useSearchParams();
  const urlId = searchParams.get("id");
  const isValidId = checkIsNumber(urlId);
  const id = isValidId ? +(urlId as string) : 0;
  const userData = useParamSelector(selectUserById, { id });
  urlId;
  return urlId ? userData : null;
};
