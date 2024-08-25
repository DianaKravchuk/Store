import { FC } from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage: FC = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <section className="pt-[150px]">
      <h1>OOps!</h1>
      <p>Sorry,this page does not exist.</p>
    </section>
  );
};

export default ErrorPage;
