import { FC } from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage: FC = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <section className="flex w-full h-[832px]">
      <div className="w-[56.05%] bg-login h-[832px] bg-no-repeat bg-cover"></div>
      <div className="w-[44%] pt-[200px] pl-[48px] flex flex-col items-center">
        <p className="font-inter text-center text-[36px] font-black  leading-none md:text-[60px] lg:text-[70px]">
          This page is
        </p>
        <p className="font-inter text-center text-[40px] font-black leading-none text-black-000 md:text-[68px] lg:text-[77px]">
          under construction
        </p>

        <p className="mt-5 w-full font-montserrat md:w-[373px]">
          Thank you for visiting this page and showing interest in our project.
          We are thrilled about what&apos;s to come, and we can&apos;t wait to
          share our progress with you!
          <br />
          <span className="font-normal text-brand-orange-400">
            Please check back soon.
          </span>
        </p>
      </div>
    </section>
  );
};

export default ErrorPage;
