import { Search } from "../../../shared/ui/search";
import { useAppDispatch, useAppSelector } from "../../../shared/store/store";
import { setFilter } from "../../../shared/store/userSlice";

export const CompanyInput = () => {
  const dispatch = useAppDispatch();
  const onChange = (name: string, value?: string) => {
    dispatch(setFilter({ name, value }));
  };
  const companyValue = useAppSelector(
    (state) => state.users.filters["company"]
  );

  return (
    <Search
      onChange={(e) => onChange("company", e.target.value)}
      placeholder="Компания"
      value={companyValue}
    ></Search>
  );
};
