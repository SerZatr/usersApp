import * as React from "react";
import style from "./card.module.scss";

interface IProps {
  children?: React.JSX.Element;
}

export const Card = ({ children }: IProps) => {
  return <div className={style.card}>{children}</div>;
};
