import React from "react";
import style from "./title.module.scss";

interface IProps {
  children: React.JSX.Element | string;
}
export const Title = ({ children }: IProps) => {
  return <span className={style.title}>{children}</span>;
};
