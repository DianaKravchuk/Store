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

const optionClName = (focused: boolean) => {
  return classNames("", {
    ["bg-grey-000 cursor-pointer"]: focused,
  });
};

const Select = ({
  value,
  options,
  onChange,
  helperText,
  ...props
}: SelectProps) => {
  const selectValue = value ? { value, label: value } : undefined;

  const selectOptions = options.map((option) => ({
    value: option,
    label: option,
  }));

  const containerClName = classNames(
    "px-[10px] py-[9.2px] border border-black rounded-3xl",
  );
  return (
    <div className="w-full relative">
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
          control: () => "flex !min-h-0",
          placeholder: () => "font-inter text-base text-black font-extralight",
          menu: () => "bg-white relative left-0 top-0 w-full",
          menuList: () => "flex flex-col gap-2 p-[10px] border rounded-lg",
          option: (state) => optionClName(state.isFocused),
        }}
        {...props}
      />
      {helperText && <p className="">{helperText}</p>}
    </div>
  );
};

export default Select;
