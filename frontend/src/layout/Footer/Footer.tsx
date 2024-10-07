import SubscribeForm from "@/layout/Footer/components/SubscribeForm/SubscribeForm";
import { Link } from "react-router-dom";
import { FOOTER_NAVIGATE } from "./constants";
import logo from "@/assets/icons/Logo_medium.svg";
import FooterSection from "./components/FooterSection";
import FooterIconsSection from "./components/FooterIconSection";

const Footer = () => {
  return (
    <footer>
      <div className="container flex flex-col gap-12 xl:gap-14">
        <div className="flex flex-col gap-3">
          <Link to="/" className="self-start">
            <img
              src={logo}
              alt="logo Shade"
              width={160}
              height={26}
              className="lg:w-[232px] lg:h-[37px]"
            />
          </Link>
          <div className="flex flex-col justify-between gap-[14px] md:gap-[22px] lg:gap-[21px] xl:flex-row">
            <div className="flex flex-col gap-[30px] xl:w-[556px]">
              <p className="max-w-[296px] font-inter text-black-000 tracking-[0.01em] text-sm font-extralight leading-[17px]">
                Discover the latest trends and elevate your style.
              </p>
              <div className="flex flex-col gap-[7px] max-w-[296px] md:max-w-[464px] lg:max-w-[558px]">
                <p className="text-sm font-extralight text-black-000 tracking-wider leading-[17px]">
                  Join our newsettler to stay up to date on features abd
                  realises.
                </p>
                <SubscribeForm />
              </div>
            </div>
            <div className="flex flex-wrap gap-y-3 md:pt-1 lg:gap-x-3 xl:pt-0">
              {FOOTER_NAVIGATE.link.map((link) => (
                <FooterSection
                  links={link.links}
                  title={link.title}
                  key={link.id}
                />
              ))}
              {FOOTER_NAVIGATE.icon.map((link) => (
                <FooterIconsSection
                  key={link.id}
                  links={link.links}
                  title={link.title}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 py-2 px-1 mx-auto w-full border-t-[1px] border-beige">
          <div className="flex gap-6 tracking-[0.06em]">
            {FOOTER_NAVIGATE.legalLinks.map((link) => (
              <Link
                key={link.id}
                to={link.url}
                className="text-xs font-inter text-black-000 leading-[15px] font-extralight"
              >
                {link.text}
              </Link>
            ))}
          </div>
          <p className="text-xs font-inter text-black-000 leading-[15px] tracking-[0.08em] font-extralight before:content-['\0040'] before:-tracking-[0.06em] before:mr-[2px]">
            All right reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
