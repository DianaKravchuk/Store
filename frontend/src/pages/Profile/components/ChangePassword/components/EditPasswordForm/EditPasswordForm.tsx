import { FC } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@/Ui/Button/Button";
import Input from "@/Ui/Input/Input";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  EditPasswordValues,
  getChangePasswordSchema,
} from "@/utils/validateSchema";
import { EditPasswordFormProps } from "./types";
import { changePassword, userData } from "@/redux/slices/userSlice";

const EditPasswordForm: FC<EditPasswordFormProps> = ({ onClose }) => {
  const { user } = useAppSelector(userData);
  const dispatch = useAppDispatch();
  const {
    register,
    resetField,
    handleSubmit,
    formState: { isValid, errors, isSubmitting },
  } = useForm<EditPasswordValues>({
    resolver: zodResolver(getChangePasswordSchema(user?.password)),
    mode: "onTouched",
  });
  const handleOnSubmit = (data: EditPasswordValues) => {
    const { password } = data;
    dispatch(changePassword(password));
    onClose();
  };
  return (
    <section className="w-full max-w-[296px] md:max-w-[clamp(296px,43.571px+33.929vw,391px)] flex flex-col self-center md:self-end gap-3 pt-6 md:pt-[2px]">
      <h3 className="font-inter font-normal text-black-000 text-base leading-[38px] self-end">
        Change password
      </h3>
      <form
        onSubmit={handleSubmit(handleOnSubmit)}
        className="flex flex-col gap-6"
      >
        <div className="flex flex-col gap-4">
          <Input
            {...register("currentPassword")}
            resetField={() => resetField("currentPassword")}
            errorMessage={errors.currentPassword?.message}
            placeholder="Current password"
          />
          <Input
            {...register("password")}
            resetField={() => resetField("password")}
            errorMessage={errors.password?.message}
            placeholder="New password"
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

export default EditPasswordForm;
