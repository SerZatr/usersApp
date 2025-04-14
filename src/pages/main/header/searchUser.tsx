import { useAppDispatch, useAppSelector } from "../../../shared/store/store";
import { setSearchQuery } from "../../../shared/store/userSlice";
import { Search } from "../../../shared/ui/search";

export const SearchUser = () => {
  const dispatch = useAppDispatch();
  const storeValue = useAppSelector((state) => state.users.searchQuery);

  const onChange = (val?: string) => {
    dispatch(setSearchQuery(val));
  };

  return (
    <Search
      onChange={(e) => {
        onChange(e.target.value);
      }}
      value={storeValue}
    />
  );
};
