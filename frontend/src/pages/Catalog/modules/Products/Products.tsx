import ProductCard from "@/components/ProductCard/ProductCard";
import { CATALOG_DATA } from "@/pages/Home/data";

const Products = () => {
  return (
    <div className="home-section">
      {CATALOG_DATA.map((item) => (
        <ProductCard key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Products;
