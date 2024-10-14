import { Link } from "react-router-dom";
import { categoryLinks, navigationLinks } from "./data";
import { ButtonLink } from "@/Ui/ButtonLink/ButtonLink";
import logo from "@assets/icons/Logo-small.svg";
import { useAppSelector } from "@/redux/hooks";
import { userData } from "@/redux/slices/userSlice";
import MenuComponent from "./components/Menu/Menu";
import { HiUser } from "react-icons/hi2";

const Header: React.FC = () => {
  const { user } = useAppSelector(userData);

  return (
    <header className="sticky top-0 z-50 bg-grey-opacity-80% w-full">
      <div className="container flex mx-auto items-center justify-between py-[14px] md:py-[clamp(14px,-28.514px+5.714vw,30px)]">
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
        <div className="hidden lg:flex items-center gap-6 py-[3.52px]">
          <div className="w-9 h-9 hidden lg:max-xl:flex lg:max-xl:items-center lg:max-xl:justify-center">
            <MenuComponent />
          </div>
          {navigationLinks.map((item) => (
            <ButtonLink
              key={item.id}
              size="icon"
              variant="icon"
              url={item.id === 2 && user ? "/account" : item.link}
              icon={
                item.id === 2 && user ? (
                  <HiUser size={25} />
                ) : (
                  <item.icon size={24} />
                )
              }
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
