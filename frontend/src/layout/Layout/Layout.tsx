import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <div className="bg-[#f4f4f4]">
      <Header />
      <main className="flex flex-col items-center pb-[100px] md:pb-[200px]">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  );
};

export default Layout;
