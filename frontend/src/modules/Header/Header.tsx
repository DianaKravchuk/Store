import { Link } from "react-router-dom";
import { categoryLinks } from "./lib/data"
import { HiOutlineUser } from "react-icons/hi2";
import { IoCartOutline } from "react-icons/io5";

const Header: React.FC = () => {
  return (
    <div className="w-[1032px] h-11 flex items-center justify-between mt-7">
        <span className="font-Jost font-extrabold text-[#2D2D2D] leading-[18px] text-[18px] tracking-widest">SHADE.</span>
        <div className="w-[385px] flex items-center justify-around">
            {categoryLinks.map((link, index) => (
                <span className="font-inter text-black" key={index}>{link.label}</span>
            ))}
        </div>
        {/* Sign In and Log In buttons in future */}
        <div className="w-24 flex items-center justify-between">
            <Link to={"#"}>
                <HiOutlineUser className="size-9 p-1"/>
            </Link>
            <Link to={"#"}>
                <IoCartOutline className="size-9 p-1" />
            </Link>
        </div>
    </div>
  )
}

export default Header