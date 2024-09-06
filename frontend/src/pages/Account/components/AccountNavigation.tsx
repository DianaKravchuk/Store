import { FC } from "react";
import { AccountLinks } from "../data";
import { ButtonLink } from "@/Ui/ButtonLink/ButtonLink";
import { GoArrowRight } from "react-icons/go";

const AccountNavigation: FC = () => {
  return (
    <div className="flex flex-col items-start gap-2">
      {AccountLinks.map((item, index) => (
        <ButtonLink
          key={index}
          type="button"
          size="full"
          variant="text"
          text={item.label}
          textPosition="between"
          icon={
            <span className="flex items-center justify-center bg-transparent rounded-[50%] py-1 px-1">
              <GoArrowRight width={15} height={13} color="black" />
            </span>
          }
          iconPosition={"right"}
          url={item.href}
        />
      ))}
    </div>
  );
};

export default AccountNavigation;
