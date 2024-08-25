import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "@pages/Home";
import Layout from "./layout/Layout/Layout";
import Uikit from "@pages/Ui-kit/Ui-kit";
import Auth from "./pages/Auth";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/ui-kit" element={<Uikit />} />
          <Route path="/auth/:authPage?" element={<Auth />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
