import { FC } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newPurchasesSchema, NewPurchasesValues } from "@/utils/validateSchema";
import Input from "@/Ui/Input/Input";
import Button from "@/Ui/Button/Button";
import { useAppDispatch } from "@/redux/hooks";
import { addNewPayment } from "@/redux/slices/userProfile";
import { NewPurchasesFormProps } from "./types";

const NewPurchasesForm: FC<NewPurchasesFormProps> = ({ onClose }) => {
  const dispatch = useAppDispatch();
  const {
    register,
    resetField,
    handleSubmit,
    formState: { isValid, errors, isSubmitting },
  } = useForm<NewPurchasesValues>({
    resolver: zodResolver(newPurchasesSchema),
    mode: "onTouched",
  });
  const handleOnSubmit = (data: NewPurchasesValues) => {
    const { firstName, lastName, cards, fullName } = data;
    dispatch(
      addNewPayment({
        cardsNumber: cards,
        firstName,
        fullName,
        lastName,
        isDefault: false,
      }),
    );
    onClose();
  };
  return (
    <section className="w-full max-w-[296px] md:max-w-[clamp(296px,43.571px+33.929vw,391px)] flex flex-col self-center md:self-end gap-3 pt-0 md:max-lg:pt-2.5">
      <h3 className="font-inter font-normal text-black-000 text-base leading-[38px] self-end">
        New payment details
      </h3>
      <form
        onSubmit={handleSubmit(handleOnSubmit)}
        className="flex flex-col gap-6"
      >
        <div className="flex flex-col gap-4">
          <Input
            {...register("firstName")}
            resetField={() => resetField("firstName")}
            errorMessage={errors.firstName?.message}
            placeholder="First name"
          />
          <Input
            {...register("lastName")}
            resetField={() => resetField("lastName")}
            errorMessage={errors.lastName?.message}
            placeholder="Last name"
          />
          <Input
            {...register("fullName")}
            resetField={() => resetField("fullName")}
            errorMessage={errors.fullName?.message}
            placeholder="Name of the accont holder"
          />
          <Input
            {...register("cards")}
            resetField={() => resetField("cards")}
            errorMessage={errors.cards?.message}
            placeholder="Cards number"
          />
        </div>
        <div className="w-full max-w-[160px] lg:max-w-[391px] flex flex-col-reverse lg:flex-row gap-3 justify-between items-end self-end">
          <Button
            size="medium"
            variant="outlined"
            text="Cancel"
            type="reset"
            onClick={onClose}
          />
          <Button
            size="medium"
            variant="filled"
            text="Save"
            type="submit"
            disabled={!isValid || isSubmitting}
          />
        </div>
      </form>
    </section>
  );
};

export default NewPurchasesForm;
