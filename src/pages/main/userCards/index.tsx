import { NavLink } from "react-router-dom";
import { Card } from "../../../shared/ui/card";
import { CardsList } from "../../../shared/ui/cardsList";
import style from "./userCards.module.scss";
import { NoData } from "../../../shared/ui/noData";
import { UseGetFilteredUsers } from "./UseGetFilteredUsers";
import { useAppSelector } from "../../../shared/store/store";
import { Loader } from "../../../shared/ui/loader";

export const UserCards = () => {
  const filteredUsers = UseGetFilteredUsers();
  const areUsersLoaded = useAppSelector((store) => store.users.areUsersLoaded);

  if (!areUsersLoaded) {
    return <Loader />;
  }

  if (!Object.keys(filteredUsers ?? {}).length) {
    return <NoData />;
  }

  return (
    <section className={style.userCards}>
      <CardsList>
        {filteredUsers.map((user) => (
          <NavLink to={`user/?id=${user.id}`} key={String(user.id)}>
            <Card>
              <span>{user.name}</span>
            </Card>
          </NavLink>
        ))}
      </CardsList>
    </section>
  );
};
