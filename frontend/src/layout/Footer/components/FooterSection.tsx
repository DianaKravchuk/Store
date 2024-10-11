import { ButtonLink } from "@/Ui/ButtonLink/ButtonLink";
import { FC } from "react";
import { FooterSectionProps } from "./types";

const FooterSection: FC<FooterSectionProps> = ({ title, links }) => (
  <div className="flex flex-col gap-3 md:gap-[9.5px]">
    <h3 className="uppercase font-montserrat font-normal text-xs leading-[15px] tracking-[0.095em] text-black-000">
      {title}
    </h3>
    <div className="flex flex-col">
      {links.map((link) => (
        <ButtonLink
          key={link.id}
          url={link.url}
          text={link.content}
          size="small"
          textPosition="start"
          variant="text"
        />
      ))}
    </div>
  </div>
);

export default FooterSection;
