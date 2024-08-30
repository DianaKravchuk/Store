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
import Order from "./pages/Order";

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />} errorElement={<ErrorPage />}>
      <Route path="/" element={<Home />} />
      <Route path="/ui-kit" element={<Uikit />} />
      <Route path="/order" element={<Order />} />
      <Route path="/auth/:authPage?" element={<Auth />} />
    </Route>,
  ),
);

export default route;
