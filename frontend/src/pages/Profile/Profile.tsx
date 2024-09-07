import { FC } from "react";
import ProfileMenu from "../Account/components/ProfileMenu/ProfileMenu";
import { ButtonLink } from "@/Ui/ButtonLink/ButtonLink";
import { GoArrowRight } from "react-icons/go";
import { useParams } from "react-router";
import { PROFILE_PAGE } from "./data";
import MyAddress from "./components/MyAddress/MyAddress";
import MyEmail from "./components/MyEmail/MyEmail";
import MyPurchases from "./components/MyPurchases/MyPurchases";
import Phone from "./components/Phone/Phone";
import Password from "./components/Password/Password";

const Profile: FC = () => {
  const { profilePage } = useParams<{ profilePage: PROFILE_PAGE }>();
  return (
    <section className="w-[1280px] m-auto px-[120px] pt-[168px] flex gap-6">
      <div className="w-ful w-[419px] flex flex-col items-end gap-y-8 gap-x-8">
        <div className="flex flex-col self-start gap-6">
          <ButtonLink
            size="icon"
            url="/account/profile"
            variant="icon"
            icon={
              <span className="flex items-center justify-center bg-transparent rounded-[50%] py-1 px-1 rotate-180">
                <GoArrowRight width={15} height={13} color="black" />
              </span>
            }
          />
          <h3 className="text-base text-black-000 font-inter self-start leading-[19px] pl-1">
            Profile
          </h3>
        </div>
        <ProfileMenu />
      </div>
      <div className="w-full max-w-[597px] flex flex-col gap-6 pt-[120px]">
        {profilePage === PROFILE_PAGE.ADDRESS ? (
          <MyAddress />
        ) : profilePage === PROFILE_PAGE.EMAIL ? (
          <MyEmail />
        ) : profilePage === PROFILE_PAGE.PURCHASES ? (
          <MyPurchases />
        ) : profilePage === PROFILE_PAGE.PHONE ? (
          <Phone />
        ) : profilePage === PROFILE_PAGE.PASSWORD ? (
          <Password />
        ) : (
          <MyAddress />
        )}
      </div>
    </section>
  );
};

export default Profile;
