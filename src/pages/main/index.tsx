import * as React from "react";
import { Loader } from "../../shared/ui/loader";
import style from "./main.module.scss";
import { Filter } from "./filter";
import { Header } from "./header";
import { UserCards } from "./userCards";

const Main = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      {<Filter />}
      <main className={style.main}>
        <Header />
        <UserCards />
      </main>
    </React.Suspense>
  );
};

export default Main;
