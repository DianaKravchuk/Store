import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "@pages/Home";
import Layout from "./layout/Layout/Layout";
import Uikit from "@pages/Ui-kit/Ui-kit";
import Auth from "./pages/Auth";
import ErrorPage from "./pages/ErrorPage";
import Account from "./pages/Account";
import Profile from "@pages/Profile";

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />} errorElement={<ErrorPage />}>
      <Route path="/" element={<Home />} />
      <Route path="/ui-kit" element={<Uikit />} />
      <Route path="/auth/:authPage?" element={<Auth />} />
      <Route path="/account/:accountPage?" element={<Account />} />
      <Route path="/profile/:profilePage?" element={<Profile />} />
    </Route>,
  ),
);

export default route;
