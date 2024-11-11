import { useAppSelector } from "@/redux/hooks";
import { userData } from "@/redux/slices/userSlice";
import Button from "@/Ui/Button/Button";
import { FC } from "react";
export interface PasswordProps {
  onEdit: () => void;
}
const Password: FC<PasswordProps> = ({ onEdit }) => {
  const { user } = useAppSelector(userData);
  const formattedPassword =
    user && user.password.replace(/./g, "*").replace(/(.{3})/g, "$1 ");
  return (
    <div className="w-full flex justify-end">
      {formattedPassword && (
        <div className="w-full max-w-[clamp(296px,208.453px+27.358vw,412px)] lg:max-w-[clamp(412px,-308px+70.313vw,592px)] flex flex-col gap-[41px] md:gap-0 mt-2.5 md:mt-0 pb-3 pr-6 pl-7 pt-7 bg-white rounded-3xl">
          <p className="tracking-tighter">{formattedPassword}</p>
          <div className="flex justify-end">
            <Button
              size="small"
              variant="text"
              textPosition="end"
              text="Edit"
              onClick={onEdit}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Password;
