import React from "react";
import style from "./overlay.module.scss";

interface IProps {
  children: React.JSX.Element;
}

export const Overlay = ({ children }: IProps) => {
  return <div className={style.overlay}>{children}</div>;
};
