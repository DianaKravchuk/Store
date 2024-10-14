import ProductCard from "@/components/ProductCard/ProductCard";
import { ProductCardSize } from "@/components/ProductCard/types";
import { NEW_COLLECTION } from "@/pages/Home/data";
import { useAppSelector } from "@/redux/hooks";
import { selectFavoriteItems } from "@/redux/slices/userFavorites";

const Favorites = () => {
  const favoriteItems = useAppSelector(selectFavoriteItems);

  const filteredCollection = NEW_COLLECTION.filter((item) =>
    favoriteItems.includes(item.id),
  );

  return (
    <div className="pt-[50px] w-full m-auto">
      {filteredCollection.length ? (
        <div className="favorites">
          {filteredCollection.map((favorite) => (
            <ProductCard
              key={favorite.id}
              variant="favorites"
              size={ProductCardSize.SmallSquare}
              title={favorite.title}
              price={favorite.price}
              backgroundImage={favorite.backgroundImage}
              id={favorite.id}
            />
          ))}
        </div>
      ) : (
        <p className="text-xs text-black-000 text-center font-montserrat uppercase">
          You have no Favorites
        </p>
      )}
    </div>
  );
};

export default Favorites;
