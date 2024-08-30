import { FC } from "react";
import { useParams } from "react-router";
import RegisterForm from "@/components/RegisterForm/RegisterForm";
import LoginForm from "@/components/LoginForm";

const Auth: FC = () => {
  const params = useParams();
  return (
    <section className="flex w-full h-[832px] mb-[200px]">
      <div className="w-[56.05%] bg-login h-[832px] bg-no-repeat bg-cover"></div>
      <div className="w-[44%] pt-[200px] pl-[48px]">
        {params.authPage === "signup" ? <RegisterForm /> : <LoginForm />}
      </div>
    </section>
  );
};

export default Auth;
