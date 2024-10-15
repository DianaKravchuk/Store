import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { FC } from "react";
import { LanguagePopupProps } from "./types";
import Button from "@/Ui/Button/Button";
import { IoCloseCircleOutline } from "react-icons/io5";
import Select from "@/Ui/Select/Select";
import {
  changeLanguageSchema,
  ChangeLanguageValues,
} from "@/utils/validateSchema";
import { Language } from "./data";

const LanguagePopup: FC<LanguagePopupProps> = ({ onClose }) => {
  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<ChangeLanguageValues>({
    resolver: zodResolver(changeLanguageSchema),
    mode: "onTouched",
  });
  const onSubmit = async (data: ChangeLanguageValues) => {
    // eslint-disable-next-line no-console
    console.log(data);
    onClose();
  };
  return (
    <section className="w-full max-w-[clamp(296px,145.057px+47.17vw,496px)] bg-white py-[clamp(40px,9.811px+9.434vw,80px)] px-[clamp(20px,-4.906px+7.783vw,53px)] rounded-3xl flex flex-col gap-6 relative">
      <h3 className="text-center font-inter text-base text-black-000">
        Language of communication
      </h3>
      <p className="max-w-[390px] font-inter text-sm font-extralight text-black-000">
        Please select your preferred language to receive news and notifications.
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="w-full flex flex-col gap-6"
      >
        <Controller
          control={control}
          name="language"
          render={({ field, fieldState }) => (
            <Select
              placeholder="Languages"
              value={field.value}
              options={Object.values(Language)}
              onChange={(newValue) => field.onChange(newValue)}
              onBlur={field.onBlur}
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
            />
          )}
        />
        <Button
          size="full"
          type="submit"
          variant="filled"
          text="Save"
          disabled={!isValid}
        />
      </form>
      <div className="absolute top-3 right-3">
        <Button
          size="icon"
          variant="icon"
          onClick={onClose}
          type="button"
          icon={<IoCloseCircleOutline size={24} />}
        />
      </div>
    </section>
  );
};

export default LanguagePopup;
