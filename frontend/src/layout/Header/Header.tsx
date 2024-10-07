import { Link } from "react-router-dom";
import { categoryLinks, navigationLinks } from "./data";
import { ButtonLink } from "@/Ui/ButtonLink/ButtonLink";
import logo from "@assets/icons/Logo-small.svg";
import { useAppSelector } from "@/redux/hooks";
import { userData } from "@/redux/slices/userSlice";
import MenuComponent from "./components/Menu/Menu";

const Header: React.FC = () => {
  const { user } = useAppSelector(userData);

  return (
    <header className="sticky top-0 z-50 bg-grey-opacity-80%  w-full">
      <div className="container flex mx-auto items-end lg:items-center justify-between pt-[28px] md:pt-[clamp(28px,-57.029px+11.429vw,60px)]">
        <Link
          to={"/"}
          className="font-Jost font-extrabold text-[#2D2D2D] leading-[18px] text-[18px] tracking-widest"
        >
          <img src={logo} alt="logo" width={104} height={18} />
        </Link>
        <div className="hidden xl:flex items-center gap-3">
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
        <div className="hidden lg:flex items-center gap-6">
          <div className="w-9 h-9 hidden lg:max-xl:flex lg:max-xl:items-center lg:max-xl:justify-center">
            <MenuComponent />
          </div>
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
        <div className="w-9 h-9 flex justify-center items-center lg:hidden">
          <MenuComponent isIcon />
        </div>
      </div>
    </header>
  );
};

export default Header;
