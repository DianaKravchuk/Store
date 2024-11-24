import classNames from "classnames";
import { DropdownIndicatorProps, default as ReactSelect } from "react-select";

import { type SelectProps, Option } from "./types";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const DropdownIndicator = (props: DropdownIndicatorProps<Option>) => {
  const clName = classNames(
    "rotate-90 transition-all duration-300 ease-linear",
    {
      ["!-rotate-90"]: props.selectProps.menuIsOpen,
    },
  );
  return (
    <div className={clName}>
      <MdOutlineKeyboardArrowRight size={24} color="#000" />
    </div>
  );
};

const optionClName = (focused: boolean, variant: "sort" | "language") => {
  return classNames("", {
    ["bg-grey-000 cursor-pointer"]: focused && variant === "language",
    ["px-6 py-[10px]"]: variant === "sort",
    ["px-6 py-[10px] !cursor-pointer"]: variant === "sort" && focused,
  });
};

const Select = ({
  value,
  options,
  onChange,
  helperText,
  variant,
  ...props
}: SelectProps) => {
  const selectValue = value ? { value, label: value } : undefined;

  const selectOptions = options.map((option) => ({
    value: option,
    label: option,
  }));

  const containerClName = classNames("", {
    ["px-[10px] py-[9.2px] border border-black rounded-3xl"]:
      variant === "language",
    [""]: variant === "sort",
  });
  const menuCN = classNames("", {
    ["bg-white relative left-0 top-0 w-full"]: variant === "language",
    [""]: variant === "sort",
  });
  const controlCN = classNames("", {
    ["flex !min-h-0"]: variant === "language",
    ["!cursor-pointer w-fit flex gap-3 text-black-000 text-xs"]:
      variant === "sort",
  });
  const placeholderCN = classNames("", {
    ["font-inter text-base text-black font-extralight"]: variant === "language",
    [""]: variant === "sort",
  });
  const menuListCN = classNames("", {
    ["flex flex-col gap-2 p-[10px] border rounded-lg"]: variant === "language",
    ["flex flex-col rounded-3xl bg-white"]: variant === "sort",
  });
  return (
    <div className="w-full relative z-20">
      <ReactSelect
        isSearchable={false}
        unstyled
        value={selectValue}
        options={selectOptions}
        onChange={(newValue) => newValue && onChange(newValue.value)}
        controlShouldRenderValue
        blurInputOnSelect
        components={{ IndicatorSeparator: null, DropdownIndicator }}
        classNames={{
          container: () => containerClName,
          control: () => controlCN,
          placeholder: () => placeholderCN,
          menu: () => menuCN,
          menuList: () => menuListCN,
          option: (state) => optionClName(state.isFocused, variant),
        }}
        {...props}
      />
      {helperText && <p className="">{helperText}</p>}
    </div>
  );
};

export default Select;
