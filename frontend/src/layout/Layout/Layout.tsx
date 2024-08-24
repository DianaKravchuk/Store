import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <div className="bg-[#f4f4f4]">
      <Header />
      <main className="w-full flex flex-col items-center">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
