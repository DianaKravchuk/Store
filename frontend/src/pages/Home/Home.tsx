import Advantages from "../../modules/Advantages/Advantages";
import Banners from "../../modules/Banners";
import NewCollection from "../../modules/NewCollection";
import SaleProducts from "../../modules/SaleProducts/SaleProducts";

const Home: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center gap-[200px] pt-[104px] pb-[212px]">
      <Banners />
      <Advantages />
      <NewCollection />
      <SaleProducts />
    </div>
  );
};

export default Home;
