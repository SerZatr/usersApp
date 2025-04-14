import style from "./search.module.scss";

export const Search = (
  props: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) => {
  return (
    <input
      type="text"
      className={style.search}
      placeholder="Поиск..."
      {...props}
    />
  );
};
