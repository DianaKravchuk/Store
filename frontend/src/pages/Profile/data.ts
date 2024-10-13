import MyAddress from "./components/MyAddress/MyAddress";
import MyEmail from "./components/MyEmail/MyEmail";
import MyPurchases from "./components/MyPurchases/MyPurchases";
import Password from "./components/Password/Password";
import Phone from "./components/Phone/Phone";

export enum PROFILE_PAGE {
  ADDRESS = "address",
  PURCHASES = "purchases",
  EMAIL = "email",
  PHONE = "phone",
  PASSWORD = "password",
}

export const BREAD_CRUMBS_BASE = [
  { link: "/", name: "Account" },
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
  [PROFILE_PAGE.PHONE]: {
    component: Phone,
    breadcrumb: "Phone",
  },
  [PROFILE_PAGE.PASSWORD]: {
    component: Password,
    breadcrumb: "Change password",
  },
};
