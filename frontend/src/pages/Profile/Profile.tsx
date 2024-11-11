import { FC } from "react";
import ProfileMenu from "../Account/components/ProfileMenu/ProfileMenu";
import { useParams } from "react-router";
import { BREAD_CRUMBS_BASE, PROFILE_COMPONENTS, PROFILE_PAGE } from "./data";
import BreadCrumbs from "./components/BreadCrumbs/BreadCrumbs";

const getProfilePageData = (profilePage?: PROFILE_PAGE) => {
  return PROFILE_COMPONENTS[profilePage ?? PROFILE_PAGE.ADDRESS];
};

const Profile: FC = () => {
  const { profilePage } = useParams<{ profilePage: PROFILE_PAGE }>();

  const { component: ProfileComponent, breadcrumb } =
    getProfilePageData(profilePage);

  const breadcrumbs = [...BREAD_CRUMBS_BASE, { link: "", name: breadcrumb }];

  return (
    <section className="container flex flex-col gap-6 pt-[64px]">
      <BreadCrumbs crumbs={breadcrumbs} />
      <div className="w-full m-auto flex flex-col gap-[59px] md:flex-row md:gap-3">
        <div className="w-full max-w-[296px] lg:max-w-[clamp(296px,168px+12.5vw,328px)] flex flex-col items-end gap-y-8 gap-x-8">
          <ProfileMenu />
        </div>
        <div className="w-full flex flex-col gap-6 md:pt-[59px]">
          <ProfileComponent />
        </div>
      </div>
    </section>
  );
};

export default Profile;
