import { Link } from "react-router-dom";
import { categoryLinks, navigationLinks } from "./types/data";
import { ButtonLink } from "@/Ui/ButtonLink/ButtonLink";
import logo from "@assets/icons/Logo-small.svg";
import { useAppSelector } from "@/redux/hooks";
import { userData } from "@/redux/slices/userSlice";

const Header: React.FC = () => {
  const { user } = useAppSelector(userData);

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
              variant="text"
            />
          ))}
        </div>
        {/* Sign In and Log In buttons in future */}
        <div className="w-[156px] flex items-center gap-6">
          {navigationLinks.map((item) => (
            <ButtonLink
              key={item.id}
              size="icon"
              url={item.id === 2 && user ? "/account" : item.link}
              variant="icon"
              icon={<item.icon size={24} />}
            />
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
