import Button from "@/Ui/Button/Button";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm: React.FC = () => {
  const [userRegister, setUserRegister] = useState({ email: "", password: "" });
  return (
    <div className="w-[390px] flex flex-col pt-[29px] gap-[35px] absolute right-[140px]">
      <div className="flex flex-col">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={userRegister.email}
          onChange={(e) =>
            setUserRegister({ ...userRegister, email: e.target.value })
          }
          className="w-full border-[0.5px] py-[10px] px-3 gap-[10px] rounded-full font-inter text-[16px] leading-6 font-extralight mb-3"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={userRegister.password}
          onChange={(e) =>
            setUserRegister({ ...userRegister, password: e.target.value })
          }
          className="w-full border-[0.5px] py-[10px] px-3 gap-[10px] rounded-full font-inter text-[16px] leading-6 font-extralight mb-3"
        />
        <div className="py-[2px] px-3">
          <Link
            to={"#"}
            className="font-inter font-extralight text-[12px] leading-6 text-center"
          >
            Forgot password
          </Link>
        </div>
      </div>
      <div className="w-full h-fit">
        <Button text="Log in" size="full" variant="primary" />
      </div>
    </div>
  );
};

export default LoginForm;
