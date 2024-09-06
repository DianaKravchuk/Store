import { ButtonLink } from "@/Ui/ButtonLink/ButtonLink";
import { FC } from "react";
import { FooterIconsSectionProps } from "./types";

const FooterIconsSection: FC<FooterIconsSectionProps> = ({ title, links }) => (
  <div className="flex flex-col gap-3">
    <h3 className="uppercase font-montserrat font-normal text-xs leading-[15px] tracking-[0.095em] text-black-000">
      {title}
    </h3>
    <div className="flex flex-col">
      {links.map((link) => (
        <ButtonLink
          key={link.id}
          url={link.url}
          icon={link.content}
          size="icon"
          iconPosition="left"
          variant="icon"
        />
      ))}
    </div>
  </div>
);

export default FooterIconsSection;
