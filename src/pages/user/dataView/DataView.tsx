import { getFlatData } from "../../../shared/helpers/getFlatData";
import style from "./dataView.module.scss";

type TData = { [key: string]: string };

interface IProps {
  data: TData;
}

const DataView = ({ data }: IProps) => {
  const flatData = getFlatData(data);

  return (
    <div className={style.dataView}>
      {Object.keys(flatData ?? {}).map((key) => {
        const currentAttribute = flatData[key];
        return (
          <div className={style.propWrapper} key={key}>
            <span className={style.propName}>{`${key}: `}</span>
            <span className={style.propValue}>{currentAttribute}</span>
          </div>
        );
      })}
    </div>
  );
};

export default DataView;
