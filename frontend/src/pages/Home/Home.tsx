import Advantages from "../../modules/Advantages/Advantages";
import Banners from "../../modules/Banners";
import NewCollection from "../../modules/NewCollection";
import SaleProducts from "../../modules/SaleProducts/SaleProducts";

const Home: React.FC = () => {
  return (
    <>
      <Banners />
      <Advantages />
      <NewCollection />
      <SaleProducts />
    </>
  );
};

export default Home;
