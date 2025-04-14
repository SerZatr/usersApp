import { setFilterDisplay } from "../../../shared/store/modalsSlice";
import { useAppDispatch } from "../../../shared/store/store";
import { Icon } from "../../../shared/ui/icon";

export const FilterButton = () => {
  const dispatch = useAppDispatch();
  const openFilter = () => {
    dispatch(setFilterDisplay(true));
  };
  return (
    <Icon
      onClick={() => {
        openFilter();
      }}
      title="Обновить данные"
    >
      ∀
    </Icon>
  );
};
