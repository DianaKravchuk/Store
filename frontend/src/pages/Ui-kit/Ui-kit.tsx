import Button from "@/Ui/Button/Button";
import { type FC } from "react";
import { GoArrowRight } from "react-icons/go";
import { FcGoogle } from "react-icons/fc";
import Input from "@/Ui/Input/Input";
import { HiOutlineUser } from "react-icons/hi2";
import { ButtonLink } from "@/Ui/ButtonLink/ButtonLink";

const Uikit: FC = () => {
  const resetField = (inputName: string) =>
    console.log(`reset input ${inputName}`);
  const isDisabled = true;
  return (
    <div className="flex flex-col gap-10 pt-[150px]">
      <section className="flex flex-col gap-5">
        <h2 className="text-center text-3xl">Button</h2>
        <div className="flex flex-col gap-4 w-[800px]">
          <div className="flex gap-3 flex-wrap">
            <Button size="medium" text="Shop now" variant="filled" />
            <Button size="medium" text="Shop now" variant="text" />
            <Button size="medium" text="Shop now" variant="outlined" />
            <ButtonLink
              size="medium"
              text="Link"
              url="/ui-kit"
              variant="text"
            />
            <ButtonLink
              size="icon"
              url="/ui-kit"
              variant="icon"
              disabled={isDisabled}
              icon={
                <HiOutlineUser
                  size={24}
                  color={`${isDisabled ? "#59595A" : "#000"}`}
                />
              }
            />
          </div>
          <div className="flex gap-3 flex-wrap">
            <Button size="small" text="Small" variant="filled" />
            <Button size="small" text="Small" variant="text" />
            <Button size="full" text="Text Left" variant="textLeft" />
            <Button size="full" text="Text Left" variant="text" />
            <Button size="small" text="Small" variant="outlined" />
            <Button
              size="small"
              text="Small"
              variant="filled"
              iconPosition="left"
              icon={
                <span className="flex items-center justify-center bg-white rounded-[50%] py-1 px-1">
                  <GoArrowRight width={10} height={8} color="black" />
                </span>
              }
            />
            <Button
              size="small"
              text="Small"
              variant="text"
              iconPosition="left"
              icon={
                <span className="flex items-center justify-center bg-white rounded-[50%] py-1 px-1">
                  <GoArrowRight width={10} height={8} color="black" />
                </span>
              }
            />

            <Button
              size="small"
              text="Small"
              variant="outlined"
              iconPosition="left"
              icon={
                <span className="flex items-center justify-center bg-white rounded-[50%] py-1 px-1">
                  <GoArrowRight width={10} height={8} color="black" />
                </span>
              }
            />
            <Button
              size="small"
              text="Small"
              variant="filled"
              iconPosition="right"
              icon={
                <span className="flex items-center justify-center bg-white rounded-[50%] py-1 px-1">
                  <GoArrowRight width={10} height={8} color="black" />
                </span>
              }
            />

            <Button
              size="small"
              text="Small"
              variant="text"
              iconPosition="right"
              icon={
                <span className="flex items-center justify-center bg-white rounded-[50%] py-1 px-1">
                  <GoArrowRight width={10} height={8} color="black" />
                </span>
              }
            />

            <Button
              size="small"
              text="Small"
              variant="outlined"
              iconPosition="right"
              icon={
                <span className="flex items-center justify-center bg-white rounded-[50%] py-1 px-1">
                  <GoArrowRight width={10} height={8} color="black" />
                </span>
              }
            />

            <Button size="small" text="Small" variant="filled" disabled />
            <Button size="small" text="Small" variant="text" disabled />
            <Button size="small" text="Small" variant="outlined" disabled />
          </div>
          <div className="flex flex-wrap gap-3">
            <Button size="medium" text="Medium" variant="filled" />
            <Button size="medium" text="Medium" variant="text" />
            <Button size="medium" text="Medium" variant="outlined" />
            <Button
              size="medium"
              text="Medium"
              variant="filled"
              iconPosition="left"
              icon={
                <span className="flex items-center justify-center bg-white rounded-[50%] py-1 px-1">
                  <FcGoogle />
                </span>
              }
            />

            <Button
              size="medium"
              text="Medium"
              variant="text"
              iconPosition="left"
              icon={
                <span className="flex items-center justify-center bg-white rounded-[50%] py-1 px-1">
                  <FcGoogle />
                </span>
              }
            />

            <Button
              size="medium"
              text="Medium"
              variant="outlined"
              iconPosition="left"
              icon={
                <span className="flex items-center justify-center bg-white rounded-[50%] py-1 px-1">
                  <FcGoogle />
                </span>
              }
            />

            <Button
              size="medium"
              text="Medium"
              variant="filled"
              iconPosition="right"
              icon={
                <span className="flex items-center justify-center bg-white rounded-[50%] py-1 px-1">
                  <FcGoogle />
                </span>
              }
            />

            <Button
              size="medium"
              text="Medium"
              variant="text"
              iconPosition="right"
              icon={
                <span className="flex items-center justify-center bg-white rounded-[50%] py-1 px-1">
                  <FcGoogle />
                </span>
              }
            />

            <Button
              size="medium"
              text="Medium"
              variant="outlined"
              iconPosition="right"
              icon={
                <span className="flex items-center justify-center bg-white rounded-[50%] py-1 px-1">
                  <FcGoogle />
                </span>
              }
            />

            <Button size="medium" text="Medium d" variant="filled" disabled />
            <Button size="medium" text="Medium" variant="text" disabled />
            <Button size="medium" text="Medium" variant="outlined" disabled />
          </div>
          <div className="flex flex-wrap gap-3">
            <Button size="full" text="Full width" variant="filled" />
            <Button size="full" text="Full width" variant="text" />
            <Button size="full" text="Full width" variant="outlined" />
            <Button
              size="full"
              text="Full width"
              variant="filled"
              iconPosition="left"
              icon={
                <span className="flex items-center justify-center bg-white rounded-[50%] py-1 px-1">
                  <GoArrowRight width={15} height={13} color="black" />
                </span>
              }
            />

            <Button
              size="full"
              text="Full width"
              variant="text"
              iconPosition="left"
              icon={
                <span className="flex items-center justify-center bg-white rounded-[50%] py-1 px-1">
                  <GoArrowRight width={15} height={13} color="black" />
                </span>
              }
            />

            <Button
              size="full"
              text="Full width"
              variant="outlined"
              iconPosition="left"
              icon={
                <span className="flex items-center justify-center bg-white rounded-[50%] py-1 px-1">
                  <GoArrowRight width={15} height={13} color="black" />
                </span>
              }
            />

            <Button
              size="full"
              text="Full width"
              variant="filled"
              iconPosition="right"
              icon={
                <span className="flex items-center justify-center rounded-[50%] py-[2px] px-[2px] group-hover:bg-white">
                  <FcGoogle size={20} />
                </span>
              }
            />

            <Button
              size="full"
              text="Full width 4"
              variant="text"
              iconPosition="right"
              icon={
                <span className="flex items-center justify-center rounded-[50%] py-[2px] px-[2px] group-hover:bg-white">
                  <FcGoogle size={20} />
                </span>
              }
            />

            <Button
              size="full"
              text="Full width 3"
              variant="outlined"
              iconPosition="left"
              icon={
                <span className="flex items-center justify-center rounded-[50%] py-[2px] px-[2px] group-hover:bg-white">
                  <FcGoogle size={20} />
                </span>
              }
            />

            <Button size="full" text="Full width" variant="filled" disabled />
            <Button size="full" text="Full width" variant="text" disabled />
            <Button size="full" text="Full width" variant="outlined" disabled />
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-5">
        <h2 className="text-center text-3xl">Button Link</h2>
        <div className="flex flex-col gap-4 w-[800px]">
          <div className="flex flex-wrap gap-3">
            <ButtonLink
              size="medium"
              url="/account"
              text="Account"
              variant="filled"
            />
            <ButtonLink
              size="medium"
              url="/account"
              text="Account"
              variant="text"
            />
            <ButtonLink
              size="medium"
              url="/account"
              text="Account"
              variant="outlined"
            />
            <ButtonLink
              size="medium"
              url="/"
              text="Home"
              variant="filled"
              iconPosition="left"
              icon={
                <span className="flex items-center justify-center bg-white rounded-[50%] py-1 px-1">
                  <FcGoogle />
                </span>
              }
            />

            <ButtonLink
              size="medium"
              url="/"
              text="Home"
              variant="text"
              iconPosition="left"
              icon={
                <span className="flex items-center justify-center bg-white rounded-[50%] py-1 px-1">
                  <FcGoogle />
                </span>
              }
            />

            <ButtonLink
              size="medium"
              url="/"
              text="Home"
              variant="outlined"
              iconPosition="left"
              icon={
                <span className="flex items-center justify-center bg-white rounded-[50%] py-1 px-1">
                  <FcGoogle />
                </span>
              }
            />
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-5">
        <h2 className="text-center text-3xl">Input</h2>
        <div className="flex flex-col gap-4 w-[800px]">
          <div className="flex gap-y-8 gap-x-4 flex-wrap">
            <Input placeholder="E-mail" type="email" />
            <Input placeholder="Password" type="password" />
            <Input
              placeholder="Password"
              type="password"
              errorMessage="Тут є помилка"
            />
            <Input
              placeholder="E-mail"
              type="email"
              errorMessage="Тут є помилка"
            />
            <Input
              placeholder="Password"
              type="password"
              resetField={() => resetField("password")}
            />
            <Input
              placeholder="E-mail"
              type="email"
              resetField={() => resetField("email")}
            />
            <Input placeholder="Password" type="password" disabled />
            <Input placeholder="E-mail" type="email" disabled />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Uikit;
