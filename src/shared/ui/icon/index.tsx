import style from "./icon.module.scss";

interface IProps {
  children: React.JSX.Element | string;
  onClick: () => void;
  title?: string;
}
export const Icon = ({ children, ...other }: IProps) => {
  return (
    <div {...other} className={style.icon}>
      {children}
    </div>
  );
};
