import { FC } from "react";
import { useParams } from "react-router";
import RegisterForm from "@/components/RegisterForm/RegisterForm";
import LoginForm from "@/components/LoginForm";

const Auth: FC = () => {
  const params = useParams();
  return (
    <div className="container lg:grid lg:grid-cols-[1fr_390px] lg:gap-[50px] xl:gap-[clamp(50px,-150px+15.625vw,150px)]">
      <div className="hidden bg-login lg:h-[clamp(547px,-177px+70.703vw,728px)] lg:block xl:h-[clamp(728px,232px+38.75vw,976px)] bg-no-repeat bg-cover bg-center"></div>
      <div className="w-full flex justify-center pt-[96px]">
        {params.authPage === "signup" ? <RegisterForm /> : <LoginForm />}
      </div>
    </div>
  );
};

export default Auth;
