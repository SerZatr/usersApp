import * as React from "react";
import style from "./cardsList.module.scss";

interface IProps {
  children: React.JSX.Element[];
}

export const CardsList = ({ children }: IProps) => {
  return <div className={style.cardsList}>{children}</div>;
};
