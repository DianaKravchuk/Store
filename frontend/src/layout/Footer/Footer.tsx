import SubscribeForm from "@components/SubscribeForm/SubscribeForm";
import { Link } from "react-router-dom";
import { FOOTER_NAVIGATE } from "./constants";
import logo from "@/assets/icons/Logo_medium.svg";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-[52px] pb-[64px]">
      <div className="flex flex-col gap-[58px] mx-auto w-[1040px]">
        <div className="flex flex-col gap-3">
          <Link to="/" className="">
            <img src={logo} alt="logo Shade" width={232} height={37} />
          </Link>
          <div className="flex justify-between">
            <div className="flex flex-col gap-[30px]">
              <p className="max-w-[300px] font-inter text-[#141212] tracking-[0.01em] text-sm font-extralight leading-[17px]">
                Discover the latest trends and elevate your style.
              </p>
              <div className="flex flex-col gap-[5px]">
                <p className="text-sm font-extralight text-black tracking-wider">
                  Join our newsettler to stay up to date on features abd
                  realises.
                </p>
                <SubscribeForm />
              </div>
            </div>
            <div className="flex gap-6 pt-[5px]">
              {FOOTER_NAVIGATE.map((nav) => (
                <div key={nav.id} className="flex flex-col gap-3">
                  <h3 className="uppercase font-montserrat font-normal text-xs leading-[15px]  tracking-[0.095em] text-[#141212]">
                    {nav.title}
                  </h3>
                  <div className="flex flex-col">
                    {nav.links.map((link) => (
                      <Link
                        key={link.id}
                        to={link.url}
                        className="text-[12px] leading-[28px] font-inter font-extralight -tracking-[0em] text-black px-[12px] "
                      >
                        {link.children}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-[1px] border-[#cdc0c0]">
        <div className="flex justify-between pt-2 px-1 mx-auto w-[1032px]">
          <p className="text-xs font-inter text-[#141212] leading-[15px] tracking-[0.08em] font-extralight before:content-['\0040'] before:-tracking-[0.06em] before:mr-[2px]">
            All right reserved
          </p>
          <div className="flex gap-6 tracking-[0.06em]">
            <Link
              to="/legal"
              className="text-xs font-inter text-[#141212] leading-[15px] font-extralight"
            >
              Legal notice
            </Link>
            <Link
              to="/privacy"
              className="text-xs font-inter text-[#141212] leading-[15px] font-extralight"
            >
              Privacy policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
