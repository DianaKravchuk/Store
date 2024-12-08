import Button from "@/Ui/Button/Button";
import { FC } from "react";

export interface PaginationArrowProps {
  direction: "prev" | "next";
  isDisabled: boolean;
  onClick: () => void;
  aria: string;
}

const PaginationArrow: FC<PaginationArrowProps> = ({
  direction,
  isDisabled,
  onClick,
  aria,
}) => {
  const isPrev = direction === "prev";
  return (
    <li className={isPrev ? "mr-6" : "ml-6"}>
      <Button
        size="pagination"
        variant="pagination"
        disabled={isDisabled}
        text={isPrev ? "<" : ">"}
        aria-label={aria}
        onClick={onClick}
      />
    </li>
  );
};

export default PaginationArrow;
