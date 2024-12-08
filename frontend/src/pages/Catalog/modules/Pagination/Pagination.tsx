import Button from "@/Ui/Button/Button";
import { FC, useMemo } from "react";
import PaginationArrow from "./components/PaginationArrow";

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
}
const Pagination: FC<PaginationProps> = ({ currentPage, totalPages }) => {
  const handleShowMore = () => console.log("Show more");
  const handlePageClick = (page: number) => {
    console.log("change page", page);
  };

  const pageArray = useMemo(
    () => Array.from({ length: totalPages }, (_, index) => index + 1),
    [totalPages],
  );
  return (
    <div className="flex flex-col self-center gap-6 w-[296px] pt-[3px]">
      <Button
        text="Show more"
        size="full"
        variant="filled"
        onClick={handleShowMore}
      />
      <ul className="flex justify-between items-center px-4">
        <PaginationArrow
          direction="prev"
          isDisabled={currentPage === 0}
          onClick={() => handlePageClick(currentPage)}
          aria="prev page"
        />
        {pageArray.map((page) => (
          <Button
            key={page}
            text={`${page}`}
            variant={currentPage === page ? "pagination" : "pagination-active"}
            size="pagination"
            onClick={() => handlePageClick(page)}
          />
        ))}
        <PaginationArrow
          direction="next"
          isDisabled={currentPage + 1 === totalPages}
          onClick={() => handlePageClick(currentPage + 2)}
          aria="next page"
        />
      </ul>
    </div>
  );
};

export default Pagination;
