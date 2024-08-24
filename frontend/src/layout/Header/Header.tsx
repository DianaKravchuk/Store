import { Link } from "react-router-dom";
import { categoryLinks, navigationLinks } from "./types/data";
import { useState } from "react";
import { ButtonLink } from "@/Ui/ButtonLink/ButtonLink";
import logo from "@assets/icons/Logo-small.svg";

const Header: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <header className="fixed top-0 z-20 bg-grey-opacity-80%  w-full">
      <div className="max-w-[1040px] flex mx-auto items-center justify-between pt-[60px]">
        <Link
          to={"/"}
          className="font-Jost font-extrabold text-[#2D2D2D] leading-[18px] text-[18px] tracking-widest"
        >
          <img src={logo} alt="logo" width={104} height={18} />
        </Link>
        <div className="flex items-center gap-3">
          {categoryLinks.map((link, index) => (
            <ButtonLink
              size="medium"
              key={index}
              text={link.label}
              url={link.href}
              variant="secondary"
            />
          ))}
        </div>
        {/* Sign In and Log In buttons in future */}
        <div className="w-[156px] flex items-center gap-6">
          {navigationLinks.map((item, index) => (
            <Link
              to={item.link}
              key={item.id}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`size-9 p-1 flex items-center justify-center rounded-full ${
                hoveredIndex === index ? "bg-[#E0E0E029]" : "bg-transparent"
              }`}
            >
              <item.icon className="size-6" />
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
