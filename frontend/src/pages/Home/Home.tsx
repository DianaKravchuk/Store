import Header from "../../modules/Header";
import NewCollection from "../../modules/NewCollection";
import SaleProducts from "../../modules/SaleProducts/SaleProducts";

const Home: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center absolute">
      <Header />
      <NewCollection />
      <SaleProducts />
    </>
  );
};

export default Home;
