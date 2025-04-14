import { Search } from "../../../shared/ui/search";
import { useAppDispatch, useAppSelector } from "../../../shared/store/store";
import { setFilter } from "../../../shared/store/userSlice";

export const CityInput = () => {
  const dispatch = useAppDispatch();
  const onChange = (name: string, value?: string) => {
    dispatch(setFilter({ name, value }));
  };
  const companyValue = useAppSelector((state) => state.users.filters["city"]);

  return (
    <Search
      onChange={(e) => onChange("city", e.target.value)}
      placeholder="Город"
      value={companyValue}
    ></Search>
  );
};
