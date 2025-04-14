import { useAppSelector } from "../../../shared/store/store";

export const UseGetFilteredUsers = () => {
  const users = useAppSelector((state) => state.users.users);
  const filters = useAppSelector((store) => store.users.filters);
  const searchQuery = useAppSelector((store) => store.users.searchQuery);

  const filteredUsers = users.filter((u) => {
    let filterPassed = true;
    let keys = Object.keys(filters);
    for (let key of keys) {
      console.log(key);
      let val = u[key as keyof typeof u];
      if (key === "city") {
        val = u.address.city;
      } else if (key === "company") {
        val = u.company.name;
      }
      if (val != filters[key]) {
        filterPassed = false;
        break;
      }
    }
    if (searchQuery && !u.name.includes(searchQuery)) {
      filterPassed = false;
    }
    return filterPassed;
  });
  return filteredUsers;
};
