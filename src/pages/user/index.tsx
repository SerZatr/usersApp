import React from "react";
import { Loader } from "../../shared/ui/loader";
import { NavLink } from "react-router-dom";
import DataView from "./dataView/DataView";
import style from "./user.module.scss";
import { UseGetUserData } from "./UseGetUserData";
import { Title } from "../../shared/ui/title";

const User = () => {
  const userData = UseGetUserData();

  if (!userData) {
    return <Loader />;
  }

  const { id: _id, name, ...dataToRender } = userData;

  return (
    <React.Suspense fallback={<Loader />}>
      <main className={style.userScreen}>
        <div className={style.userCardContent}>
          <Title>{name}</Title>
          <DataView data={dataToRender} />
          <NavLink to={"/"}>
            <button>Вернуться</button>
          </NavLink>
        </div>
      </main>
    </React.Suspense>
  );
};

export default User;
