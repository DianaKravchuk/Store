import classNames from "classnames";
import ReactSlider from "react-slider";

import { type FC, useState } from "react";
import { type FilterPriceProps } from "./types";

const FilterPrice: FC<FilterPriceProps> = ({ price = [20, 25000] }) => {
  const [value, setValue] = useState<number[]>(price);
  const [isError, setIsError] = useState(false);

  const handlerLowerBound = (lower: React.ChangeEvent<HTMLInputElement>) => {
    const lowerValue = Number(lower.target.value);
    lowerValue > value[1] ? setIsError(true) : setIsError(false);
    setValue([lowerValue, value[1]]);
  };

  const handlerUpperBound = (upper: React.ChangeEvent<HTMLInputElement>) => {
    const upperValue = Number(upper.target.value);
    value[0] > upperValue ? setIsError(true) : setIsError(false);
    setValue([value[0], upperValue]);
  };

  const inputClassNames = classNames(
    "input-with-icon  w-full max-w-[58px] text-xl relative border-2 border-transparent",
    {
      ["text-red-500 border-2 border-red-500 border-solid rounded-sm"]: isError,
    },
  );
  return (
    <div className="pt-7">
      <ReactSlider
        value={value[1] >= value[0] ? value : undefined}
        max={25000}
        min={0}
        minDistance={0}
        onChange={(value) => {
          setValue(value);
          setIsError(false);
        }}
        className={"relative h-[5px] w-full max-w-[390px] bg-black-000"}
        thumbClassName={
          "cursor-pointer absolute -top-1 size-3 bg-black-000 rounded-full"
        }
        trackClassName="track"
      />
      <div className={"flex items-center justify-between pt-[11px]"}>
        <label className="text-xl">
          <input
            className={inputClassNames}
            type="text"
            value={value[0]}
            onChange={handlerLowerBound}
            maxLength={5}
          />
          $
        </label>
        <label className="text-xl">
          <input
            className={inputClassNames}
            type="text"
            value={value[1]}
            onChange={handlerUpperBound}
            maxLength={5}
          />
          $
        </label>
      </div>
    </div>
  );
};

export default FilterPrice;
