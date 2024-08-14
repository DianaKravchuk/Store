import Button from "@/Ui/Button/Button";
import { type FC } from "react";
import { GoArrowRight } from "react-icons/go";
import { FcGoogle } from "react-icons/fc";
import Input from "@/Ui/Input/Input";

const Uikit: FC = () => {
  const resetField = (inputName: string) =>
    console.log(`reset input ${inputName}`);

  return (
    <div className="flex flex-col gap-10">
      <section className="flex flex-col gap-5">
        <h2 className="text-center text-3xl">Button</h2>
        <div className="flex flex-col gap-4 w-[800px]">
          <div className="flex gap-3 flex-wrap">
            <Button size="s" text="Small" variant="primary" />
            <Button size="s" text="Small" variant="secondary" />
            <Button size="s" text="Small" variant="secondaryLeft" />
            <Button size="s" text="Small" variant="tertiary" />
            <Button size="s" text="Small" variant="primary" iconPosition="left">
              <span className="flex items-center justify-center bg-white rounded-[50%] py-1 px-1">
                <GoArrowRight width={10} height={8} color="black" />
              </span>
            </Button>
            <Button
              size="s"
              text="Small"
              variant="secondary"
              iconPosition="left"
            >
              <span className="flex items-center justify-center bg-white rounded-[50%] py-1 px-1">
                <GoArrowRight width={10} height={8} color="black" />
              </span>
            </Button>
            <Button
              size="s"
              text="Small"
              variant="tertiary"
              iconPosition="left"
            >
              <span className="flex items-center justify-center bg-white rounded-[50%] py-1 px-1">
                <GoArrowRight width={10} height={8} color="black" />
              </span>
            </Button>
            <Button
              size="s"
              text="Small"
              variant="primary"
              iconPosition="right"
            >
              <span className="flex items-center justify-center bg-white rounded-[50%] py-1 px-1">
                <GoArrowRight width={10} height={8} color="black" />
              </span>
            </Button>
            <Button
              size="s"
              text="Small"
              variant="secondary"
              iconPosition="right"
            >
              <span className="flex items-center justify-center bg-white rounded-[50%] py-1 px-1">
                <GoArrowRight width={10} height={8} color="black" />
              </span>
            </Button>
            <Button
              size="s"
              text="Small"
              variant="tertiary"
              iconPosition="right"
            >
              <span className="flex items-center justify-center bg-white rounded-[50%] py-1 px-1">
                <GoArrowRight width={10} height={8} color="black" />
              </span>
            </Button>
            <Button size="s" text="Small" variant="primary" disabled />
            <Button size="s" text="Small" variant="secondary" disabled />
            <Button size="s" text="Small" variant="tertiary" disabled />
          </div>
          <div className="flex flex-wrap gap-3">
            <Button size="m" text="Medium" variant="primary" />
            <Button size="m" text="Medium" variant="secondary" />
            <Button size="m" text="Medium" variant="tertiary" />
            <Button
              size="m"
              text="Medium"
              variant="primary"
              iconPosition="left"
            >
              <span className="flex items-center justify-center bg-white rounded-[50%] py-1 px-1">
                <FcGoogle />
              </span>
            </Button>
            <Button
              size="m"
              text="Medium"
              variant="secondary"
              iconPosition="left"
            >
              <span className="flex items-center justify-center bg-white rounded-[50%] py-1 px-1">
                <FcGoogle />
              </span>
            </Button>
            <Button
              size="m"
              text="Medium"
              variant="tertiary"
              iconPosition="left"
            >
              <span className="flex items-center justify-center bg-white rounded-[50%] py-1 px-1">
                <FcGoogle />
              </span>
            </Button>
            <Button
              size="m"
              text="Medium"
              variant="primary"
              iconPosition="right"
            >
              <span className="flex items-center justify-center bg-white rounded-[50%] py-1 px-1">
                <FcGoogle />
              </span>
            </Button>
            <Button
              size="m"
              text="Medium"
              variant="secondary"
              iconPosition="right"
            >
              <span className="flex items-center justify-center bg-white rounded-[50%] py-1 px-1">
                <FcGoogle />
              </span>
            </Button>
            <Button
              size="m"
              text="Medium"
              variant="tertiary"
              iconPosition="right"
            >
              <span className="flex items-center justify-center bg-white rounded-[50%] py-1 px-1">
                <FcGoogle />
              </span>
            </Button>
            <Button size="m" text="Medium" variant="primary" disabled />
            <Button size="m" text="Medium" variant="secondary" disabled />
            <Button size="m" text="Medium" variant="tertiary" disabled />
          </div>
          <div className="flex flex-wrap gap-3">
            <Button size="full" text="Full width" variant="secondaryLeft" />
            <Button size="full" text="Full width" variant="primary" />
            <Button size="full" text="Full width" variant="secondary" />
            <Button size="full" text="Full width" variant="tertiary" />
            <Button
              size="full"
              text="Full width"
              variant="primary"
              iconPosition="left"
            >
              <span className="flex items-center justify-center bg-white rounded-[50%] py-1 px-1">
                <GoArrowRight width={15} height={13} color="black" />
              </span>
            </Button>
            <Button
              size="full"
              text="Full width"
              variant="secondary"
              iconPosition="left"
            >
              <span className="flex items-center justify-center bg-white rounded-[50%] py-1 px-1">
                <GoArrowRight width={15} height={13} color="black" />
              </span>
            </Button>
            <Button
              size="full"
              text="Full width"
              variant="tertiary"
              iconPosition="left"
            >
              <span className="flex items-center justify-center bg-white rounded-[50%] py-1 px-1">
                <GoArrowRight width={15} height={13} color="black" />
              </span>
            </Button>
            <Button
              size="full"
              text="Full width"
              variant="primary"
              iconPosition="right"
            >
              <span className="flex items-center justify-center rounded-[50%] py-[2px] px-[2px] group-hover:bg-white">
                <FcGoogle size={20} />
              </span>
            </Button>
            <Button
              size="full"
              text="Full width"
              variant="secondary"
              iconPosition="right"
            >
              <span className="flex items-center justify-center rounded-[50%] py-[2px] px-[2px] group-hover:bg-white">
                <FcGoogle size={20} />
              </span>
            </Button>
            <Button
              size="full"
              text="Full width"
              variant="tertiary"
              iconPosition="left"
            >
              <span className="flex items-center justify-center rounded-[50%] py-[2px] px-[2px] group-hover:bg-white">
                <FcGoogle size={20} />
              </span>
            </Button>
            <Button size="full" text="Full width" variant="primary" disabled />
            <Button
              size="full"
              text="Full width"
              variant="secondary"
              disabled
            />
            <Button size="full" text="Full width" variant="tertiary" disabled />
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default Uikit;
