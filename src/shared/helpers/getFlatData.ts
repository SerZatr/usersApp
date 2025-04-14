/**
 *
 * @param obj Объект со значениями object \ string \ number
 * @returns Плоский объект со хначениями string \ number
 */

export const getFlatData = (obj: Object) => {
  const flatObj: { [key: string]: any } = {};
  const getAttributes = (_obj: Object, prevNames?: string) => {
    Object.keys(_obj).forEach((key) => {
      const currentValue = _obj[key as keyof Object];
      const newLabel = prevNames ? `${prevNames}.${key}` : key;
      if (currentValue && typeof currentValue === "object") {
        getAttributes(currentValue, newLabel);
      } else if (currentValue) {
        flatObj[newLabel] = currentValue;
      }
    });
  };
  getAttributes(obj);
  return flatObj;
};
