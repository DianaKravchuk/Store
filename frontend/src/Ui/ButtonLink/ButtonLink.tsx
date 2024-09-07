import type { FC } from "react";
import { NavLink } from "react-router-dom";

import { ButtonLinkProps } from "./ButtonLink.types";
import Button from "../Button/Button";
import classNames from "classnames";

export const ButtonLink: FC<ButtonLinkProps> = ({ url, ...buttonProps }) => {
  return (
    <NavLink
      to={url}
      className={({ isActive }) =>
        classNames("h-fit", {
          ["bg-white block rounded-3xl"]: isActive,
          ["w-full"]: buttonProps.size === "full",
          ["flex justify-center self-center w-fit"]:
            buttonProps.variant === "icon",
        })
      }
    >
      <Button {...buttonProps} />
    </NavLink>
  );
};
