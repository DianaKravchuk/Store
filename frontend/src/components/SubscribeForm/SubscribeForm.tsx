import Button from "@/Ui/Button/Button";
import Input from "@/Ui/Input/Input";
import { subscribeSchema, SubscribeValues } from "@/utils/validateSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { GoArrowRight } from "react-icons/go";

const SubscribeForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    resetField,
    formState: { isValid, errors, isSubmitting },
  } = useForm<SubscribeValues>({
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(subscribeSchema),
    mode: "onTouched",
  });
  const handleOnSubmit = (data: SubscribeValues) => {
    console.log(data);
    reset();
  };
  return (
    <form
      onSubmit={handleSubmit(handleOnSubmit)}
      className="flex items-center gap-3 w-[539px]"
    >
      <Input
        {...register("email")}
        placeholder="E-mail"
        type="email"
        resetField={() => resetField("email")}
        errorMessage={errors.email?.message}
      />
      <Button
        type="submit"
        size={"medium"}
        variant={"primary"}
        text="Submit"
        icon={
          <span className="flex items-center justify-center bg-white rounded-[50%] py-1 px-1">
            <GoArrowRight width={15} height={13} color="black" />
          </span>
        }
        iconPosition={"right"}
        disabled={!isValid || isSubmitting}
      />
    </form>
  );
};

export default SubscribeForm;
