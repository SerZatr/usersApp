import { NavLink } from "react-router-dom";
import { Card } from "../../../shared/ui/card";
import { CardsList } from "../../../shared/ui/cardsList";
import style from "./userCards.module.scss";
import { NoData } from "../../../shared/ui/noData";
import { UseGetFilteredUsers } from "./UseGetFilteredUsers";

export const UserCards = () => {
  const filteredUsers = UseGetFilteredUsers();

  return (
    <section className={style.userCards}>
      {Object.keys(filteredUsers).length ? (
        <CardsList>
          {filteredUsers.map((user) => (
            <NavLink to={`user/?id=${user.id}`} key={String(user.id)}>
              <Card>
                <span>{user.name}</span>
              </Card>
            </NavLink>
          ))}
        </CardsList>
      ) : (
        <NoData />
      )}
    </section>
  );
};
