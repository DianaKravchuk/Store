import { useAppDispatch } from "@/redux/hooks";
import { login } from "@/redux/slices/userSlice";
import Button from "@/Ui/Button/Button";
import { ButtonLink } from "@/Ui/ButtonLink/ButtonLink";
import Checkbox from "@/Ui/Checkbox/Checkbox";
import Input from "@/Ui/Input/Input";
import { registerSchema, RegisterValues } from "@/utils/validateSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { GoArrowRight } from "react-icons/go";

const RegisterForm: FC = () => {
  const dispatch = useAppDispatch();
  const [isRegisterSuccess, setIsRegisterSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid, errors, isSubmitting },
  } = useForm<RegisterValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      accept: false,
      email: "",
      password: "",
      privacy: false,
    },
    resolver: zodResolver(registerSchema),
    mode: "onTouched",
  });
  const handleOnSubmit = (data: RegisterValues) => {
    const { email, firstName, lastName } = data;
    setIsRegisterSuccess(true);
    dispatch(login({ user: { email, firstName, lastName, id: "1" } }));
    reset();
  };
  return (
    <>
      {!isRegisterSuccess ? (
        <form
          className="flex flex-col gap-9 max-w-[395px]"
          onSubmit={handleSubmit(handleOnSubmit)}
        >
          <h3 className="font-montserrat text-xs uppercase text-black tracking-widest">
            Create account
          </h3>
          <div className="flex flex-col gap-3">
            <Input
              {...register("firstName")}
              errorMessage={errors.firstName?.message}
              placeholder="First name"
            />
            <Input
              {...register("lastName")}
              errorMessage={errors.lastName?.message}
              placeholder="Last name"
            />
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
            <div>
              <Checkbox
                {...register("accept")}
                type="checkbox"
                label="I wish to receive personalised commercial information from Shade
              by email."
              ></Checkbox>
              <Checkbox
                {...register("privacy")}
                type="checkbox"
                label="I have read and understand the Privacy and Cookies Policy."
              ></Checkbox>
            </div>
          </div>
          <div className="flex flex-col gap-[6px]">
            <Button
              type="submit"
              size="full"
              variant="filled"
              text="Create account"
              icon={
                <span className="flex items-center justify-center bg-white rounded-[50%] py-1 px-1">
                  <GoArrowRight width={15} height={13} color="black" />
                </span>
              }
              iconPosition={"right"}
              disabled={!isValid || isSubmitting}
            />
            <ButtonLink
              type="button"
              size="full"
              variant="text"
              text="Log in"
              icon={
                <span className="flex items-center justify-center bg-white rounded-[50%] py-1 px-1">
                  <GoArrowRight width={15} height={13} color="black" />
                </span>
              }
              iconPosition={"right"}
              url="/auth/login"
            />
          </div>
        </form>
      ) : (
        <div className="flex flex-col gap-12 w-full max-w-[390px]">
          <p className="uppercase font-montserrat text-black-000 text-xs font-normal tracking-widest leading-[15px]">
            Thank you for registration
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

export default RegisterForm;
