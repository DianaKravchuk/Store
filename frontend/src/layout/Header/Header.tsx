import { Link } from "react-router-dom";
import { categoryLinks, navigationLinks } from "./types/data";
import { useState } from "react";

const Header: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <header className="w-[1032px] h-11 bg-[#F4F4F4CC] flex mx-auto items-center justify-between pt-[60px] pb-[64px]">
      <Link
        to={"/"}
        className="font-Jost font-extrabold text-[#2D2D2D] leading-[18px] text-[18px] tracking-widest"
      >
        SHADE.
      </Link>
      <div className="w-[385px] flex items-center justify-around">
        {categoryLinks.map((link, index) => (
          <span className="font-inter text-black" key={index}>
            {link.label}
          </span>
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
    </header>
  );
};

export default Header;
