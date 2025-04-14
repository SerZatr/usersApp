import { Overlay } from "../../../shared/ui/overlay";
import style from "./filter.module.scss";
import { useAppDispatch, useAppSelector } from "../../../shared/store/store";
import { Title } from "../../../shared/ui/title";
import { setFilterDisplay } from "../../../shared/store/modalsSlice";
import { CityInput } from "./cityInput";
import { CompanyInput } from "./companyInput";

export const Filter = () => {
  const dispatch = useAppDispatch();
  const closeFilter = () => {
    dispatch(setFilterDisplay(false));
  };
  const filterDisplay = useAppSelector((store) => store.modals.filtersModal);

  return (
    <>
      {filterDisplay && (
        <Overlay>
          <section className={style.filter}>
            <Title>Фильтры</Title>
            <CityInput />
            <CompanyInput />
            <button onClick={closeFilter}>Применить</button>
          </section>
        </Overlay>
      )}
    </>
  );
};
