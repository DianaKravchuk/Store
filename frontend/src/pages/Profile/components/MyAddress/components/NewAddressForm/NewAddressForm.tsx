import { FC } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newAddressSchema, NewAddressValues } from "@/utils/validateSchema";
import Input from "@/Ui/Input/Input";
import Button from "@/Ui/Button/Button";
import { useAppDispatch } from "@/redux/hooks";
import { addNewAddress } from "@/redux/slices/userAddress";
import { NewAddressFormProps } from "./types";

const NewAddressForm: FC<NewAddressFormProps> = ({ onClose }) => {
  const dispatch = useAppDispatch();
  const {
    register,
    resetField,
    handleSubmit,
    formState: { isValid, errors, isSubmitting },
  } = useForm<NewAddressValues>({
    resolver: zodResolver(newAddressSchema),
    mode: "onTouched",
  });
  const handleOnSubmit = (data: NewAddressValues) => {
    const { address, firstName, lastName, phone, region } = data;
    dispatch(
      addNewAddress({
        phone,
        fullName: `${firstName} ${lastName}`,
        address: `${region} ${address}`,
      }),
    );
    onClose();
  };
  return (
    <section className="w-full max-w-[296px] md:max-w-[clamp(296px,43.571px+33.929vw,391px)] flex flex-col self-center md:self-end gap-3 pt-6 md:pt-[2px]">
      <h3 className="font-inter font-normal text-black-000 text-base leading-[38px] self-end">
        New address
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
            {...register("region")}
            resetField={() => resetField("region")}
            errorMessage={errors.region?.message}
            placeholder="Region"
          />
          <Input
            {...register("address")}
            resetField={() => resetField("address")}
            errorMessage={errors.address?.message}
            placeholder="Address"
          />
          <Input
            {...register("phone")}
            resetField={() => resetField("phone")}
            errorMessage={errors.phone?.message}
            placeholder="+380"
          />
        </div>
        <div className="w-full max-w-[160px] lg:max-w-[391px] flex flex-col lg:flex-row gap-3 justify-between items-end self-end">
          <Button
            size="medium"
            variant="filled"
            text="Save"
            type="submit"
            disabled={!isValid || isSubmitting}
          />
          <Button
            size="medium"
            variant="outlined"
            text="Cancel"
            type="reset"
            onClick={onClose}
          />
        </div>
      </form>
    </section>
  );
};

export default NewAddressForm;
