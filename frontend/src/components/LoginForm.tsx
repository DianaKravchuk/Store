import Button from "@/Ui/Button/Button";
import { ButtonLink } from "@/Ui/ButtonLink/ButtonLink";
import Input from "@/Ui/Input/Input";
import { loginSchema, LoginValues } from "@/utils/validateSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { GoArrowRight } from "react-icons/go";

const LoginForm: FC = () => {
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
    console.log(data);
    reset();
    setIsLoginSuccess(true);
  };
  return (
    <>
      {!isLoginSuccess ? (
        <form
          className="flex flex-col gap-9 max-w-[395px]"
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
          </div>
          <div className="flex flex-col gap-16">
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
        <div className="flex flex-col gap-12 max-w-[390px]">
          <p className="uppercase font-montserrat text-black-000 text-xs font-normal tracking-widest leading-[15px]">
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
