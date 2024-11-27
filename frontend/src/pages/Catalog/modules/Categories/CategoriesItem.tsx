import Button from "@/Ui/Button/Button";
import { useState, type FC } from "react";
import { type CategoriesItemProps } from "./types";

const CategoriesItem: FC<CategoriesItemProps> = ({
  name,
  isActive = false,
}) => {
  const [isActiveButton, setIsActiveButton] = useState(isActive);

  const toggleActiveButton = () => setIsActiveButton(!isActiveButton);

  return (
    <li className="w-fit">
      <Button
        size="small"
        variant="text"
        text={name}
        isActive={isActiveButton}
        textPosition="start"
        onClick={toggleActiveButton}
      />
    </li>
  );
};

export default CategoriesItem;
