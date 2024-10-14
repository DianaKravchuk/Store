import ChangePassword from "./components/ChangePassword/ChangePassword";
import MyAddress from "./components/MyAddress/MyAddress";
import MyEmail from "./components/MyEmail/MyEmail";
import MyPurchases from "./components/MyPurchaces/MyPurchases";

export enum PROFILE_PAGE {
  ADDRESS = "address",
  PURCHASES = "purchases",
  EMAIL = "email",
  PASSWORD = "password",
}

export const BREAD_CRUMBS_BASE = [
  { link: "/account", name: "Account" },
  { link: "/account/profile", name: "Profile" },
];

export const PROFILE_COMPONENTS = {
  [PROFILE_PAGE.ADDRESS]: {
    component: MyAddress,
    breadcrumb: "My address",
  },
  [PROFILE_PAGE.EMAIL]: {
    component: MyEmail,
    breadcrumb: "E-mail address",
  },
  [PROFILE_PAGE.PURCHASES]: {
    component: MyPurchases,
    breadcrumb: "My purchases",
  },
  [PROFILE_PAGE.PASSWORD]: {
    component: ChangePassword,
    breadcrumb: "Change password",
  },
};
