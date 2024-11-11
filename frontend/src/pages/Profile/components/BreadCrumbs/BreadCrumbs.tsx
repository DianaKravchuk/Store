import { FC } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { BreadCrumbsProps } from "./types";

const BreadCrumbs: FC<BreadCrumbsProps> = ({ crumbs }) => {
  return (
    <ul className="flex ">
      {crumbs &&
        crumbs.map(({ link, name }, index) => (
          <li
            key={link}
            className="py-[2px] px-[5px] md:px-3 flex items-center"
          >
            {index !== crumbs.length - 1 ? (
              <Link to={link} className="flex items-center gap-3">
                <span className="font-family text-xs font-extralight tracking-wider text-grey-001">
                  {name}
                </span>
                <MdOutlineKeyboardArrowRight size={24} color="#989899" />
              </Link>
            ) : (
              <span className="font-family text-xs font-extralight tracking-wider text-black-000">
                {name}
              </span>
            )}
          </li>
        ))}
    </ul>
  );
};

export default BreadCrumbs;
