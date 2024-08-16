import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "@pages/Home";
import Account from "@pages/Account";
import Layout from "./layout/Layout/Layout";
import Uikit from "@pages/Ui-kit/Ui-kit";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/account" element={<Account />} />
          <Route path="/ui-kit" element={<Uikit />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
