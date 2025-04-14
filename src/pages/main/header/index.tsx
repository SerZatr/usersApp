import { FilterButton } from "./filterButton";
import style from "./header.module.scss";
import { RefreshButton } from "./refreshButton";
import { SearchUser } from "./searchUser";

export const Header = () => {
  return (
    <header className={style.header}>
      <SearchUser />
      <FilterButton />
      <RefreshButton />
    </header>
  );
};
