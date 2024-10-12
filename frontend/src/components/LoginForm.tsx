import { login } from "@/redux/slices/userSlice";
import Button from "@/Ui/Button/Button";
import { ButtonLink } from "@/Ui/ButtonLink/ButtonLink";
import Input from "@/Ui/Input/Input";
import { loginSchema, LoginValues } from "@/utils/validateSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const LoginForm: FC = () => {
  const dispatch = useDispatch();
  const [isLoginSuccess, setIsLoginSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid, errors },
  } = useForm<LoginValues>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
    mode: "onTouched",
  });
  const handleOnSubmit = (data: LoginValues) => {
    setIsLoginSuccess(true);
    dispatch(
      login({
        user: {
          email: data.email,
          firstName: "firstName",
          lastName: "lastName",
          id: "1",
        },
      }),
    );
    reset();
  };
  return (
    <>
      {!isLoginSuccess ? (
        <form
          className="w-full flex flex-col gap-6 max-w-[395px]"
          onSubmit={handleSubmit(handleOnSubmit)}
        >
          <div className="flex flex-col gap-3">
            <Input
              {...register("email")}
              errorMessage={errors.email?.message}
              placeholder="E-mail"
            />
            <Input
              {...register("password")}
              errorMessage={errors.password?.message}
              placeholder="Password"
              type="password"
            />
            <Link
              to={"/resetPassword"}
              className="font-inter font-extralight text-[12px] leading-6 px-3 py-[2px]"
            >
              Forgot password
            </Link>
          </div>
          <div className="flex flex-col gap-[clamp(24px,-6.189px+9.434vw,64px)]">
            <div className="flex flex-col gap-[6px]">
              <Button
                type="submit"
                size="full"
                variant="filled"
                text="Log in"
                icon={
                  <span className="flex items-center justify-center bg-white rounded-[50%] py-1 px-1">
                    <GoArrowRight width={15} height={13} color="black" />
                  </span>
                }
                iconPosition={"right"}
                disabled={!isValid}
              />
              <ButtonLink
                type="button"
                size="full"
                variant="text"
                text="Sign up"
                icon={
                  <span className="flex items-center justify-center bg-transparent rounded-[50%] py-1 px-1">
                    <GoArrowRight width={15} height={13} color="black" />
                  </span>
                }
                iconPosition={"right"}
                url="/auth/signup"
              />
            </div>
            <ButtonLink
              type="button"
              size="full"
              text="Log in with Google"
              variant="outlined"
              iconPosition="left"
              icon={
                <span className="flex items-center justify-center rounded-[50%] py-[2px] px-[2px] group-hover:bg-white">
                  <FcGoogle size={20} />
                </span>
              }
              url={"/googleAuth"}
            />
          </div>
        </form>
      ) : (
        <div className="flex flex-col gap-12 w-full max-w-[390px]">
          <p className="uppercase font-montserrat text-black-000 text-xs font-normal tracking-widest leading-[15px] text-center">
            Thank you for Log in into your SHADE. account
          </p>
          <ButtonLink
            size="full"
            url="/"
            variant="filled"
            text="Next"
            icon={
              <span className="flex items-center justify-center bg-white rounded-[50%] py-1 px-1">
                <GoArrowRight width={15} height={13} color="black" />
              </span>
            }
            iconPosition={"right"}
          />
        </div>
      )}
    </>
  );
};

export default LoginForm;
